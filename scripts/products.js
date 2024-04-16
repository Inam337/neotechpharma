// Function to fetch data from the API
async function fetchData() {
  const baseURL =
    "http://localhost/neotechpharma/web/scripts/json/products.json";
  try {
    const response = await fetch(baseURL);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

let currentPage = 1;
const itemsPerPage = 12;
let selectedProductForm = "powder";
async function renderData(page) {
  try {
    const productList = document.getElementById("product-list");
    const pagination = document.getElementById("pagination");
    productList.innerHTML = "<p>Loading...</p>";
    const data = await fetchData();

    if (!data) {
      console.error("No data fetched");
      return;
    }

    productList.innerHTML = "";

    let filteredData = data;
    if (selectedProductForm) {
      filteredData = data.filter(
        (product) => product.product_form === selectedProductForm
      );
    }

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = filteredData.slice(startIndex, endIndex);

    currentPageData.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("col-md-4", "mt-2", "mb-2");
      productElement.innerHTML = `<div class='card card-background'>
        <a href='productsdetails.html?id=${product.id}'>
            <div class='card-body text-center'>
              <div class='mb-2'>
                <h6 class='font-weight-semibold mb-2'>
                  ${product.name}
                </h6>
                <span class='font-weight-semibold'>
                  ${product.product_form}
                </span>
              </div>
              </div>
            </div>
            </a>
          `;
      productList.appendChild(productElement);
    });

    renderPagination(filteredData.length);
  } catch (error) {
    console.error("Error rendering data:", error);
  }
}

function renderPagination(totalItems) {
  const pagination = document.getElementById("pagination");
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  pagination.innerHTML = "";

  // Previous Button
  const prevButton = document.createElement("button");
  prevButton.textContent = "Previous";
  prevButton.classList.add("btn", "btn-sm", "btn-outline-primary", "mr-2");
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderData(currentPage);
    }
  });
  pagination.appendChild(prevButton);

  // Page Buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("btn", "btn-sm", "btn-outline-primary", "mr-2");
    if (currentPage === i) {
      pageButton.classList.add("active"); // Adding active class
    }
    pageButton.addEventListener("click", () => {
      currentPage = i;
      renderData(currentPage);
    });
    pagination.appendChild(pageButton);
  }

  // Next Button
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.classList.add("btn", "btn-sm", "btn-outline-primary");
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderData(currentPage);
    }
  });
  pagination.appendChild(nextButton);
}

document.getElementById("toggleButton").addEventListener("click", () => {
  selectedProductForm = selectedProductForm === "powder" ? "liquid" : "powder";
  document.getElementById(
    "selectedProductForm"
  ).textContent = `(${selectedProductForm})`;
  currentPage = 1;
  renderData(currentPage);
});

// Call the renderData function to display data for the initial page
renderData(currentPage);

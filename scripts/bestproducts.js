// Function to fetch data from the API
async function fetchData() {
  const baseURL =
    "http://localhost/neotechpharma/web/scripts/json/bestproducts.json";
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
const itemsPerPage = 3;

async function renderData(page) {
  try {
    const productList = document.getElementById("bestproducts-list");
    const pagination = document.getElementById("pagination");
    // Show loading indicator
    productList.innerHTML = "<p>Loading...</p>";
    const data = await fetchData();

    if (!data) {
      console.error("No data fetched");
      return;
    }

    // Clear the productList before rendering new items
    productList.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);

    currentPageData.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("col-md-4", "mt-2", "mb-2");
      productElement.innerHTML = `<div class='card'>
                  <div class='card-img-actions'>
                    <img
                      src=${product.image}
                      class='card-img img-fluid'alt='${product.name}'
                    />
                     <b class='font-weight-semibold mb-2 best-product '>
                      ${product.product_label}
                    </b>
                  </div>

                <div class='card-body bg-light text-center'>
                  <div class='mb-2'>
                 
                    <h6 class='font-weight-semibold mb-2'>
                      ${product.name}
                    </h6>
 <span class='font-weight-semibold mb-2'>
                      ${product.product_form}
                    </span>
                    
                  </div>

                  <a class='btn btn-primary btn-sm view-button' href='productsdetails.html?id=${product.id}'>
                    View Details
                  </a>
                </div>
              </div>
            `;
      productList.appendChild(productElement);
    });

    renderPagination(data.length);
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

// Call the renderData function to display data for the initial page
renderData(currentPage);

// Retrieve product ID from URL query string
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

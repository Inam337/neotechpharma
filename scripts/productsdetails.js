// Retrieve product ID from URL query string
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Function to fetch product details from the backend
async function fetchProductDetails(productId) {
  const baseURL =
    "http://localhost/neotechpharma/web/scripts/json/products.json"; // Change this URL to your backend endpoint
  try {
    const response = await fetch(baseURL);
    if (!response.ok) {
      throw new Error("Failed to fetch product details");
    }
    const data = await response.json();
    // Find the product with the matching ID
    const product = data.find((product) => product.id === parseInt(productId));
    return product;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}

// Render product details on the page
async function renderProductDetails(productId) {
  try {
    const product = await fetchProductDetails(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    // Display product description as HTML
    document.getElementById("product-detail").innerHTML = `
    

    <div class='card mb-4'>


  <div class='card-body' >
    <div class='card-image'>  <img
                      src=${product.image}
                      class='card-img img-fluid'alt='${product.name}'
                    /></div>
   <h2 class='card-title text-left'>${product.name}</h2>
   <h6 class='card-text'>${product.product_form}</h6> 
   <div class='product-composition-table'>
      <h2>Composition</h2>
        <table>
          <caption>
            <span>${product.composition.heading}</span>
          </caption>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>

              ${product.composition.ingredient_list
                .map(
                  (item) =>
                    `<tr><td>${item.label}</td><td>$${item.value}</td></tr>`
                )
                .join("")}
            
          </tbody>

          <tfoot>
            <tr>
              <td colspan="2">
                <b>(${product.composition.notes})*</b>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class='product-description-block'>
          <h2 class='card-title text-left'>Description</h2>
           <p class='card-text text-left'>${product.description}</p> 
    </div>
  </div>
  
</div>
    
    
   
      

      `;
  } catch (error) {
    console.error("Error rendering product details:", error);
    document.getElementById("product-detail").textContent =
      "Error: Product details not available";
  }
}

// Call renderProductDetails function with the provided productId
renderProductDetails(productId);

// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products");
    const data = response.json();

    resolve({ data });
  });
}


export function fetchAllProductsById(productId) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products/"+productId);
    const data = response.json();

    resolve({ data });
  });
}


export function fetchProductsByFilters(filter) {
  // {category:"laptops"}
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
     console.log(queryString)
  }

  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products?"+queryString);
    const data = response.json();

    resolve({ data });
  });
}

export function getProducts() {
  return fetch('/api/products')
            .then(response => response.json());
}

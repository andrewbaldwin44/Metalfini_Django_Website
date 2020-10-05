export function getProducts() {
  return fetch('/api/products')
            .then(response => response.json());
}

export function getOpposite(language) {
  return language === 'English' ? 'Français' : 'English';
}

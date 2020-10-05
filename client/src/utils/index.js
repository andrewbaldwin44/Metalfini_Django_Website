export function getProducts() {
  return fetch('/api/products')
            .then(response => response.json());
}

export function getOpposite(language) {
  return language === 'English' ? 'Français' : 'English';
}

export function getLanguageSpecific(product, language) {
  if (language === 'English') {
    return {
      name: product.name,
      description: product.description
    }
  }
  else {
    return {
      name: product.french_name,
      description: product.french_description
    }
  }
}

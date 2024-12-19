export const ProductQuery = {
    query: "query { products(first: 10) { edges { node { id title descriptionHtml images(first: 5) { edges { node { url } } } variants(first: 5) { edges { node { id title price { amount currencyCode } } } } } } } }"
  };
  
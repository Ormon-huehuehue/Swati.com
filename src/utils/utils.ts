

const fetchProducts = async ()=> {
    const response = await fetch('https://your-shopify-store.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': 'your-access-token', // Replace with your access token
      },
      body: JSON.stringify({
        query: `
          query {
            products(first: 10) {
              edges {
                node {
                  id
                  title
                  descriptionHtml
                  images(first: 5) {
                    edges {
                      node {
                        url
                      }
                    }
                  }
                  variants(first: 5) {
                    edges {
                      node {
                        id
                        title
                        price {
                          amount
                          currencyCode
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
  
    const data = await response.json();
    return data;
  };
import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

// running in isolation in development mode
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('products');

  // assuming our container doesnt have #products element
  if (el) {
    mount(el);
  }
}

// running in container (prod/development)
export { mount };

import faker from 'faker';

const mount = (el) => {
  const cartItems = `<div> You have ${faker.random.number()} items in your cart.`;
  el.innerHTML = cartItems;
};

// running in isolation in development mode
if (process.env.NODE_ENV === 'development') {
  const el = document.getElementById('cart');

  // assuming our container doesnt have #cart element
  if (el) {
    mount(el);
  }
}

// running in container (prod/development)
export { mount };

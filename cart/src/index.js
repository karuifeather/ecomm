import faker from 'faker';

const cartItems = `<div> You have ${faker.random.number()} items in your cart.`;

document.getElementById('root-cart').innerHTML = cartItems;

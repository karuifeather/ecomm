import { mount as mountProducts } from 'products/ProductsIndex';
import { mount as mountCart } from 'cart/CartIndex';

console.log('Hey from the container!!');

mountProducts(document.getElementById('root-products'));
mountCart(document.getElementById('root-cart'));

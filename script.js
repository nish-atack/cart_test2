const products = [
{ id: 1, title: '楊貴妃', price: 300, qty: 1, image: 'youkihi.jpg' },
{ id: 2, title: '幹之', price: 1000, qty: 1, image: 'miyuki.jpg' },
{ id: 3, title: '月弓', price: 1500, qty: 1, image: 'tsukuyumi.jpg' },
{ id: 4, title: '夜桜', price: 1800, qty: 1, image: 'yozakura.jpg' }];


function formatNumber(n, c, d, t) {
  var c = isNaN(c = Math.abs(c)) ? 2 : c,
  d = d === undefined ? '.' : d,
  t = t === undefined ? ',' : t,
  s = n < 0 ? '-' : '',
  i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
  j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};

// Allow the formatNumber function to be used as a filter
Vue.filter('formatCurrency', function (value) {
  return formatNumber(value, 0, '.', ',');
});

// The shopping cart component
Vue.component('shopping-cart', {
  props: ['items'],

  computed: {
    Total() {
      let total = 0;
      this.items.forEach(item => {
        total += item.price * item.qty;
      });
      return total;
    } },


  methods: {
    // Remove item by its index
    removeItem(index) {
      this.items.splice(index, 1);
    } } });



const vm = new Vue({
  el: '#app',

  data: {
    cartItems: [],
    items: products },


  computed: {
    totalItems() {
      return this.cartItems.reduce((accumulator, item) => {
        return accumulator + item.qty;
      }, 0);
    } },


  methods: {
    // Add Items to cart
    addToCart(itemToAdd) {
      let found = false;

      // Add the item or increase qty
      let itemInCart = this.cartItems.filter(item => item.id === itemToAdd.id);
      let isItemInCart = itemInCart.length > 0;

      if (isItemInCart === false) {
        this.cartItems.push(Vue.util.extend({}, itemToAdd));
      } else {
        itemInCart[0].qty += itemToAdd.qty;
      }

      itemToAdd.qty = 1;
    } } });
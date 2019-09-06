import uuid from 'uuid';

export default {
  state: {
    products: [
      {
        id: uuid.v4(),
        name: 'Qwe',
        price: 200,
        img: 'glass0.png',
        is_new: true,
      },
      {
        id: uuid.v4(),
        name: 'Asd',
        price: 90,
        img: 'glass1.png',
        is_new: false,
      },
      {
        id: uuid.v4(),
        name: 'Zxc',
        price: 388,
        new_price: 200,
        img: 'glass2.png',
        is_new: false,
      },
      {
        id: uuid.v4(),
        name: 'Ert',
        price: 150,
        img: 'glass3.png',
        is_new: false,
      },
      {
        id: uuid.v4(),
        name: 'Fgh',
        price: 278,
        img: 'glass4.png',
        is_new: true,
      },
      {
        id: uuid.v4(),
        name: 'Vbn',
        price: 500,
        new_price: 250,
        img: 'glass5.png',
        is_new: false,
      },
      {
        id: uuid.v4(),
        name: 'Qwe',
        price: 200,
        img: 'glass0.png',
        is_new: false,
      },
      {
        id: uuid.v4(),
        name: 'Asd',
        price: 90,
        img: 'glass1.png',
        is_new: false,
      },
      {
        id: uuid.v4(),
        name: 'Zxc',
        price: 388,
        new_price: 200,
        img: 'glass2.png',
        is_new: false,
      },
    ],
    cart: [],
    is_show_cart: false,
  },
  mutations: {
    add_to_cart(state, item) {
      state.cart.push({
        ...item,
        id: uuid.v4(),
      });
    },
    remove_from_cart(state, id) {
      state.cart = state.cart.filter(item => item.id != id);
    },
    set_show_cart(state) {
      state.is_show_cart = !state.is_show_cart;
    },
  },
  actions: {
    add_to_cart({ commit }, item) {
      commit('add_to_cart', item);
    },
    remove_from_cart({ commit }, id) {
      commit('remove_from_cart', id);
    },
    set_show_cart({commit}) {
      commit('set_show_cart');
    }
  },
  getters: {
    products: state => state.products,
    cart: state => state.cart,
    is_show_cart: state => state.is_show_cart,
  },
}

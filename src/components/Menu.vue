<template>
  <div class="menu">
    <div class="menu-left">
      <span>LEO SHOP</span>
    </div>
    <div class="menu-middle">
      <a class="menu-middle__link" href="#home">HOME</a>
      <a class="menu-middle__link" href="#women">WOMEN</a>
      <a class="menu-middle__link" href="#men">MEN</a>
      <a class="menu-middle__link" href="#other">OTHER</a>
      <a class="menu-middle__link" href="#purchase">PURCHASE</a>
    </div>
    <div class="menu-right">
      <input class="menu-right__search" type="text" placeholder="Search.." name="search">
      <div class="circle tag"></div>
      <div class="circle cart" v-on:click="set_show_cart"></div>
      <span 
        class="menu-right__cart" 
        v-on:click="set_show_cart" 
        v-text="`CART (${cart.length})`">
      </span>
    </div>
  </div>
</template>

<script>
import Modal from './Modal.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Menu',
  components: {
    Modal,
  },
  computed: {
    ...mapGetters([
      'cart'
    ]),
  },
  watch: {
    cart: 'watch_cart',
  },
  methods: {
    ...mapActions([
      'set_show_cart',
    ]),
    watch_cart() {
      if (!this.cart.length) this.set_show_cart();
    },
  },
}
</script>

<style scoped>
.menu {
  overflow: hidden;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
}
.menu-left {
  font-size: 36px;
  font-family: 'OpenSans', Helvetica, Arial, sans-serif;
  color: #656565;
}
.menu-middle {
  margin: auto;
}
.menu-middle__link {
  text-align: center;
  padding: 5px;
  color: #656565;
  text-decoration: none;
  font-size: 1em;
}
.menu-right {
  margin: auto 0;
  display: flex;
  justify-content: space-between;
}
.menu-right__search {
  border: 1px solid #aaa;
  margin: auto;
  height: 2em;
  outline: none;
  text-indent: 5px;
  background: url('../assets/search.svg') no-repeat scroll 100px;
  background-size: 15px;
}
.tag {
  background: url('../assets/tag.svg') no-repeat scroll 6px #7db122;
}
.cart {
  background: url('../assets/cart.svg') no-repeat scroll 6px #7db122;
}
.menu-right__cart {
  margin: auto 5px;
  cursor: pointer;
}
.circle {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-size: 15px;
  margin-left: 5px;
  cursor: pointer;
}
@media screen and (max-width: 500px) {
  .menu-right {
    float: none;
    display: grid;
    grid-gap: 10px;
  }
  .menu-middle__link {
    float: none;
    display: block;
    text-align: left;
  }
}
</style>

<template>
  <div class="modal">
    <button class="modal-close" v-on:click="set_show_cart"></button>
    <div v-if="cart.length" class="modal-container">
      <div class="modal-item" v-for="product in cart" :key="product.id">
        <Item :item="product" :is_cart="true" />
      </div>
    </div>
    <div v-else class="modal-empty">
      <span>Cart is empty</span>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Modal',
  components: {
    Item,
  },
  computed: {
    ...mapGetters([
      'cart',
    ]),
  },
  methods: {
    ...mapActions([
      'set_show_cart',
    ]),
  },
}
</script>

<style scoped>
.modal {
  position: fixed;
	z-index: 100;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
  background: rgba(14, 69, 86, 0.8);
}
.modal-container {
	position: absolute;
  overflow-y: auto;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	max-height: 350px;

  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 10px;
  background: transparent;
}
.modal-item {
  height: 150px;
  width: 100px;
  background-color: #fff;
  border-radius: 5px;
}
.modal-close {
  cursor: pointer;
  outline: none;
  height: 25px;
  width: 25px;
  background-color: transparent;
  background-image: url(/img/cross.65136bf6.svg);
  background-size: contain;
  border: none;
  position: absolute;
  top: 20px;
  right: 35%;
}
.modal-empty {
  position: absolute;
  top: 50%;
  left: 45%;
  font-size: 30px;
  color: #fff;
}
@media screen and (max-width: 500px) {
  .modal-close {
    right: 10%;
  }
  .modal-empty {
    left: 30%;
  }
}
</style>

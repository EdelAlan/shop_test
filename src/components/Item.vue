<template>
  <div class="item">
    <div class="item-container">
      <div v-if="item.is_new && !is_cart" class="item-new_icon">
        <img :src="require('../assets/rect_new.svg')" />
        <span class="item-img_icon__text">NEW</span>
      </div>
      <div v-if="item.new_price && !is_cart" class="item-sale_icon">
        <img :src="require('../assets/rect_sale.svg')" />
        <span class="item-sale_icon__text">SALE</span>
      </div>
      <div class="item-img__container">
        <img class="item-img" :src="require(`../assets/glasses/${item.img}`)" />
      </div>
      <div class="item-footer__container">
        <div class="item-footer__first" v-text="item.name"></div>
        <div v-if="!is_cart">
          <div v-if="!item.new_price" class="item-footer__second">
            <span v-text="`$${item.price}`"></span>
          </div>
          <div v-else class="item-footer__second_new">
            <span class="item-footer__second_new__old" v-text="`$${item.price}`"></span>
            <span class="item-footer__second_new__new" v-text="`$${item.new_price}`"></span>
          </div>
        </div>
        <div v-else>
          <div class="item-footer__second">
            <span v-text="`$${item.new_price ? item.new_price : item.price}`"></span>
          </div>
        </div>
        <div class="item-footer__third">
          <div class="item-footer__btn" :class="{ 'trash_btn' : is_cart }" v-on:click="click_on_btn"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Item',
  props: {
    item: Object,
    is_cart: Boolean,
  },
  methods: {
    ...mapActions([
      'add_to_cart',
      'remove_from_cart',
    ]),
    click_on_btn() {
      !this.is_cart ? 
        this.add_to_cart(this.item) : 
        this.remove_from_cart(this.item.id);
    },
  },
}
</script>

<style scoped>
.item {
  width: 100%;
  height: 100%;
}
.item-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.item-img__container {
  margin: 5px;
  height: 150px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
}
.item-new_icon {
  position: absolute;
  right: 0;
}
.item-img_icon__text {
  position: absolute;
  left: 38px;
  transform: rotate(45deg);
  top: 22px;
  font-size: 18px;
  font-weight: 900;
  color: #fff;
}
.item-sale_icon {
  position: absolute;
  left: 0;
}
.item-sale_icon__text {
  position: absolute;
  left: 15px;
  transform: rotate(-45deg);
  top: 20px;
  font-size: 18px;
  font-weight: 900;
  color: #fff;
}
.item-img {
  max-width: 100%;
}
.item-footer__container {
  display: grid;
  margin-left: 10px;
  grid-template-areas:
    'a a c'
    'b b c';
}
.item-footer__container > div {
  font-size: 16px;
}
.item-footer__first {
  grid-area: a;
}
.item-footer__second {
  grid-area: b;
  color: #7db122;
}
.item-footer__second_new {
  grid-area: b;
}
.item-footer__second_new__old {
  font-size: 13px;
  text-decoration-line: line-through; 
}
.item-footer__second_new__new {
  color: #7db122;
}
.item-footer__third {
  grid-area: c;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-footer__btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: url('../assets/basket.svg') no-repeat scroll 6px #7db122;
  background-size: 15px;
  margin-left: 5px;
  cursor: pointer;
}
.trash_btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: url('../assets/trash.svg') no-repeat scroll 7px red;
  background-size: 15px;
  margin-left: 5px;
  cursor: pointer;
}
</style>

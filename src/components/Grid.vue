<template>
  <div class="grid">
    <span>FEATURED PRODUCTS</span>
    <div class="grid-container">
      <div v-for="product in products" :key="product.id">
        <Item :item="product" :is_cart="false" />
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Grid',
  components: {
    Item,
  },
  computed: {
    ...mapGetters([
      'products',
    ]),
  },
}
</script>

<style scoped>
.grid {
  margin-top: 20px;
  color: #656565;
}
.grid-container {
  margin: 0 200px 100px 0;
  display: grid;
  grid-template-columns: 180px 180px 180px;
  grid-gap: 25px;
  padding: 10px 0;
}
.grid-container > div {
  width: 180px;
  height: 200px;
  border: 1px solid #ccc;
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 5px #ccc;
}
@media screen and (max-width: 500px) {
  .grid {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .grid-container {
    grid-template-columns: 180px 180px;
    margin: 0;
  }
  .grid-container > div {
    width: 100%;
  }
}
</style>

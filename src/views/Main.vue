<template>
  <div class="main">
    <Modal v-show="is_show_cart" />
    <Header />
    <div class="content">
      <Menu />
      <Grid />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Menu from '../components/Menu.vue';
import Grid from '../components/Grid.vue';
import Modal from '../components/Modal.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Main',
  components: {
    Header,
    Footer,
    Menu,
    Grid,
    Modal,
  },
  computed: {
    ...mapGetters([
      'is_show_cart',
    ]),
  },
}
</script>

<style scoped>
.content {
  margin: 0 100px 0 100px;
}
@media screen and (max-width: 500px) {
  .content {
    margin: 0;
  }
}
</style>

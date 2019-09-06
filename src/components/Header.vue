<template>
  <div class="header">
    <div class="header-container">
      <div class="header-right">
        <a class="header-right_link" href="#account">Account</a>
        <span class="header-right_break">|</span>
        <a class="header-right_link" href="#whishlist">Whishlist</a>
        <span class="header-right_break">|</span>
        <a class="header-right_link" href="#checkout">Checkout</a>
        <span class="header-right_break">|</span>
        <a class="header-right_link" href="#login">Log In</a>
        <span class="header-right_break">|</span>
        <a class="header-right_link" href="#signup">Sign Up</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  background-color: #4cb1ca;
  overflow: hidden;
}
.header-container {
  margin: 0 100px 0 100px;
}
.header-right {
  float: right;
  display: flex;
}
.header-right_link {
  float: left;
  text-align: center;
  padding: 14px 0 14px 16px;
  color: #fff;
  text-decoration: none;
  font-size: 17px;
}
.header-right_break {
  padding: 14px 0 14px 16px;
  color: #fff;
}
@media screen and (max-width: 500px) {
  .header-container {
    margin: 0;
  }
  .header-right {
    float: none;
    display: block;
  }
  .header-right_link {
    float: none;
    display: block;
    text-align: left;
    padding: 10px 0;
  }
  .header-right_break {
    display: none;
  }
}
</style>

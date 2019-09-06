<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-left__text">
          <span>© Copyright 2019, All Rights Reserved.</span>
        </div>
      </div>
      <div class="footer-right">
        <a class="footer-right_link" href="#about">About us</a>
        <span class="footer-right_break">|</span>
        <a class="footer-right_link" href="#delivery">Delivery & Returns</a>
        <span class="footer-right_break">|</span>
        <a class="footer-right_link" href="#terms">Terms & Conditions</a>
        <span class="footer-right_break">|</span>
        <a class="footer-right_link" href="#contact">Contact Us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  background-color: #0b4b5a;
}
.footer-container {
  margin: 0 100px 0 100px;
  display: flex;
  justify-content: space-between;
}
.footer-left__text {
  padding: 20px 0;
  color: #8adcf0;
}
.footer-right {
  float: right;
  display: flex;
}
.footer-right_link {
  float: left;
  text-align: center;
  padding: 20px 0 20px 16px;
  color: #8adcf0;
  text-decoration: none;
  font-size: 17px;
}
.footer-right_break {
  padding: 20px 0 20px 16px;
  color: #8adcf0;
}
@media screen and (max-width: 500px) {
  .footer {
    position: relative;
  }
  .footer-container {
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
  .footer-right {
    float: none;
    display: block;
  }
  .footer-right_link {
    float: none;
    display: block;
    text-align: left;
    padding: 10px 0;
  }
  .footer-right_break {
    display: none;
  }
}
</style>

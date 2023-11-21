<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :postdata="postdata" :step="step" />
  <button class="load-more-button" @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- <div v-if="selectedTap == 0">내용0</div>
  <div v-if="selectedTap == 1">내용1</div>
  <div v-if="selectedTap == 2">내용2</div>

  <button @click="selectedTap= 0">버튼0</button>
  <button @click="selectedTap= 1">버튼1</button>
  <button @click="selectedTap= 2">버튼2</button> -->
</template>

<script>
import Container from "./components/Container.vue";
import postdata from "./assets/postdata.js";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      postdata: postdata,
      morepostcnt: 0,
      step : 0,
      // selectedTap: 0,
    };
  },
  components: {
    Container,
  },
  methods: {
    more() {
      axios
        .get(`https://codingapple1.github.io/vue/more${this.morepostcnt}.json`)
        .then((morebtn) => {
          this.postdata.push(morebtn.data);
          this.morepostcnt++;
        });
    },
  },
};
</script>

<style>
@import "style.css";
</style>

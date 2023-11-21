<template>
  <div class="header">
    <ul class="header-button-left">
      <li @click="step--">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">Post</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :postdata="postdata" :step="step" :uploadImage="uploadImage" @write="uploadContent = $event"/>
  <button class="load-more-button" @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
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
      step: 0,
      uploadImage: "",
      uploadContent : ''
      // selectedTap:, 0,
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
    upload(e) {
      let uploadFile = e.target.files;
      let uploadFileURL = URL.createObjectURL(uploadFile[0]);
      this.step++;
      this.uploadImage = uploadFileURL;
    },
    publish() {
      var newPost = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=10",
        postImage: this.uploadImage,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.uploadContent,
        filter: "perpetua",
      };
      this.postdata.unshift(newPost);
      this.step = 0;
    },
  },
};
</script>

<style>
@import "style.css";
</style>

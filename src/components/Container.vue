<template>
  <div>
    <div v-if="step == 0">
    <!-- postdata 배열의 각 요소에 대해 반복하여 Post 컴포넌트를 생성합니다 -->
    <Post v-for="post in postdata" :key="post.id" :postdata="post" />
    </div>

    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
    <div class="upload-image" :style="`background-image: url(${uploadImage})`"></div>
    <div class="filters">
      
      <FilterBox :filterName="filterName"  :uploadImage="uploadImage" v-for="filterName in imageFilters" :key="filterName" >
        {{ filterName }}
      </FilterBox>
    </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
    <div class="upload-image" :style="`background-image: url(${uploadImage})`"></div>
    <div class="write">
      <textarea @input="$emit('write', $event.target.value)" class="write-box">write!</textarea> 
    </div>
    </div>
  </div>
</template>

<script>
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";

export default {
  data() {
    return {
      imageFilters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
"inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
"reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
    }
  },
  components: {
    Post,
    FilterBox,
  },
  props: {
    postdata: Array,
    step : Number,
    uploadImage : String,
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>
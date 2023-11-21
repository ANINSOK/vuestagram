<template>
  <div>
    <!-- postdata 배열의 각 요소에 대해 반복하여 Post 컴포넌트를 생성합니다 -->
    <Post v-for="post in postdata" :key="post.id" :postdata="post" />
  </div>
</template>

<script>
import Post from './Post.vue';

export default {
  components: {
    Post,
  },
  props: {
    postdata : Array,
  }
};
</script>

<style>
</style>
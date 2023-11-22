<template>
  <div class="post">
    <div class="post-header">
      <div class="profile"></div>
      <span class="profile-name">{{ postdata.name }}</span>
    </div>
    <div :class="postdata.filter" @dblclick="pushLikes" class="post-body" :style="{ backgroundImage: `url(${postdata.postImage})` }"></div>
    <div class="post-content">
      <p>{{ postdata.likes }} Likes</p>
      <p><strong>{{ postdata.name }}</strong> {{ postdata.content }}</p>
      <p class="date">{{ postdata.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props : {
    postdata : Object
  },
  methods: {
    pushLikes() {
      this.$store.commit('pushLikes', this.postdata.id);
    },
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}

.load-more-button {
  background-color: #0095f6; /* 인스타그램 블루 */
  color: #fff; /* 흰색 텍스트 */
  padding: 8px 16px; /* 내용과 버튼 간 여백 조절 */
  border: none; /* 테두리 없애기 */
  border-radius: 8px; /* 둥근 모서리 만들기 */
  font-size: 16px; /* 폰트 크기 조절 */
  cursor: pointer; /* 커서 모양 변경 */
  transition: background-color 0.3s ease; /* 부드러운 색상 변화 애니메이션 */
}

.load-more-button:hover {
  background-color: #007bb5; /* 버튼에 마우스를 올렸을 때의 색상 변화 */
}

</style>
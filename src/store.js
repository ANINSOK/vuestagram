import { createStore } from "vuex";
import postdata from "./assets/postdata";

const store = createStore({
  state() {
    return {
      postdata: postdata,
      name : 'kim',
      age : 20,
      likes : 30,
      unlike : true,
    };
  },
  mutations: {
    pushLikes(state, postId) {
      const post = state.postdata.find((post) => post.id === postId);
      if (post.liked == false) {
        post.likes++;
        post.liked = true;
      } else {
        post.likes--;
        post.liked = false;
      }
    }
  }
});

export default store;

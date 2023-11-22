import { createStore } from "vuex";
import postdata from "./assets/postdata";
import axios from "axios";

const store = createStore({
  state() {
    return {
      postdata: postdata,
      name: "kim",
      age: 20,
      likes: 30,
      more : {},
    };
  },
  mutations: {
    setMore(state, data){
      state.more = data
    },
    pushLikes(state, postId) {
      const post = state.postdata.find((post) => post.id === postId);
      if (post.liked == false) {
        post.likes++;
        post.liked = true;
      } else {
        post.likes--;
        post.liked = false;
      }
    },
  },
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        console.log(a.data);
        context.commit('setMore', a.data)
      });
    },
  },
});

export default store;

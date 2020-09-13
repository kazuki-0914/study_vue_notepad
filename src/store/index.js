import Vue from "vue";
import Vuex from "vuex";
import createdPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
  plugins:[createdPersistedstate()],
  state: {
    memos: [
        { id: 1, body: "サンプルメモ1" },
        { id: 2, body: "サンプルメモ2" },
    ],
  },
  mutations:{
      save(state,memo){
          //idカウントアップ
          var max = state.memos[state.memos.length-1].id;
          memo.id = max +1;
          state.memos.push(memo);
      },
      update(state,data){
        //idカウントアップ
        // var max = state.memos[state.memos.length-1].id;
        // memo.id = max +1;
        let x = state.memos.find(memo => memo.id == data.id);
        x.body =data.body;
    }
  }
});

<template>
  <div class="editor">
    <Header>Edit memo</Header>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button v-on:click="update">保存</button>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "edit",
  components: {
    Header,
  },
  data: function() {
    return {
      memoBody: "",
    };
  },
  mounted: function() {
    let id = this.$route.params["id"];
    let memo = this.$store.state.memos.find((memo) => memo.id == id);
    this.memoBody = memo.body;
  },
  // computed: {
  //   memo: function() {
  //     let id = this.$route.params["id"];
  //     //stream?関数処理
  //     return this.$store.state.memos.find((memo) => memo.id == id);
  //   },
  // },
  methods: {
    // update: function() {
    //   // alert('保存されました');
    //   this.$store.commit("update", {
    //     id: this.memo.id,
    //     body: this.memo.body,
    //   });
    //   this.$router.push("/list");
    // },
    update: function() {
      this.$store.commit("update", {
        id: this.$route.params["id"],
        body: this.memoBody,
      });
      this.$router.push("/list");
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 10em;
}
button {
  border: 1px solid #333;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  margin-top: 10px;
}
</style>

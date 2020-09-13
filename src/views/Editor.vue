<template>
  <div class="editor">
    <h1>Edit memo</h1>
    <textarea name="memo" v-model="memo.body"></textarea>
    <button v-on:click="update">保存</button>
  </div>
</template>

<script>
export default {
  name: "edit",
  computed: {
    memo: function() {
      let id = this.$route.params["id"];
      //stream?関数処理
      return this.$store.state.memos.find((memo) => memo.id == id);
    },
  },
  methods: {
    update: function() {
      // alert('保存されました');
      this.$store.commit("update", {
        id:this.memo.id,
        body: this.memo.body,
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

<template>
  <div class="editor">
    <Header>New memo</Header>
    <textarea name="memo" v-model="memoBody"></textarea>
    <button v-on:click="save">保存</button>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "new",
  components: {
    Header,
  },
  data: function() {
    return {
      memoBody: "test",
    };
  },
  methods: {
    save: function() {
      // alert('保存されました');
      this.$store.commit("save", {
        // id:3,
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

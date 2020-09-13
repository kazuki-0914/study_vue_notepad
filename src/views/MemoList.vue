<template>
  <div class="list">
    <ul v-for="memo in newest" v-bind:key="memo.id">
      <li>{{ memo.body }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "list",
  computed: {
    newest: function() {
      return this.$store.state.memos.slice().reverse();
    },
  },
};
</script>

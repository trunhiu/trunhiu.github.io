<template>
  <div class="task">
    <span>{{ taskData.todo }}</span>
  </div>
</template>

<script>
export default {
  props: ["taskData"],
  data() {
    return {
      content: "ABC",
    };
  },
};
</script>

<style scoped></style>

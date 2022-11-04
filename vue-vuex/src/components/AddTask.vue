<template>
  <div>
    <input type="text" />
    <button @click="onAddTask">Add</button>
  </div>
</template>

<script>
export default {
  props: ["onAddTask"],
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <input type="checkbox" v-model="tasks.status" />
    <label :class="{ done: task.status }">{{ task.name }}</label>
  </div>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>

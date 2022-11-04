<template>
  <div>
    <span>{{ name }}</span>
    <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TaskItem from "./TaskItem.vue";
export default {
  props: ["tasks"],
  computed: {
    ...mapGetters(["name"]),
  },
  components: { TaskItem },
};
</script>

<style lang="scss" scoped></style>

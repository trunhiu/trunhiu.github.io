<template>
  <div id="app">
    <AddTask @onAddTask="addTask" />
    <TaskList :tasks="tasks" />
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import AddTask from "./components/AddTask.vue";
export default {
  data() {
    return {
      tasks: [],
      newTask: { name: "", status: false },
    };
  },
  methods: {
    addTask(name) {
      this.tasks.push({ name: name, status: false });
    },
  },
  components: { TaskList, AddTask },
};
</script>

<style></style>

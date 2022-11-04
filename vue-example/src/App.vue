<template>
  <div id="app">
    <div v-show="isShow">
      <h1 :id="id" :class="{ daChon: selected, Size: fontSize }">
        Vue example
      </h1>
      <button @click="(selected = !selected), (fontSize = !fontSize)">
        An/Hien mau
      </button>
      <br />
      <hr />
      <input type="text" :disabled="inputDisabled" />
      <button @click="inputDisabled = !inputDisabled">Mo/Khoa</button>
    </div>
    <button @click="isShow = !isShow">An/hien</button>
    <hr />
    <input type="text" v-model="chanel" />
    <button v-on:click="chanel = 'ABC'">Change</button>
    <hr />
    <input type="text" v-model="chanel2" />
    <button v-on:mouseover="chanel2 = 'ABC'">Change</button>
    <hr />
    <form action="/123">
      <input type="text" v-model="chanel3" />
      <button type="submit" @click.prevent="chanel3 = 'ABC'">Change</button>
    </form>
    <hr />
    <div v-show="issShow">Lập trình viên</div>
    <button @click="issShow = !issShow">
      <span v-if="isShow">Ẩn</span>
      <span v-else>Hiện</span>
    </button>
    <hr />
    <h2>Todo List</h2>
    <input type="text" v-model="newTask" />
    <button @click="addTask()">Add</button>
    <button @click="tasks.pop()">Delete</button>
    <!-- <div v-for="task in tasks" :key="task.id">
      <input type="checkbox" v-model="task.status" />
      <span :class="{ done: task.status }">{{ task.todo }}</span>
    </div> -->
    <hr />

    <input type="text" v-model="abc" />

    <div>{{ abc }}</div>
    <hr />
    <TaskExample v-for="task in tasks" :key="task.id" :taskData="task" />
    <hr />
    <TaskSelect />
    <hr />
    <CartCheckout />
  </div>
</template>

<script>
import TaskExample from "./components/Task-example.vue";
import TaskSelect from "./components/TaskSelect.vue";
import CartCheckout from "./components/CartCheckout.vue";
export default {
  data() {
    return {
      abc: "12234",
      isShow: true,
      id: "abc",
      inputDisabled: true,
      selected: true,
      fontSize: false,
      chanel: "Bui trung hieu",
      chanel2: "Bui trung hieu",
      chanel3: "Bui trung hieu",
      issShow: true,
      newTask: "",
      tasks: [
        {
          id: 1,
          todo: "Đi chợ",
          status: false,
        },
        {
          id: 2,
          todo: "Đi uống",
          status: false,
        },
        {
          id: 3,
          todo: "Đi ăn",
          status: false,
        },
        {
          id: 4,
          todo: "Đi chơi",
          status: false,
        },
      ],
    };
  },
  mounted() {},
  methods: {
    addTask: function () {
      this.tasks.push({ todo: this.newTask, status: false });
    },
  },
  watch: {
    newTask: function () {
      console.log("change");
    },
  },
  components: { TaskExample, TaskSelect, CartCheckout },
};
</script>

<style>
.daChon {
  color: red;
}

.Size {
  font-size: 50px;
}

.done {
  text-decoration: line-through;
}
</style>

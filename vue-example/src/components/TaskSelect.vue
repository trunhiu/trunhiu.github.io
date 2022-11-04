<template>
  <div>
    <div class="list">
      <div
        v-for="(language, index) in languages"
        :key="index"
        @click="language.selected = !language.selected"
        :class="{ selected: language.selected }"
      >
        {{ language.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { name: "PHP", selected: false },
        { name: "Javascript", selected: false },
        { name: "html", selected: false },
        { name: "css", selected: false },
        { name: "vuejs", selected: false },
        { name: "reactjs", selected: false },
      ],
    };
  },
};
</script>

<style>
.list div {
  display: inline-block;
  border: 1px solid #ebebeb;
  padding: 4px 15px;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
}
.selected {
  color: rgb(213, 44, 44);
  background-color: blanchedalmond;
}
</style>

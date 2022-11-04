<template>
  <div>
    {{ tongTien | dauChamPhanTach }}
    <button @click="tongTien += 20000">Plus</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tongTien: 1000000,
    };
  },
  filters: {
    dauChamPhanTach: function (number) {
      return number.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
      });
    },
  },
};
</script>

<style></style>

<template>

  <div class="text-center select-section pt-5">
    <select
      @change="$emit('filter', discSelected)"
      v-model="discSelected"
      class="form-select t-5"
      aria-label="Default select example"
    >
      <option selected>Choose a category</option>
      <option>Rock</option>
      <option>Pop</option>
      <option>Jazz</option>
      <option>Metal</option>
    </select>
    <button type="button" class="btn btn-dark">Filter</button>
    <div>Selected: {{ discSelected }}</div>
  </div>

</template>


<script>
export default {
  name: "Select",
  //components: { NOME-FILE-FIGLIO1, NOME-FILE-FIGLIO2 },
  data() {
    return {
      discSelected: "",
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>
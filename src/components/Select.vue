<template>

  <div class="text-center select-section pt-5">
      <label>Category selection:</label>
    <select
      @change="$emit('filter', discSelected)"
      v-model="discSelected"
      class="form-select t-5"
      aria-label="Default select example"
    >
      <option selected></option>
      <option>Rock</option>
      <option>Pop</option>
      <option>Jazz</option>
      <option>Metal</option>
    </select>
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
<template>
  <div>
      <Navbar></Navbar>
      <DiscsContainer></DiscsContainer>
  </div>
</template>

<script>
import DiscsContainer from './components/DiscsContainer.vue';
import Navbar from './components/Navbar.vue';


export default {
  name: 'App',
  components: {
    DiscsContainer,
    Navbar
  }
}
</script>

<style lang="scss">
@import "@/styles/app.scss";
</style>

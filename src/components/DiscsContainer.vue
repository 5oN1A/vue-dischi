<template>
  <main>
    <div class="container">
      <Loader :label="loading" v-if="loading === true"></Loader>

      <div class="row row-cols-5 g-4 py-5" v-else>
        <div class="col" v-for="(disc, index) in discsList" :key="index">
          <DiscCard
            :img="disc.poster"
            :title="disc.title"
            :author="disc.author"
            :year="disc.year"
          >
          </DiscCard>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import Loader from "./Loader.vue";
import axios from "axios";
import DiscCard from "./DiscCard.vue";

export default {
  name: "DiscsContainer",

  components: {
    DiscCard,
    Loader
  },

  data() {
    return {
      discsList: [],
      loading: true,
    };
  },
  mounted() {

    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {

        this.discsList = resp.data.response;
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      });
  },
};
</script>

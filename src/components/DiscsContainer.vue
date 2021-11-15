<template>
  <main>
    <div class="container">
      <div class="row row-cols-5 g-4 py-5">
           <div class="col" v-for="(disc, index) in discsList" :key="index">
               <DiscCard
                 :img="disc.poster"
               :title="disc.title"
               :author="disc.author"
               :year="disc.year">
               </DiscCard>
             

           </div>
        
      </div>
    </div>
  </main>
</template>


<script>
import axios from "axios";
import DiscCard from "./DiscCard.vue"

export default {
  name: "DiscsContainer",
  components: {DiscCard},
  data() {
    return {
      discsList: [],
    };
  },
  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then((resp) => {
        this.discsList = resp.data.response;
      });
  },
};
</script>

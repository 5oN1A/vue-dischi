<template>
  <main>
    <div class="container">
      <div class="row row-cols-5 g-4">
        <div class="col">
          <div class="card">
            <img
              class="card-img-top"
              src="https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg"
              alt="..."
            />
            <div class="card-body text-center">
              <h2 class="card-title py-3">TITOLO</h2>
              <div class="card-text">
                  <h3 class="mb-0">Bon Jovi</h3>
                  <h5 class="pb-5">1988</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<script>
import axios from "axios";
export default {
  name: "DiscsContainer",
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

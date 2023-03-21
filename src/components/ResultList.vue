<template>
  <div>
    <img alt="Random logo" class="logo" src="@/assets/randomList.png" width="125" height="125" />
    <h1>Result List</h1>
    <div>
      <ul class="my-list">
        <li v-for="(name, index) in shuffledArray" :key="index">{{ name }}</li>
      </ul>
    </div>
  </div>
  <button class="buttonRandom" @click="volver">Volver</button>
</template>

<script lang="ts">
export default {
  name: "ResultList",
  data() {
    return {
      shuffledArray: [] as string[],
    };
  },
  methods: {
    volver() {
      this.$router.go(-1);
    },
  },
  created() {
    console.log('this.shuffledArray',this.shuffledArray);
    // Obtén el array desordenado de la URL
    const query = this.$route.query;
    console.log('query',query);

    if (query && query.shuffledArray) {
      this.shuffledArray = query.shuffledArray as string[];
    }
  },
}
</script>

<style>
@media (prefers-color-scheme: dark) {
  body {
    background: #fff !important;
    color: black !important;
  }
}
.logo {
  height: 60px;
  display: block;
  margin: 0 auto;
  padding: 5px;
}
.logo:hover {
  filter: drop-shadow(0 0 3em rgb(0, 255, 0));
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  text-align: center;
}
.buttonRandom {
  background-color: rgb(255, 196, 10);
  color: black;
  font-family: 'Roboto', sans-serif;
  margin-top: 10px !important;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1em;
  border-color: transparent;
  display: block;
  margin: 0 auto;
}
.my-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.my-list li {
  font-size: 1.2em;
  margin-bottom: 0.5em; 
  border-bottom: 1px solid #ccc; 
  padding-bottom: 0.5em;
}
</style>

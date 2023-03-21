<template>
  <div>
    <img alt="Random logo" class="logo" src="@/assets/randomList.png" width="125" height="125" />
    <h1>Random Names</h1>
    <div>
      <textarea
        v-model="dataNames"
        class="my-textarea"
        placeholder="Type the names to generate random list, one per line"
        rows="10"
        cols="45"
      ></textarea>
    </div>
    <div>
      <button class="buttonRandom" @click="showDataName()">Randomize</button>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    data() {
      return {
        dataNames: '',
        shuffledArray: [] as string[]
      };
    },
    methods: {
      showDataName() {
        let arr = this.dataNames.split('\n');
        const shuffledArray = arr.sort(() => Math.random() - 0.5);
        this.shuffledArray = shuffledArray;
        this.$router.push({ path: '/resultList', query: { shuffledArray: shuffledArray } });
      }
    }
  };
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
  margin-top: 1em;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1em;
  border-color: transparent;
}
.my-textarea {
  font-size: 1.2em; 
  border: 1px solid #ccc; 
  border-radius: 15px; 
  padding: 0.5em; 
  font-family: 'Roboto', sans-serif;
  color: black !important;
}
</style>

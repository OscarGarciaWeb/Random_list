<template>
  <div>
    <img alt="Random logo" class="logo" src="@/assets/randomList.png" width="125" height="125" />
    <h1>Random list</h1>
  </div>
    <div>
      <textarea v-model="dataNames" class="textAreaList" placeholder="Type names , one per line you want to randomize order" rows="10" cols="40"></textarea>
    </div>
    <button class="buttonRandom" @click="showDataNames()">Random Names</button>
</template>

<script setup lang="ts">
// import RouterView from 'vue-router'
</script>

<script lang="ts">
  export default{
    // components: { RouterView },
    data(){
      return {
        dataNames: '',
      }
    },  
    methods: { 
      showDataNames(){
        console.log(this.dataNames);
        let arr = this.dataNames.split('\n');
        console.log('arr',arr)
        const shuffledArray = arr.sort((a, b) => 0.5 - Math.random());
        console.log('shuffledArray',shuffledArray)
      }
    }
  }
</script>

<style>
@media (prefers-color-scheme: dark) {
    body 
    {
        background: #fff !important;
        color: black !important;
    }
}
.logo {
  height: 60px;
  display:block;
  margin:0 auto;
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
.textAreaList{
  font-size: 1.2rem;
  background-color: white !important;
  color: black !important;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
.buttonRandom{
  background-color: rgb(255, 196, 10); 
  color: black;
  font-family: 'Roboto', sans-serif;
  margin-top: 1em;
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1em;
  border-color: transparent;
}
</style>
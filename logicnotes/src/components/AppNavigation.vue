<script setup>
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  import {ref} from "vue";
import router from "../router";

  let navigationListDisplay = ref("none");

  async function toggleNavigation()
  {
    if(navigationListDisplay.value == "none")
    {
      navigationListDisplay.value = "block";

      let element = document.getElementsByTagName("ul")[0];
      element.classList.add("slide-in-top");
      await sleep(750);
      element.classList.remove("slide-in-top");
    }
    else 
    {
      let element = document.getElementsByTagName("ul")[0];
      element.classList.add("slide-in-bottom");
      await sleep(750);
      element.classList.remove("slide-in-bottom");
      navigationListDisplay.value = "none";
    }
  }

  import { useRouter } from 'vue-router';

  const router1 = useRouter();

  function goTo(path)
  {
    router1.push({
      name: path,
    });
  }

</script>

<template>
  <nav>
    <h1 @click="toggleNavigation">
       Navigation 
    </h1>
    <ul 
      :style="{display: navigationListDisplay}"
    >
      <li @click="goTo('Home')">Home</li>
      <li @click="goTo('Notes')">Notes</li>
      <li>Sign-in</li>
      <li>Sign-up</li>
      <li>Account</li>
      <li @click="goTo('Settings')">Settings</li>
    </ul>
  </nav>
</template>

<style scoped>
    nav 
    {
      position:relative;
      left:0px;
      width:100vw;
      height:10vh;
      background-color:var(--theme2);
      color:var(--color);
      font-family: 'Montserrat', sans-serif;
      border-top:3px solid var(--color);
      border-bottom:3px solid var(--color);
    }
    h1 
    {
      position:relative;
      margin:0px;
      padding-top:20px;
      text-align:center;
      z-index:3;
    }
    ul 
    {
      display:none;
      position:relative;
      top:0px;
      margin:0px;
      padding:0px;
      height:50vh;
      z-index:2;
    }
    li 
    {
      position:relative;
      margin-left:0px;
      padding-top:20px;
      height:50px;
      list-style-type:none;
      text-align:center;
      font-size:20px;
      background-color:var(--theme2);
      color:var(--color);
    }
    @media screen and (min-width: 600px)
    {
      h1 
      {
        display:inline-block;
        left:30px;
        margin-right:85px;
        text-align:left;
      }
      ul 
      {
        position:relative;
        top:0px;
        display:inline-block !important;
        height:100%;
      }
      li 
      {
        position:relative;
        top:0px;
        padding-top:3vh;
        padding-bottom:3vh;
        display:inline-block;
        width:220px;
        height:4vh;
        cursor:pointer;
        background-color:transparent;
      }
      li:hover 
      {
        background-color:var(--theme1);
        color:var(--color);
      }
    }
</style>

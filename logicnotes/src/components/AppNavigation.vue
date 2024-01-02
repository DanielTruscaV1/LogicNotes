<script setup>
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  import {ref} from "vue";

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

</script>

<template>
  <nav>
    <h1 @click="toggleNavigation">
       Navigation 
    </h1>
    <ul 
      :style="{display: navigationListDisplay}"
    >
      <li>Home</li>
      <li>Notes</li>
      <li>Sign-in</li>
      <li>Sign-up</li>
      <li>Account</li>
      <li>Settings</li>
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
      background-color:rgb(40, 10, 70);
      color:white;
      font-family: 'Montserrat', sans-serif;
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
      background-color:rgb(60, 30, 90);
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
        display:inline-block !important;
        max-height:60px !important;
      }
      li 
      {
        display:inline-block;
        width:220px;
        cursor:pointer;
        background-color:transparent;
      }
      li:hover 
      {
        background-color:rgb(60, 30, 90);
      }
    }
</style>

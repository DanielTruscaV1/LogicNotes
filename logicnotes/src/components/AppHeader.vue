<script setup>

</script>

<template>
  <header>
    <h1>
      LogicNotes
    </h1>
  </header>
</template>

<style scoped>
    header 
    {
      position:relative;
      top:0px;
      left:0px;
      width:100vw;
      height:10vh;
      background-color:rgb(230, 230, 255);
      color:black;
      font-family: 'Montserrat', sans-serif;
      z-index:3;
    }
    h1 
    {
      position:absolute;
      top:15px;
      margin:0px;
      width:100vw;
      text-align:left;
      font-size:30px;
      text-align:center;
    }
    @media screen and (min-width: 600px)
    {
      h1 
      {
        left:30px;
        text-align:left;
      }
    }
</style>

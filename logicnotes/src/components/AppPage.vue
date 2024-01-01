<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function notesRedirect()
  {
    router.push('/notes');
  }
</script>

<template>
  <main>
    <h1>
      Welcome to the LogicNotes project!
    </h1>
    <img src="../assets/Logo1.png"/>
    <button @click="notesRedirect">
      See my notes
    </button>
  </main>
</template>

<style scoped>
    main 
    {
        position:relative;
        width:100vw;
        min-height:70vh;
        background-color:rgb(50, 30, 90);
        color:white;
        font-family: 'Montserrat', sans-serif;
        z-index:1;
    }
    h1 
    {
      margin:0px;
      padding-top:20px;
      font-size:20px;
      text-align:center;
    }
    img
    {
      position:relative;
      top:30px;
      left:10vw;
      width:80vw;
      height:30vh;
      border-radius:50px;
    }
    button 
    {
      position:relative;
      top:60px;
      left:25vw;
      width:50vw;
      height:60px;
      background-color:transparent;
      border:3px solid white;
      color:white;
      border-radius:20px;
      font-size:20px;
    }
</style>

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
    <h1 id="title">
      LogicNotes
    </h1>
    <h1 id="subtitle1">
      Discover the world of technology.
    </h1>
    <img src="../assets/logo3.svg"/>
  </main>
</template>

<style scoped>
    main 
    {
        position:relative;
        width:100vw;
        height:calc(100vh - 70px);
        background-color:var(--theme1);
        color:var(--color);
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
      height:50vh;
      border-radius:50px;
    }
    button 
    {
      position:absolute;
      margin-top:47.5vh;
      left:25vw;
      width:50vw;
      height:60px;
      background-color:var(--theme2);
      border:3px solid var(--color);
      color:var(--color);
      border-radius:20px;
      font-size:20px;
    }
    section 
    {
      margin-top:100px;
      margin-left:2.5vw;
      width:90vw;
      height:45vh;
      background-color:var(--theme2);
      border:3px solid var(--color);
    }
    section p 
    {
        margin-left:10%;
        width:80%;
        text-align:justify;
    }
    section button 
    {
        position:absolute !important;
        margin-top:30px;
        margin-left:0px;
        left:33%;
        width:33%;
        height:40px;
        border-radius:0px;
        cursor:pointer;
    }
    #title 
    {
      font-size:50px;
    }
    #subtitle 
    {
      font-size:20px;
    }
    @media screen and (min-width: 600px)
    {
      #title
      {
        position:absolute;
        top:5vh;
        left:5vw;
        padding:0px;
        font-size:100px;
      }
      #subtitle1
      {
        position:absolute;
        top:20vh;
        left:5vw;
        padding:0px;
        font-size:40px;
      }
      img 
      {
        position:absolute;
        top:5vh;
        left:30vw;
        width:80vw;
        height:calc(100vh - 30vh);
      }
      button 
      {
        display:none;
        margin-top:30vh;
        left:45vw;
        width:10vw;
        cursor:pointer;
      }
      button:hover 
      {
        background-color:var(--theme2);
        color:var(--color);
      }
      section 
      {
        margin-left:0px;
        position:absolute;
        width:20vw;
        height:30vh;
        background-color:var(--theme2);
        border:3px solid var(--color);
      }
      #section1 
      {
        display:none;
        top:2.5vh;
        left:2vw;
      }
      #section2 
      {
        display:none;
        top:calc(30vh + 7.5vh);
        left:2vw;
      }
      #section3 
      {
        display:none;
        top:2.5vh;
        right:2.5vw;
      }
      #section4 
      {
        display:none;
        top:calc(30vh + 7.5vh);
        right:2.5vw;
      }
      section p 
      {
        margin-left:10%;
        width:80%;
        text-align:justify;
      }
      section button 
      {
        position:absolute !important;
        margin-top:0px;
        margin-left:0px;
        top:22.5vh;
        left:33%;
        width:33%;
        height:40px;
        border-radius:0px;
        cursor:pointer;
      }
    }
</style>

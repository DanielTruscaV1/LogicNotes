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
    <img src="../assets/Logo2.png"/>
    <button @click="notesRedirect">
      See my notes
    </button>
    <section id="section1">
      <h1>
        Conditions
      </h1>
      <p>
        By using the LogicNotes website, you agree to be bound by our Terms and Conditions. If you do not agree with any part of these terms, you may not use our service.
      </p>
      <button>
        Read
      </button>
    </section>
    <section id="section2">
      <h1>
        Copyright
      </h1>
      <p>
        All content on this website, including text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of LogicNotes and is protected by international copyright laws.
      </p>
      <button>
        Read
      </button>
    </section>
    <section id="section3">
      <h1>
        Privacy
      </h1>
      <p>
        LogicNotes is committed to protecting the privacy of our users. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our services.
      </p>
      <button>
        Read
      </button>
    </section>
    <section id="section4">
      <h1>
        Help
      </h1>
      <p>
        At LogicNotes, we are committed to providing you with a seamless and enjoyable experience. Whether you're a new user or a seasoned pro, our Help resources are here to support you.
      </p>
      <button>
        Read
      </button>
    </section>
  </main>
</template>

<style scoped>
    main 
    {
        position:relative;
        width:100vw;
        min-height:81vh;
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
    @media screen and (min-width: 600px)
    {
      img
      {
        left:40vw;
        width:20vw;
        height:200px;
      }
      button 
      {
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
        position:absolute;
        width:20vw;
        height:30vh;
        background-color:var(--theme2);
        border:3px solid var(--color);
      }
      #section1 
      {
        top:2.5vh;
        left:2.5vw;
      }
      #section2 
      {
        top:calc(30vh + 7.5vh);
        left:2.5vw;
      }
      #section3 
      {
        top:2.5vh;
        right:2.5vw;
      }
      #section4 
      {
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

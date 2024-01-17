<script setup>
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }

  import {ref} from "vue";
import router from "../router";

  let navigationListDisplay = ref("none");

  import { useRouter } from 'vue-router';

  const router1 = useRouter();

  async function goTo(path)
  {
    if(path == 'Profile')
    {
      router1.push({
        name: path,
        params: {
          id: "none",
        }
      })
    }

    router1.push({
      name: path,
    });
  }

  const showNavigation = ref(false);

  async function toggleNavigation()
  {
    //Target elements
    let navigation_container = document.getElementById("navigation-container");
    let navigation_button = document.getElementById("navigation-button");

    navigation_button.classList.add("rotate-center");

    //Change style
    if(showNavigation.value == false)
    {
      navigation_container.style.display = "block";
      await sleep(600);
      navigation_button.innerHTML = "close";
    }
    else if(showNavigation.value == true)
    {
      navigation_container.style.display = "none";
      await sleep(600);
      navigation_button.innerHTML = "menu";
    }

    navigation_button.classList.remove("rotate-center");

    //Toggle variable
    showNavigation.value = !showNavigation.value;
  }

  const showLegalNotes = ref(false);

  async function toggleLegalNotes()
  {
    //Target elements
    let legal_notes_container = document.getElementById("legal-notes-container");
    let legal_notes_button = document.getElementById("legal-notes-button");

    legal_notes_button.classList.add("rotate-center");

    

    //Change style
    if(showLegalNotes.value == false)
    {
      legal_notes_container.style.display = "block";
      await sleep(600);
      legal_notes_button.innerHTML = "close";
    }
    else if(showLegalNotes.value == true)
    {
      legal_notes_container.style.display = "none";
      await sleep(600);
      legal_notes_button.innerHTML = "book";
    }
    

    legal_notes_button.classList.remove("rotate-center");

    //Toggle variable
    showLegalNotes.value = !showLegalNotes.value;
  }
</script>

<template>
  <nav>
    <button 
      id="navigation-button-container"
      @click="toggleNavigation"
    >
      <i id="navigation-button" class="material-icons" style="font-size:50px">menu</i>
    </button>
    <button 
      id="legal-notes-button-container"
      @click="toggleLegalNotes"
    >
    <i id="legal-notes-button" class="material-icons" style="font-size:50px">book</i>
    </button>
    <section id="navigation-container">
      <section id="menu-container" class="slide-in-left">
        <section class="destination-container" @click="goTo('Home')">
          <p>
             Home
          </p>
        </section>
        <section class="destination-container" @click="goTo('Notes')">
          <p>
             Notes
          </p>
        </section>
        <section class="destination-container" @click="goTo('Sign-In')">
          <p>
            Sign-in
          </p>
        </section>
        <section class="destination-container" @click="goTo('Sign-Up')">
          <p>
            Sign-up
          </p>
        </section>
        <section class="destination-container" @click="goTo('Account')">
          <p>
            Account
          </p>
        </section>
        <section class="destination-container" @click="goTo('Profile')" >
          <p>
            Profile
          </p>
        </section>
        <section class="destination-container" @click="goTo('Settings')">
          <p>
            Settings
          </p>
        </section>
      </section>
    </section>
    <section id="legal-notes-container">
      <section id="list-container" class="slide-in-right">
        <section class="destination-container" @click="goTo('Copyright')">
          <p>
             Copyright
          </p>
        </section>
        <section class="destination-container" @click="goTo('Sign-In')">
          <p>
            Conditions
          </p>
        </section>
        <section class="destination-container" @click="goTo('Sign-Up')">
          <p>
            Privacy
          </p>
        </section>
        <section class="destination-container" @click="goTo('Account')">
          <p>
            Help
          </p>
        </section>
        <section class="destination-container" @click="goTo('Account')">
          <p>
            Feedback
          </p>
        </section>
      </section>
    </section>
  </nav>
</template>

<style scoped>
    nav 
    {
      position:relative;
      left:0px;
      width:100vw;
      height:70px;
      background-color:var(--theme2);
      color:var(--color);
      font-family: 'Rubik', sans-serif;
    }
    #navigation-button-container
    {
      position:absolute;
      top:10px;
      left:10px;
      padding:0px;
      background-color:transparent;
      color:var(--color);
      border:none;
      cursor:pointer;
    }
    #legal-notes-button-container
    {
      position:absolute;
      top:10px;
      right:10px;
      padding:0px;
      background-color:transparent;
      color:var(--color);
      border:none;
      cursor:pointer;
    }
    #navigation-container, #legal-notes-container
    {
      display:none;
      position:absolute;
      top:70px;
      width:100vw;
      height:calc(100vh - 70px);
      background-color:rgba(30, 30, 30, 0.8);
      z-index:5;
    }
    #menu-container #list-container
    {
      position:absolute;
      top:0px;
      width:100vw;
      height:calc(100vh - 70px);
      background-color:var(--theme2);
      z-index:5;
    }
    .destination-container 
    {
      display:block;
      margin-top:20px;
      margin-left:5vw;
      width:90vw;
      height:50px;
      background-color:var(--theme1);
      color:var(--color);
      cursor:pointer;
    }
    .destination-container p 
    {
      padding-top:10px;
      font-size:20px;
      text-align:center;
    }

    @media screen and (min-width: 600px)
    {
      nav 
      {
        height:70px;
      }
      #navigation-button-container
      {
        position:absolute;
        top:10px;
        left:0px;
        width:70px;
        padding:0px;
        background-color:transparent;
        color:var(--color);
        border:none;
        cursor:pointer;
      }
      #legal-notes-button-container
      {
        position:absolute;
        top:10px;
        right:20px;
        width:70px;
        padding:0px;
        background-color:transparent;
        color:var(--color);
        border:none;
        cursor:pointer;
      }
      #navigation-container
      {
        display:none;
        position:absolute;
        top:70px;
        width:100vw;
        height:calc(100vh - 70px);
        background-color:rgba(30, 30, 30, 0.8);
        z-index:5;
      }
      #legal-notes-container
      {
        display:none;
        position:absolute;
        top:70px;
        width:100vw;
        height:calc(100vh - 70px);
        background-color:rgba(30, 30, 30, 0.8);
        z-index:5;
      }
      #menu-container 
      {
        position:absolute;
        top:0px;
        right:calc(100vw - 12vw);
        width:13vw;
        height:calc(100vh - 70px);
        background-color:var(--theme2);
        z-index:5;
      }
      #list-container 
      {
        position:absolute;
        top:0px;
        left:calc(100vw - 14vw);
        width:13vw;
        height:calc(100vh - 70px);
        background-color:var(--theme2);
        z-index:5;
      }
      .destination-container 
      {
        display:inline-block;
        margin-top:20px;
        margin-left:1.65vw;
        width:10vw;
        height:100px;
        background-color:var(--theme1);
        color:var(--color);
        cursor:pointer;
      }
      .destination-container:hover 
      {
        background-color:var(--color);
        color:var(--theme1);
      }
      .destination-container p 
      {
        margin-top:30px;
        font-size:20px;
        text-align:center;
      }
    }
</style>

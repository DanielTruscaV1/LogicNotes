<script setup>
    import axios from "axios";

    function getNotes()
    {
        axios.get("https://logicnotes.netlify.app/.netlify/function/getNotes")
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
</script>

<template>
    <section id="notes-container">
        <section class="note-preview">

        </section>
        <section class="note-preview">

        </section>
        <section class="note-preview">

        </section>
    </section>
</template>

<style scoped>
    #notes-container 
    {
        position:relative;
        width:100vw;
        min-height:70vh;
        background-color:rgb(50, 30, 90);
        color:white;
        font-family: 'Montserrat', sans-serif;
        z-index:1;
    }
    .note-preview
    {
        position:relative;
        left:10vw;
        width:80vw;
        height:30vh;
        background-color:rgb(40, 10, 70);
        border-radius:30px;
        border:3px solid white;
    }
    @media screen and (min-width: 600px)
    {
      .note-preview
      {
        top:30px;
        left:0px;
        margin-left:2.5vw;
        display:inline-block !important;
        width:30vw !important;
      }
    }
</style>

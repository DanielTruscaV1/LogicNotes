<script setup>
    import {ref} from "vue";

    const notes = ref(null);

    import axios from "axios";

    function getNotes()
    {
        axios.get(
            "https://logicnotes.netlify.app/.netlify/functions/getNotes",
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                },
            }
        )
        
        .then(response => {
            notes.value = response.data;
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    getNotes();
</script>

<template>
    <section id="notes-container">
        <section 
            class="note-preview"
            v-for="(note, index) in notes"
        >
            <h1>
                {{ note.data.title }}
            </h1>
            <p>
                Author: {{ note.data.author }}
            </p>
            <p>
                Date: {{ note.data.date }}
            </p>
            <img :src="note.data.image" :alt="note.data.image"/>
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
        height:50vh;
        background-color:rgb(40, 10, 70);
        border-radius:30px;
        border:3px solid white;
        cursor:pointer;
    }
    h1 
    {
        position:relative;
        top:20px;
        margin:0px;
        width:100%;
        text-align:center;
    }
    p 
    {
        position:relative;
        top:10px;
        margin-left:30px;
    }
    img 
    {
        position:relative;
        top:10px;
        left:5%;
        width:90%;
        height:220px;
        border-radius:30px;
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

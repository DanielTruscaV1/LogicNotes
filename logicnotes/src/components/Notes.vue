<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

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

    function noteRedirect(index)
    {
        const id = index;
        router.push({
            name: 'Note',
            params: {id},
        });
    }
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
            <img @click="noteRedirect(index+1)" :src="note.data.image" :alt="note.data.image"/>
        </section>
        <br/>
        <br/>
        <br/>
    </section>
</template>

<style scoped>
    #notes-container 
    {
        display:inline-flex;
        width:100vw;
        min-height: 50vh;
        flex-direction: row;
        flex-wrap: wrap;
        background-color:rgb(230, 230, 255);
        color:black;
        font-family: 'Montserrat', sans-serif;
        z-index:1;
    }
    .note-preview
    {
        position:relative;
        display:inline-flex;
        flex-direction:column;
        left:7.5vw;
        width:80vw;
        min-height:50vh;
        margin-bottom:30px;
        background-color:rgb(200, 200, 255);
        color:black;
        border:3px solid black;
        border-radius:30px;
        cursor:pointer;
        z-index:2;
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
        margin-bottom:30px;
        width:90%;
        height:220px;
        border-radius:30px;
        z-index:3;
    }
    @media screen and (min-width: 600px)
    {
      .note-preview
      {
        top:30px;
        left:0px;
        margin-left:2.5vw;
        margin-bottom:30px;
        display:inline-block !important;
        width:29vw !important;
      }
    }
</style>

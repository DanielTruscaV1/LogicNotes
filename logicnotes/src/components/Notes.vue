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
    <main>
        <section id="search-container">
                <p>
                    Search for a note
                </p>
                <input type="text"/>
                <button>
                    <i class="material-icons" style="font-size:36px">search</i>
                </button>
            </section>
        <section id="notes-container">
            <section 
                class="note-preview"
                v-for="(note, index) in notes"
                @click="noteRedirect(index+1)"
            >
                <h1>
                    {{index}} - {{ note.data.title }}
                </h1>
            </section>
            <br/>
            <br/>
            <br/>
        </section>
    </main>
</template>

<style scoped>
    main 
    {
        width:100vw;
        height:92.5vh;
        background-color:var(--theme1);
        color:var(--color);
        font-family: 'Rubik', sans-serif;
    }
    #notes-container 
    {
        width:90vw;
        height: 72vh;
        overflow-y:scroll;
        z-index:1;
    }
    .note-preview
    {
        position:relative;
        display:inline-flex;
        flex-direction:column;
        left:7.5vw;
        margin-bottom:0px !important;
        width:80vw;
        height:10vh;
        margin-bottom:30px;
        background-color:var(--theme2);
        color:var(--color);
        border:none;
        border-radius:0px;
        cursor:pointer;
        z-index:2;
        font-size:16px;
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
        height:35vh;
        border-radius:0px;
        z-index:3;
    }
    #search-container 
    {
        margin-top:10px;
        margin-bottom:5vh;
        width:100vw;
        height:10vh;
    }
    input 
    {
        margin-left:10vw;
        padding:5px;
        width:65vw;
        height:30px;
        background-color:var(--theme2);
        color:var(--color);
        font-size:20px;
        border:none;
        border-radius:20px;
    }
    #search-container button 
        {
            position:relative;
            top:13px;
            left:-20px;
            padding:5px;
            width:50px;
            height:47px;
            background-color:var(--theme3);
            color:var(--color);
            border-left:3px solid var(--color);
            border-top:none;
            border-bottom:none;
            border-right:none;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;
            cursor:pointer;
        }
        #search-container p 
        {
            position:relative;
            margin-top:0px;
            text-align:center;
            font-size:18px;
        }
    @media screen and (min-width: 600px)
    {
        #notes-container 
        {
            width:64vw;
        }
      .note-preview
      {
        margin-bottom:0px !important;
        top:0px;
        left:0px;
        margin-left:2.8vw;
        margin-bottom:50px;
        display:inline-block !important;
        width:60vw !important;
        height:6vh !important;
      }
      .note-preview:hover 
      {
        background-color:var(--color);
        color:var(--color2);
      }
      .note-preview h1
      {
        display:inline-block !important;
        width:auto !important;
        padding-left:30px;
      }
      .note-preview p 
      {
        display:inline-block !important;
        width:auto !important;
      }
      input 
        {
            margin-left:25vw;
            padding:5px;
            width:50vw;
            height:30px;
            background-color:var(--theme2);
            color:var(--color);
            font-size:20px;
            border:none;
            border-radius:20px;
        }
      #search-container button 
        {
            position:relative;
            top:13px;
            left:-20px;
            padding:5px;
            width:100px;
            height:47px;
            background-color:var(--theme3);
            color:var(--color);
            border-left:3px solid var(--color);
            border-top:none;
            border-bottom:none;
            border-right:none;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;
            cursor:pointer;
        }
    }
</style>

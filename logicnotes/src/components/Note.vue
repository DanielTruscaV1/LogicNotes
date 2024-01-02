<script setup>
    import {ref} from "vue";

    const note = ref(null);

    import axios from "axios";

    const id = "1";

    function getNote()
    {
        axios.get(
            `https://logicnotes.netlify.app/.netlify/functions/getNoteById?id=${id}`,
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                },
            }
        )
        
        .then(response => {
            note.value = response.data;
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    getNote();
</script>

<template>
    <section id="note-container">
        <section id="card">
            <h1>
                {{ note.title }}
            </h1>
            <p>
                Author: {{ note.author }}
            </p>
            <p>
                Date: {{ note.date }}
            </p>
            <img :src="note.image"/>
            <div 
                id="content"
                v-html="note.content"
            >

            </div>
        </section>
    </section>
</template>

<style scoped>
   #note-container 
   {
        width:100vw;
        height:70vh;
        background-color:rgb(50, 30, 90);
        color:white;
        font-family: 'Montserrat', sans-serif;
   }
   #card 
   {
        position:relative;
        top:30px;
        left:20vw;
        width:60vw;
        min-height:60vh;
        background-color:rgb(60, 40, 100);
        border-radius:30px;
   }
   h1 
   {
        position:relative;
        top:30px;
        margin:0px;
        text-align:center;
        font-size:22px;
   }
   p 
   {
        position:relative;
        top:20px;
        margin-left:30px;
   }
    img 
    {
        position:relative;
        top:30px;
        left:5%;
        width:40%;
        border-radius:30px;
    }
    #content 
    {
        display:inline-block;
        position:absolute;
        width:45%;
        right:5%;
    }
   @media screen and (max-width: 600px)
    {
        #card 
        {
            left:2.5vw;
            width:95vw;
        }
        img 
        {
            width:90%;
        }
        #content 
        {
            display:block;
            margin-top:30px;
            width:90%;
        }
    }
</style>

<script setup>
    import {ref} from "vue";

    const note = ref(null);

    import axios from "axios";

    const props = defineProps(['id']);

    function getNote()
    {
        axios.get(
            `https://logicnotes.netlify.app/.netlify/functions/getNoteById?id=${props.id}`,
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
        display: flex;
        position:relative;
        width:100vw;
        background-color:rgb(50, 30, 90);
        color:white;
        font-family: 'Montserrat', sans-serif;
   }
   #card 
   {
        display: flex;
        flex-direction: column;
        position:relative;
        top:30px;
        left:20vw;
        margin-bottom:30px;
        width:60vw;
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
        top:50px;
        margin-top:0px;
        margin-bottom:30px;
        margin-left:30px;
   }
    img 
    {
        position:relative;
        top:30px;
        left:5%;
        width:40%;
        height:250px;
        border-radius:30px;
    }
    #content 
    {
        position:relative;
        top:30px;
        left:5%;
        margin-bottom:30px;
        width:75%;
        
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
            left:5%;
            margin-top:280px;
            width:90%;
        }
    }
</style>

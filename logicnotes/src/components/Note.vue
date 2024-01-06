<script setup>
    import {ref} from "vue";

    const note = ref(null);
    const content = ref(null);

    import axios from "axios";

    const props = defineProps(['id']);

    import DOMPurify from "dompurify";

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
            content.value = note.value.content
                .replace(/<code.*?>(.*?)<\/code>/gs, function(match, p1) {
                    const formattedCode = p1.replace(/</g, '&lt;');

                    // Adjust characters per line based on screen width
                    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    const charactersPerLine = screenWidth >= 600 ? 300 : 45; // Adjust as needed

                    const lines = [];
                    for (let i = 0; i < formattedCode.length; i += charactersPerLine) {
                        lines.push(formattedCode.substr(i, charactersPerLine));
                    }
                    return `<code>${lines.join('\n')}</code>`;
                });
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
                v-html="DOMPurify.sanitize(content)"
            >
            </div>
            <br/>
        </section>
        
        <section id="tags-container">
            <p 
                v-for="(tag, index) in note.tags.split(' ')"
                class="tag"
            >
                {{ tag }}
            </p>
            <br/>
        </section>
    </section>
</template>

<style scoped>
   #note-container 
   {
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
        font-size:35px;
   }
   p 
   {
        position:relative;
        top:50px;
        margin-top:0px;
        margin-bottom:30px;
        margin-left:30px;
        line-height:1.75;
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
    .tag 
    {
        display:inline-block;
        padding:10px;
        height:20px;
        border:3px solid white;
        border-radius:20px;
        line-height:1;
    }
    #tags-container 
    {
        position:absolute;
        top:0px;
        right:0px;
        width:300px;
        height:auto;
    }
    .tag:hover 
    {
        cursor:pointer;
        background-color:white;
        color:black;
    }
   @media screen and (max-width: 600px)
    {
        #note-container 
        {
            width:100vw;
            overflow-x:hidden;
        }
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
            margin-top:50px;
            width:90%;
        }
        #tags-container
        {
            display:block;
            position:relative;
            width:100vw;
            height:400px;
        }
    }
</style>

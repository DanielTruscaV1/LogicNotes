<script setup>
    import {ref} from "vue";

    const note = ref(null);
    const content = ref(null);
    const titles = ref(null);

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
            const regex = /<h1>(.+?)<\/h1>/gs;
            const matches = note.value.content.match(regex);
            titles.value = matches;
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

    function scrollUp()
    {
        window.scrollTo(0, 0);
    }
</script>

<template>
    <section id="note-container">
        <section id="jump-to">
            <ul>
                <li
                    v-for="(title, index) in titles"
                >  
                <div v-html="title">

                </div>
                </li>
            </ul>
        </section>
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
    <button @click="scrollUp">
        <i class="material-icons" style="font-size:25px">arrow_upward</i>
    </button>
</template>

<style scoped>
    button 
    {
        position:fixed;
        bottom:5vh;
        right:3vw;
        width:50px;
        height:50px;
        background-color:transparent;
        color:black;
        border:3px solid black;
        border-radius:50%;
        z-index:5;
        cursor:pointer;
    }
    button:hover 
    {
        background-color: white;
        color:black;
    }
    ul 
    {
        padding-left:20px;
        position:fixed;
        width:17vw;
        top:25.5vh;
        margin:0px;
        list-style-type:none;
    }
    div 
    {
        display:inline-block;
        margin-left:10px;    
    }
    li
    {
        margin-bottom:20px;
        font-size:14px;
        cursor:pointer;
        background-color:rgb(200, 200, 255);
        border-left:15px solid black;
        border-top:3px solid black;
        border-bottom:3px solid black;
        border-right:3px solid black;
    }
    li:hover 
    {
        background-color:white;
        color:black;
    }
   #note-container 
   {
        position:relative;
        width:100vw;
        background-color:rgb(230, 230, 255);
        color:black;
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
        background-color:rgb(200, 200, 255);
        border:3px solid black;
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
        display:block;
        width:12vw;
        padding:15px;
        height:20px;
        background-color:rgb(200, 200, 255);
        border-right:15px solid black;
        border-top:3px solid black;
        border-bottom:3px solid black;
        border-left:3px solid black;
        line-height:1;
        font-weight:800;
    }
    #tags-container 
    {
        position:fixed;
        top:20vh;
        right:20px;
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
            top:0px;
            margin-top:30px;
            width:100vw;
            height:400px;
        }
        ul 
        {
            position:relative;
            top:30px;
        }
        li 
        {
            margin-left:-10px;
            width:87vw;
        }
        .tag 
        {
            width:78vw;
        }
        button 
        {
            background-color:white;
            color:black;
        }
    }
</style>

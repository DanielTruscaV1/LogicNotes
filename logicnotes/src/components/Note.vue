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

    import { useRouter } from 'vue-router';

    const router = useRouter();

    function goBack()
    {
        router.push({
            name:"Notes",
        });
    }
</script>

<template>
    <section id="note-container">
        <section id="jump-to">
            <p>
               List of Contents
            </p>
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
            <p>
                Related tags
            </p>
            <p 
                v-for="(tag, index) in note.tags.split(' ')"
                class="tag"
            >
                 {{ tag }}
            </p>
            <br/>
        </section>
    </section>
    <button 
        id="feedback" 
    >
        <i class="material-icons" style="font-size:30px">help</i>
    </button>
    <button 
        id="back" 
        @click="goBack"
    >
        <i class="material-icons" style="font-size:25px">arrow_back</i>
    </button>
    <button @click="scrollUp">
        <i class="material-icons" style="font-size:25px">arrow_upward</i>
    </button>
</template>

<style scoped>
    #feedback 
    {
        bottom:12vh;
    }
    #back 
    {
        left:3vw;
    }
    button 
    {
        position:fixed;
        bottom:5vh;
        right:3vw;
        width:50px;
        height:50px;
        background-color:var(--theme2) !important;
        color:var(--color);
        border:3px solid var(--color);
        border-radius:50%;
        z-index:5;
        cursor:pointer;
    }
    button:hover 
    {
        background-color: var(--color1);
        color:var(--color);
    }
    ul 
    {
        padding-left:20px;
        position:absolute;
        width:17vw;
        top:calc(5vh + 130px);
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
        background-color:var(--theme2);
        border-left:15px solid var(--color);
        border-top:3px solid var(--color);
        border-bottom:3px solid var(--color);
        border-right:3px solid var(--color);
    }
    li:hover 
    {
        background-color:var(--color1);
        color:var(--color);
    }
   #note-container 
   {
        position:relative;
        width:100vw;
        background-color:var(--theme1);
        color:var(--color);
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
        background-color:var(--theme2);
        border:3px solid var(--color);
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
        margin-bottom:20px;
        background-color:var(--theme2);
        border-right:15px solid var(--color);
        border-top:3px solid var(--color);
        border-bottom:3px solid var(--color);
        border-left:3px solid var(--color);
        line-height:1;
        font-size:16px !important;
        font-weight:800;
    }
    #tags-container 
    {
        position:absolute;
        top:calc(-1vh + 100px);
        right:3.5vw;
        width:300px;
        height:auto;
    }
    .tag:hover 
    {
        cursor:pointer;
        background-color:var(--color1);
        color:var(--color);
    }
    #jump-to 
    {
        display:inline-block;
        min-width:17vw;
    }
    #jump-to p 
    {
        position:relative;
        top:120px;
        font-size:22px;
        text-align:center;
    }
    #tags-container p 
    {
        position:relative;
        top:30px;
        font-size:22px;
        text-align:center;
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
            right:12.5vw;
            margin-top:30px;
            width:100vw;
            height:400px;
        }
        #tags-container p 
        {
            position:relative;
            width:100vw;
            top:30px;
            font-size:22px;
            text-align:center;
        }
        #jump-to p 
        {
            position:relative;
            top:5vh;
            margin-left:0px;
            width:100vw;
            font-size:22px;
            text-align:center;
        }
        .tag
        {
            width:80vw !important;
        }
        ul 
        {
            margin-bottom:30px;
            position:relative;
            top:30px;
        }
        li 
        {
            margin-bottom:0px;
            margin-left:-10px;
            width:87vw;
        }
        .tag 
        {
            margin-bottom:0px;
            margin-left:15vw;
            width:78vw;
        }
        button 
        {
            background-color:var(--color1);
            color:var(--color);
        }
    }
</style>

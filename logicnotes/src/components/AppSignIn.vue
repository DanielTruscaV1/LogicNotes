<script setup>
import {ref} from "vue";

const email = ref("");
const password = ref("");

import axios from "axios";

import { useRouter } from 'vue-router';

const router1 = useRouter();

import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

async function signIn()
{
    if(email.value == "")
        alert("Please enter email");
    else if(password.value == "")
        alert("Please enter password");
    else 
    {
        try {
            const response = await axios.post(
                    `https://logicnotes.netlify.app/.netlify/functions/getAccount`,
                    {
                        email: email.value,
                        password: password.value,
                    },
                    {
                        headers: 
                        {
                            'Content-Type': 'application/json',
                        },
                    },
                )

            const user_id = response.data.id ? response.data.id : "none";

            if(response.status == 200)
            {
                //Store user in Vuex
                const newUserInfo = {
                    id: user_id,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    email: response.data.email,
                };
                store.dispatch('updateUser', newUserInfo);
                
                router1.push({
                    name: "Profile",
                    params: {
                        id: user_id,
                    }
                });
            }
        }
        catch(error)
        {
            console.log(error.message);
        }
    }
}

</script>

<template>
    <div id="flex-container">
        <main>
            <section id="sign-up-container">
                <h1>
                    Sign-In
                </h1>
                <p>
                    Email
                </p>
                <input type="text" v-model="email"/>
                <p>
                    Password
                </p>
                <input type="password" v-model="password"/>
                <br/>
                <button @click="signIn">
                    Sign-In
                </button>
            </section>
            <div>
            </div>
        </main>
    </div>
</template>

<style scoped>
    div 
    {
        flex:1;
        width:100vw;
        height:200px;
    }
    #flex-container 
    {
        flex:1;
        width:100vw;
        min-height:60vh;
    }
    main 
    {
        position:relative;
        width:100vw;
        min-height:92.5vh;
        background-color:var(--theme1);
    }
    #sign-up-container
    {
        position:relative;
        top:5vh;
        left:2.5vw;
        width:90vw;
        min-height:80vh;
        background-color:var(--theme2);
        border:3px solid var(--color);
        font-family: 'Montserrat', sans-serif;
    }
    h1 
    {
        margin-left:5%;
        padding-bottom:20px;
        width:90%;
        color:var(--color);
        border-bottom:3px solid var(--color);
        text-align:center;
    }
    p 
    {
        margin-left:5%;
        padding-bottom:20px;
        width:90%;
        color:var(--color);
    }
    input 
    {
        margin-left:5%;
        width:80%;
        height:30px;
        border-radius:10px;
        background-color:var(--theme1);
        color:var(--color);
        border:3px solid var(--color);
        font-size:18px;
    }
    button 
    {
        margin-top:50px;
        margin-left:5%;
        width:100px;
        height:40px;
        background-color:var(--theme1);
        color:var(--color);
        border:3px solid var(--color);
        font-size:18px;
        cursor:pointer;
    }
    @media screen and (min-width: 600px)
    {
        #sign-up-container
        {
            position:relative;
            top:10vh;
            left:30vw;
            width:40vw;
            min-height:50vh;
            background-color:var(--theme2);
            border:3px solid var(--color);
        }
        input 
        {
            width:50%;
        }
    }
</style>

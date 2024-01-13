<script setup>
    import { ref } from 'vue';

    const first_name = ref("");
    const last_name = ref("");
    const email = ref("");
    const password = ref("");
    const password_confirm = ref("");

    import axios from "axios";

    async function signUp()
    {
        try 
        {
            const response = await axios.post(
                `https://logicnotes.netlify.app/.netlify/functions/postAccount`,
                {
                    first_name: first_name.value,
                    last_name: last_name.value,
                    email: email.value,
                    password: password.value,
                    password_confirm: password_confirm.value,
                },
                {
                    headers: 
                    {
                        'Content-Type': 'application/json',
                    },
                },
            )

            console.log("Sign-Up successful!");
        }
        catch(error)
        {
            console.log(error.message);
        }
    }
</script>

<template>
    <div id="flex-container">
        <main>
            <section id="sign-up-container">
                <h1>
                    Sign-Up
                </h1>
                <p>
                    First Name
                </p>
                <input type="text" v-model="first_name"/>
                <p>
                    Last Name
                </p>
                <input type="text" v-model="last_name"/>
                <p>
                    Email
                </p>
                <input type="text" v-model="email"/>
                <p>
                    Password
                </p>
                <input type="passowrd" v-model="password"/>
                <p>
                    Confirm Passsword
                </p>
                <input type="passowrd" v-model="password_confirm"/>
                <br/>
                <button @click="signUp">
                    Sign-Up
                </button>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
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
        display:flex;
        flex-direction:row;
        justify-content:center;
        width:100vw;
        min-height:65vh;
        background-color:var(--theme1);
        font-family: 'Montserrat', sans-serif;
    }
    #sign-up-container
    {
        display:inline-block;
        position:relative;
        top:5vh;
        left:2.5vw;
        width:90vw;
        min-height:80vh;
        background-color:var(--theme2);
        border:3px solid var(--color);
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
    img 
    {
        display:none;
    }
    @media screen and (min-width: 600px)
    {
        #sign-up-container
        {
            margin-left:25vw;
            position:relative;
            top:10vh;
            left:0px;
            min-height:100vh;
            width:50vw;
            background-color:var(--theme2);
            border:3px solid var(--color);
        }
        input 
        {
            width:50%;
        }
        img 
        {
            display:block;
            position:absolute;
            right:0px;
        }
        #aside1
        {
            display:inline-block;
            position:relative;
            top:10vh;
            width:20vw;
            height:30vh;
            background-color:var(--theme2);
            border:3px solid var(--color);
        }
        #aside2
        {
            margin-left:4vw;
            display:inline-block;
            position:relative;
            top:10vh;
            width:20vw;
            height:30vh;
            background-color:var(--theme2);
            border:3px solid var(--color);
        }
    }
</style>

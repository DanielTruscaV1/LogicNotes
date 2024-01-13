<script setup>
</script>

<template>
    <div id="flex-container">
        <main>
            <section id="aside1">
                <h1>
                    Why Sign-Up?
                </h1>
                <p>
                    You can create an online profile that can be accessed by other users at any time. You can also customize the profile by adding images, providing contact information and by creating relevant posts.
                </p>

            </section>
            <section id="sign-up-container">
                <h1>
                    Sign-Up
                </h1>
                <p>
                    First Name
                </p>
                <input type="text"/>
                <p>
                    Last Name
                </p>
                <input type="text"/>
                <p>
                    Email
                </p>
                <input type="text"/>
                <p>
                    Password
                </p>
                <input type="text"/>
                <p>
                    Confirm Passsword
                </p>
                <input type="text"/>
                <br/>
                <button>
                    Sign-Up
                </button>
            </section>
            <section id="aside2">
                <h1>
                    Terms and Conditions
                </h1>
                <p>
                    By signing up for an account on LogicNotes, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.
                </p>
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
            margin-left:4vw;
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

<script setup>
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
                <input type="text"/>
                <p>
                    Password
                </p>
                <input type="text"/>
                <br/>
                <button>
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
        min-height:65vh;
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

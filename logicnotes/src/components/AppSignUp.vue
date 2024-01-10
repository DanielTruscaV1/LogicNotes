<script setup>
</script>

<template>
    <div id="flex-container">
        <main>
            <section id="sign-up-container">
                <h1>
                    Sign-Up
                </h1>
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
    @media screen and (min-width: 600px)
    {
        #sign-up-container
        {
            position:relative;
            top:10vh;
            left:30vw;
            width:40vw;
            min-height:80vh;
            background-color:var(--theme2);
            border:3px solid var(--color);
        }
    }
</style>

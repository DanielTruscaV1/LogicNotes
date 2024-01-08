<script setup>
</script>

<template>
    <div id="flex-container">
        <main>
            <section id="settings-container">
                <h1>
                    Theme
                </h1>
                <button id="theme-button1">

                </button>
                <button id="theme-button2">
                    
                </button>
                <button id="theme-button3">
                    
                </button>
                <button id="theme-button4">
                    
                </button>
            </section>
        </main>
    </div>
</template>

<style scoped>
    #flex-container 
    {
        display:flex;
        flex-direction:column;
        min-height:60vh;
    }
    main 
    {
        flex:1;
        position:relative;
        width:100vw;
        min-height:65vh;
        background-color:rgb(230, 230, 255);
    }
    #settings-container
    {
        position:relative;
        top:5vh;
        left:2.5vw;
        width:90vw;
        min-height:80vh;
        background-color:rgb(200, 200, 255);
        border:3px solid black;
        font-family: 'Montserrat', sans-serif;
    }
    @media screen and (min-width: 600px)
    {
        #settings-container
        {
            position:absolute;
            top:10vh;
            left:10vw;
            width:80vw;
            min-height:20vh;
            background-color:rgb(200, 200, 255);
            border:3px solid black;
        }
        h1 
        {
            margin-left:5%;
            padding-bottom:20px;
            width:90%;
            border-bottom:3px solid black;
        }
        button 
        {
            margin-right:10px;
            width:50px;
            height:50px;
            border:3px solid black;
            border-radius:10px;
            cursor:pointer;
        }
        #theme-button1
        {
            margin-left:5%;
            background-color:rgb(240, 240, 240);
        }
        #theme-button2
        {
            background-color:rgb(40, 40, 40);
        }
        #theme-button3
        {
            background-color:rgb(200, 200, 255);
        }
        #theme-button4
        {
            background-color:rgb(255, 200, 150);
        }
    }
</style>

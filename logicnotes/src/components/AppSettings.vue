<script setup>
    function changeTheme(theme)
    {
        if(theme == "black")
        {
            document.documentElement.style.setProperty('--theme1', 'rgb(40, 40, 40)');
            document.documentElement.style.setProperty('--theme2', 'rgb(20, 20, 20)');
            document.documentElement.style.setProperty('--theme3', 'rgb(10, 10, 10)');
            document.documentElement.style.setProperty('--color', 'white');
            document.documentElement.style.setProperty('--color2', 'black');
        }
        else if(theme == "blue")
        {
            document.documentElement.style.setProperty('--theme1', 'rgb(230, 230, 255)');
            document.documentElement.style.setProperty('--theme2', 'rgb(200, 200, 255)');
            document.documentElement.style.setProperty('--theme3', 'rgb(180, 180, 235)');
            document.documentElement.style.setProperty('--color', 'black');
            document.documentElement.style.setProperty('--color2', 'white');
        }
        else if(theme == "orange")
        {
            document.documentElement.style.setProperty('--theme1', 'rgb(255, 220, 170)');
            document.documentElement.style.setProperty('--theme2', 'rgb(255, 200, 150)');
            document.documentElement.style.setProperty('--theme3', 'rgb(235, 170, 120)');
            document.documentElement.style.setProperty('--color', 'black');
            document.documentElement.style.setProperty('--color2', 'white');
        }
    }

    function changeFont(fontSize)
    {
        document.documentElement.style.setProperty('--fontSize', fontSize+"px");
    }
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
                <button id="theme-button2" @click="changeTheme('black')">
                    
                </button>
                <button id="theme-button3" @click="changeTheme('blue')">
                    
                </button>
                <button id="theme-button4" @click="changeTheme('orange')">
                    
                </button>
                <h1>
                    Font
                </h1>
                <button id="font-button1" @click="changeFont(16)">
                    16px
                </button>
                <button id="font-button2" @click="changeFont(18)">
                    18px
                </button>
                <button id="font-button3" @click="changeFont(20)">
                    20px
                </button>
                <button id="font-button4" @click="changeFont(22)">
                    22px
                </button>
                <br/>
                <br/>
                <br/>
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
        background-color:var(--theme1);
    }
    #settings-container
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
    }
    button 
    {
        margin-right:10px;
        width:50px;
        height:50px;
        border:3px solid var(--color);
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
    #font-button1 
    {
        margin-left:5%;
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
            background-color:var(--theme2);
            border:3px solid var(--color);
        }
    }
</style>

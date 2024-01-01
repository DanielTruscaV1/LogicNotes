<script setup>

</script>

<template>
    <section id="note-container">
        <section id="card">
            <h1>
                Title-
            </h1>
            <h1>
                Author-
            </h1>
            <h1>
                Date-
            </h1>
        </section>
    </section>
</template>

<style scoped>
   #note-container 
   {
        width:100vw;
        height:70vh;
        background-color:rgb(50, 30, 90);
        color:white;
        font-family: 'Montserrat', sans-serif;
   }
   #card 
   {
        position:relative;
        top:30px;
        left:20vw;
        width:60vw;
        height:60vh;
        background-color:rgb(60, 40, 100);
        border-radius:30px;
   }
   h1 
   {
        position:relative;
        top:30px;
        left:30px;
        margin:0px;
        text-align:left;
   }
   @media screen and (max-width: 600px)
    {
        #card 
        {
            left:2.5vw;
            width:95vw;
        }
    }
</style>

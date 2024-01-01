<script setup>

</script>

<template>
    <section id="notes-container">
        <br/>
        <section class="note-preview">

        </section>
        <br/>
        <section class="note-preview">

        </section>
        <br/>
        <section class="note-preview">

        </section>
        <br/>
    </section>
</template>

<style scoped>
    #notes-container 
    {
        position:relative;
        width:100vw;
        background-color:rgb(50, 30, 90);
        color:white;
        font-family: 'Montserrat', sans-serif;
        z-index:1;
    }
    .note-preview
    {
        position:relative;
        left:10vw;
        width:80vw;
        height:30vh;
        background-color:rgb(40, 10, 70);
        border-radius:30px;
        border:3px solid white;
    }
</style>

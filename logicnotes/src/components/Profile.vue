<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(['id']);

const store = useStore();
const user = computed(() => store.getters.getUser);

//console.log("id: ", user.value.first_name);
</script>

<template>
  <main>
    <section id="profile-image">
        
    </section>
    <section id="profile-info">
        <h1>
            {{ user.first_name }} {{ user.last_name }}
        </h1>
        <p>
            {{ user.email }}
        </p>
    </section>  
    <section id="profile-stats1">

    </section> 
    <section id="profile-stats2">

    </section> 
    <section id="profile-list">

    </section>
  </main>
</template>

<style scoped>
    main 
    {
        width:100vw;
        height:92.5vh;
        background-color:var(--theme1);
        color:var(--color);
        font-family: 'Montserrat', sans-serif;
    }
    #profile-image
    {
        position:absolute;
        top:9.5vh;
        left:2vw;
        width:20vw;
        height:30vh;
        background-color:var(--theme2);
    }
    #profile-info h1
    {
        text-align:center;
    }
    #profile-info p
    {
        text-align:center;
    }
    #profile-info
    {
        position:absolute;
        top:41.5vh;
        left:2vw;
        width:20vw;
        height:55vh;
        background-color:var(--theme2);
    }
    #profile-stats1
    {
        position:absolute;
        top:9.5vh;
        left:24vw;
        width:36vw;
        height:30vh;
        background-color:var(--theme2);
    }
    #profile-stats2
    {
        position:absolute;
        top:9.5vh;
        left:62vw;
        width:36vw;
        height:30vh;
        background-color:var(--theme2);
    }
    #profile-list 
    {
        position:absolute;
        top:41.5vh;
        left:24vw;
        width:74vw;
        height:55vh;
        background-color:var(--theme2);
    }
    @media screen and (max-width: 600px)
    {
        main 
        {
            flex:1;
            position:relative;
            top:0vh;
        }
        section 
        {   
            position:relative !important;
            margin-top:15px;
            margin-bottom:15px;
            top:0px !important;
            left:0px !important;
            width:100vw !important;
        }
    }
</style>

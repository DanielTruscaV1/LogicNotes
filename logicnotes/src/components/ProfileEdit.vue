<script setup>

import { ref, defineEmits } from 'vue';

const { editMode } = defineProps(['editMode']);
const emit = defineEmits();

const toggleEditMode = () => {
  emit('toggleEditMode', 'Updated data from child');
};

</script>

<template>
    <section id="edit-container">
        <button 
            id="close-edit-container"
            @click="toggleEditMode"
        >
            <i id="navigation-button" class="material-icons" style="font-size:50px">close</i>
        </button>
        <section class="group">
            <p>
                Status
            </p>
            <button>
                Online
            </button>
            <button>
                Offline
            </button>
        </section>
        <section class="group">
            <p>
                Image
            </p>
            <button>
                Upload
            </button>
        </section>
        <section class="group">
            <p>
                About me
            </p>
            <textarea>

            </textarea>>
            <br/>
            <button>
                Save
            </button>
        </section>
    </section>
</template>

<style scoped>
    #edit-container 
    {
        top:17.5vh;
        left:15vw;
        position:absolute;
        width:70vw;
        height:70vh;
        background-color:var(--theme1);
        font-family: 'Montserrat', sans-serif;
    }
    #close-edit-container 
    {
        position:absolute;
        top:10px;
        right:10px;
        background:transparent;
        color:var(--color);
        border:none;
        cursor:pointer;
    }
    .group 
    {
        margin-left:30px;
    }
    p 
    {
        color:var(--color);
        font-size:20px;
    }
    button 
    {
        margin-right:10px;
        width:100px;
        height:40px;
        font-size:20px;
        background-color:var(--color);
        border:none;
        cursor:pointer;
    }
    textarea
    {
        width:600px;
        height:200px;
        margin-bottom:10px;
    }
</style>

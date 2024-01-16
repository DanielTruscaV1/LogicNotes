<script setup>
import ProfileEdit from "./ProfileEdit.vue";

import {ref} from "vue";

import { computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps(['id']);

const store = useStore();
const user = computed(() => store.getters.getUser);

var stats = [
    {
        day: "Monday",
        value:1,
        margin:50,
    },
    {
        day: "Tuesday",
        value:3,
        margin:40,
    },
    {
        day: "Wednesday",
        value:2,
        margin:30,
    },
    {
        day: "Thursday",
        value:5,
        margin:30,
    },
    {
        day: "Friday",
        value:4,
        margin:40,
    },
    {
        day: "Saturday",
        value:1,
        margin:50,
    },
    {
        day: "Sunday",
        value:2,
        margin:40,
    },
]

const editMode = ref(false);

function toggleEditMode()
{
    editMode.value = !editMode.value;

    let edit_button = document.getElementById("edit_button");
    let main = document.getElementsByTagName("main")[0];

    if(editMode.value == true)
    {
        edit_button.style.backgroundColor = "rgb(200, 100, 100)";
        main.style.opacity = "0.6";
    }
    else if(editMode.value == false)
    {
        edit_button.style.backgroundColor = "var(--theme1)";
        main.style.opacity = "1";
    }
}

</script>

<template>
  <main>
    <section id="profile-image">
        <img src="../assets/image4.jpg"/>
        <div>
        </div>
        <button id="edit_button" @click="toggleEditMode">
            Edit Profile
            <i class="material-icons" style="font-size:30px">edit</i>
        </button>
    </section>
    <section id="profile-info">
        <h1>
            {{ user.first_name }} {{ user.last_name }}
        </h1>
        <h2>
            Contact
        </h2>
        <p>
            {{ user.email }}
        </p>
        <h2>
            About
        </h2>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </section>  
    <section id="profile-stats1">
        <h2>
            Level Progress
        </h2>
        <div id="level1">
            <div id="actual-level1">
                <p>
                    1
                </p>
            </div>
        </div>
        <div id="level2">
            <div id="actual-level2">
                <p>
                    1
                </p>
            </div>
        </div>
    </section> 
    <section id="profile-stats2">
        <h2>
            Stats (This Week)
        </h2>
        <section id="chart-container">
            <section class="bar" v-for="(bar, index) in stats" :style="{height:bar.value*20 + 'px'}">
            </section>
            <section class="label" v-for="(bar, index) in stats" :style="{marginLeft:bar.margin + 'px'}">
                {{bar.day}}
            </section>
        </section>
    </section> 
    <section id="profile-list">
        <h2>
            Recent Activity
        </h2>
    </section>
  </main>
    <ProfileEdit 
        v-if="editMode"
        :editMode="editMode"
        @toggleEditMode="toggleEditMode"
    />
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
    h2
    {
        margin-left:20px;
    }
    #profile-info p
    {
        text-align:justify;
        margin-left:5%;
        width:90%;
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
    img 
    {
        margin-top:10%;
        margin-left:25%;
        width:50%;
        height:60%;
    }
    div 
    {
        position:absolute;
        top:calc(70% - 25px);
        left:calc(75% - 25px);
        width:50px;
        height:50px;
        border-radius:50%;
        background-color:rgb(150, 255, 150);
        color:black;
        cursor:pointer;
    }
    button 
    {
        margin-top:5%;
        margin-left:10%;
        width:80%;
        height:40px;
        font-size:20px;
        background-color:var(--theme1);
        color:var(--color);
        border:none;
        cursor:pointer;
    }
    i 
    {
        position:absolute;
        bottom:17px;
        right:calc(10% + 7px);
    }
    #level1 
    {
        position:absolute;
        top:50px;
        left:200px;
        width:200px;
        height:200px;
        background:conic-gradient(
            rgb(150, 255, 150) 80%,
            var(--theme2) 20%
        );
        color:var(--color);
        font-size:100px;
    }
    #level1 p  
    {
        text-align:center;
        margin-top:10px;
    }
    #level2
    {
        position:absolute;
        top:50px;
        left:450px;
        width:200px;
        height:200px;
        background:conic-gradient(
            rgb(150, 255, 150) 60%,
            var(--theme2) 40%
        );
        color:var(--color);
        font-size:100px;
    }
    #actual-level1 
    {
        position:absolute;
        top:25px;
        left:25px;
        width:150px;
        height:150px;
        background-color:var(--theme1);
        color:var(--color);
    }
    #actual-level2 
    {
        position:absolute;
        top:25px;
        left:25px;
        width:150px;
        height:150px;
        background-color:var(--theme1);
        color:var(--color);
    }
    #level2 p  
    {
        text-align:center;
        margin-top:10px;
    }
    .bar 
    {
        display:inline-block;
        margin-top:150px;
        margin-left:60px;
        width:30px;
        height:30px;
        background-color:rgb(150, 255, 150);
    }
    #chart-container 
    {
        top:0px;
        position:absolute;
    }
    .label 
    {
        display:inline-block;
        font-size:12px;
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
        #profile-image 
        {
            height:40vh;
        }
        i 
        {
            bottom:3vh;
        }
        #profile-stats1
        {
            height:800px;
        }
        #level1{
            display:block;
            left:15vw;
            width:70vw;
        }
        #level2{
            display:block;
            top:300px;
            left:15vw;
            width:70vw;
        }
        #actual-level1 
        {
            position:absolute;
            top:7vw;
            left:10vw;
            width:50vw;
            background-color:var(--theme1);
            color:var(--color);
        }
        #actual-level2
        {
            position:absolute;
            top:7vw;
            left:10vw;
            width:50vw;
            background-color:var(--theme1);
            color:var(--color);
        }
        .bar 
        {
            display:inline-block;
            margin-top:0px;
            margin-left:4vw;
            width:10vw !important;
            height:30px;
            background-color:rgb(150, 255, 150);
        }
        .label 
        {
            display:inline-block !important;
            margin-left:10px !important;
            margin-right:18px;
            width:20px !important;
            font-size:10px !important;
        }
    }
</style>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const formattedTime1 = ref('');
const formattedTime2 = ref('');


const updateLiveTime = () => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  formattedTime1.value = `${month}-${day}-${year}`;
  formattedTime2.value = `${hours}:${minutes}:${seconds}`
};

onMounted(() => {
  updateLiveTime();
  setInterval(updateLiveTime, 1000);
});

onUnmounted(() => {
  clearInterval(updateLiveTime);
});

</script>

<template>
  <header>
    <h1>
      LogicNotes
    </h1>
  </header>
  <i class="material-icons" style="font-size:50px">access_time</i>
  <p>
    {{ formattedTime1 }}
  </p>
  <p id="clock">
    {{ formattedTime2 }}
  </p>
</template>

<style scoped>
      i 
      {
        position:absolute;
        top:20px;
        right:110px;
        z-index:5;
        color:var(--color);

        display:none;
      }
      p 
      {
        position:absolute;
        top:20px;
        right:30px;
        margin:0px;
        z-index:5;
        font-family: 'Montserrat', sans-serif;
        font-size:18px;
        color:var(--color);

        display:none;
      }
      #clock 
      {
        margin-top:30px;
        color:var(--color);
        
        display:none;
      }
    header 
    {
      position:relative;
      top:0px;
      left:0px;
      width:100vw;
      height:10vh;
      background-color:var(--theme1);
      color:var(--color);
      font-family: 'Montserrat', sans-serif;
      z-index:3;
    }
    h1 
    {
      position:absolute;
      top:15px;
      margin:0px;
      width:100vw;
      text-align:left;
      font-size:30px;
      text-align:center;
    }
    @media screen and (min-width: 600px)
    {
      h1 
      {
        left:30px;
        text-align:left;
      }
      i 
      {
        position:absolute;
        top:20px;
        right:7vw;
        z-index:5;

        display:block;
      }
      p 
      {
        position:absolute;
        top:20px;
        right:30px;
        margin:0px;
        z-index:5;
        font-family: 'Montserrat', sans-serif;
        font-size:18px;

        display:block;
      }
      #clock 
      {
        margin-top:30px;

        display:block;
      }
    }
</style>

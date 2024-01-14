<script setup>

</script>

<template>
  <footer>
    <h1>
        © LogicNotes 2024 Copyright
    </h1>
  </footer>
</template>

<style scoped>
    footer
    {
        position:relative;
        width:100vw;
        height:70px;
        background-color:var(--theme2);
        color:var(--color);
        font-family: 'Montserrat', sans-serif;
        z-index:2;
    }
    h1 
    {
        margin:0px;
        padding-top:20px;
        font-size:20px;
        text-align:center;
    }
    ul 
    {
      width:calc(30vw + 10vw);
      margin-left:38vw;
      list-style-type:none;
    }
    li 
    {
      margin:0.75vw;
      padding:10px;
      display:inline-block;
    }
    li:hover 
    {
      background-color:var(--color);
      color:var(--color2);
    }
    a 
    {
      color:var(--color);
      font-size:30px;
      text-decoration:none;
    }
    @media screen and (max-width: 600px)
    {
      ul
      {
        margin-left:0px;
        padding-left:0px;
        width:100vw;
      }
      li 
      {
        margin-left:5.5vw;
      }
    }
</style>

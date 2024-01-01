<script setup>

</script>

<template>
  <nav>
    <h1>
       Navigation 
    </h1>
    <ul>
      <li>Home</li>
      <li>Notes</li>
      <li>Sign-in</li>
      <li>Sign-up</li>
      <li>Account</li>
      <li>Settings</li>
    </ul>
  </nav>
</template>

<style scoped>
    nav 
    {
      position:absolute;
      top:10vh;
      left:0px;
      width:100vw;
      height:10vh;
      background-color:rgb(40, 10, 70);
      color:white;
      font-family: 'Montserrat', sans-serif;
    }
    h1 
    {
      text-align:center;
    }
    ul 
    {
      display:none;
      position:relative;
      top:0px;
      margin:0px;
      padding:0px;
      height:50vh;
    }
    li 
    {
      position:relative;
      margin-left:0px;
      padding-top:20px;
      height:50px;
      list-style-type:none;
      text-align:center;
      font-size:20px;
      background-color:rgb(60, 30, 90);
    }
</style>

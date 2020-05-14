<template>
  <div class="Header">
    <router-link to="/"> Home </router-link><br>
    <router-link to="/calendarView">Schedule a date. </router-link><br>
    <router-link to="/calendarEvent"> Questions? </router-link>
  </div>
  
</template>

<script>

export default {
  name: 'Header',
}
</script>

<style>

.Header {
    color:blueviolet;
    font-family:cursive;
    
}
a:link { text-decoration: none; }
</style>
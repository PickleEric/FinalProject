<template>
  <div class="mainPage">
    <h1>Brujula’s White Light Services</h1>
    <img class='img' src="@/assets/chakra-symbols-meditation.jpg" alt="meditation swirl" height="200" widith="200"/>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bad+Script&display=swap');

h1 {
  font-family: 'Bad Script', cursive;
  text-align: center;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
a:link { text-decoration: none; }
</style>

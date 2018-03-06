<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <project-img  :img="this.project_img" test="shirly"></project-img>
    <project-title>{{project_title}}</project-title>
    <project-price from="39999" to="29999"></project-price>

  </div>
</template>

<script>
export default {
  name: 'app', 
  data () {
    return {
      msg:"welcome to my simple application.",
      project_img: 'http://placehold.it/800x300',
      project_title: 'Complete Web Application Minimum Viable Product',
      project_price: "$29,999"
    };
  },

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.money::before {
    content:"$";
}
.price_from{
  text-decoration: line-through;
  color: red;
  font-weight:100;
}
.price_to{
  color:black;
  font-weight: 900;
}

h1, h2 {
  font-weight: normal;
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
</style>

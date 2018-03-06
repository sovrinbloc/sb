<template>
  <div id="app">
    <h1>Packages by {{ user }}</h1>
    <package-img  :img="this.package_img" test="shirly"></package-img>
    <package-title>{{package_title}}</package-title>
    <package-price from="39999" to="29999"></package-price>
    <package-description>{{package_description}}</package-description>

  </div>
</template>

<script>
export default {
  name: 'app', 
  data () {
    return {
      user:"Sovrin Bloc",
      package_img: 'http://placehold.it/800x300',
      package_title: 'Complete Web Application Minimum Viable Product',
      package_price: "$29,999",
      package_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
.package_description{
  text-align:center;
}
.money::before {
    content:"$";
}
.price_from{
  text-decoration: line-through;
  color: #aaa;
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

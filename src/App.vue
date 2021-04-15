<template>
  <div id="app" class="container">
    <h1>Welcome to my Rent a Kitten Page</h1>
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item"> <!-- navbar buttons-->
          <router-link :to="{ name: 'Create' }" class="nav-link">Add Kitten</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Index' }" class="nav-link">View All Kittens</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Select' }" class="nav-link">Select</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'App' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Help' }" class="nav-link">Help</router-link>
        </li>
        
      </ul>
    </nav>
    <img src="https://i.redd.it/0z188anyaxn21.jpg" height = 200px class="center"> 
    <h3>Are you in need of kittens for therapy? Welcome to my application! Here you can select a kitten and a time and day and rent the kitten out for however long you need!</h3>
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style>
h1 {
    text-align:center;
}
.nav-item {
    text-align:center;
}
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .gap {
      margin-top: 50px;
    }
    .center {
  display: block;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  
}
.container{
       background-color: lightpink;
   } 
   h3{
      text-align:center;
      color: whitesmoke;
   }
</style>

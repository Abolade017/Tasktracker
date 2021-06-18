<template>
  <div>
    <!-- <Home /> -->
    <!-- <button @click="spin.val = !spin.val">toggle spinner</button> -->
    <!-- <Spinner :start="spin.val"/> -->
    <!-- <div class="flex justify-center items-center space-x-10 text-lg">
      <router-link to="/about">About</router-link>
      <router-link to="/home">Home</router-link>
      <router-link to="/jobs">Jobs</router-link>
    </div> -->
    <router-view>
     
    </router-view>
    <!-- <div class="flex space-x-6 justify-center items-center mt-10">
     <button
        @click="redirect"
        class="bg-blue-500 text-white text-center rounded-lg focus:outline-none px-8 py-2"
      >
        redirect
      </button>
      <button
        @click="goBack"
        class="bg-blue-500 text-white text-center rounded-lg focus:outline-none px-2 py-2"
      >
        Go back
      </button>
      <button
        @click="goForward"
        class="bg-blue-500 text-white text-center rounded-lg focus:outline-none px-2 py-2"
      >
        Go forward
      </button>
      </div> -->
  </div>
</template>

<script>
//import Spinner from "@/components/Spinner.vue";
//import Home from "@/components/Home.vue";

export default {
  name: "App",
  components: {
    //Spinner,
    //Home
  },
  data() {
    return {};
  },
  methods: {
    // goBack() {
    //   this.$router.go(-1);
    // },
    // goForward(){
    //   this.$router.go(1);
    // },
    // redirect(){
    //   this.$router.push({name:'Home'});
    // }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.router-link-exact-active {
  background: rgb(50, 104, 253);
  color: white;
  border-radius: 10px;
  padding: 4px 8px;
}
</style>

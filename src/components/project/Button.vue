<template>
  <div class="flex space-x-6">
    <button @click="addTask"
      class="text-center text-white py-7 px-8 rounded-md bg-purple-400 focus:outline-none"
    >
     <i class="fas fa-business-time"></i>
    </button>
    <button @click="addTask"
      class="text-center text-white py-7 px-8 rounded-md bg-purple-400 focus:outline-none"
    >
    <i class="fas fa-user"></i>
    </button>
  </div>
</template>
<script>
export default {
    emits:[],
    data(){
        return {

        }
    },
    methods:{
        addTask(){
          return this.$router.push({name:'addTask'});
        }
    },
}
</script>
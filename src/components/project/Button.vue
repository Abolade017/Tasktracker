<template>
  <div class="flex space-x-6">
    <button @click="addTask"
      class="text-center text-white py-7 px-4 rounded-md bg-purple-400 focus:outline-none"
    >
      Add Task
    </button>
    <button @click="addTask"
      class="text-center text-white py-7 px-4 rounded-md bg-purple-400 focus:outline-none"
    >
     Profile
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
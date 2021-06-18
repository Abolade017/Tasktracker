<template>
  <div class="px-6 sm:px-8 pb-10">
    <form @submit.prevent="onSubmit">
      <div class="flex flex-col space-y-4">
        <div class="text-left">
          <input
            class="focus:outline-none border-b border-gray-300 text-white w-full h-auto bg-purple-900 placeholder-white "
            placeholder="+ Add a task..."
            v-model="enteredValue"
          />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  emits:['add-task'],
  data(){
    return {
      enteredValue:'',

    }
  },
  methods:{
   onSubmit(){
      if (!this.enteredValue) {
        alert('Please add a task');
        return;
      }
      const newTask={
        id: Math.floor(Math.random()* 1000),
        enteredValue:this.enteredValue,
      }
      this.$emit('add-task', newTask)
      this.enteredValue=''
    }
     
  },
}
</script>

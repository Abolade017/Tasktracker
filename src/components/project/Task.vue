<template>
  <div class="px-6 pt-20 flex justify-between">
    <div class="flex flex-col items-start space-y-6">
      <router-link to="/incomplete-task">Incomplete task</router-link>
      <router-link to="/task">Complete task</router-link>
    </div>
    <a @click="scrollToTop"
     
      class=" focus:outline-none fixed flex justify-center items-center bottom-5 sm:left-80 left-72 sm:bottom-0 h-16 w-16 px-4 rounded-full bg-yellow-500 text-white text-lg"
    >
      <div   class="flex justify-center items-center h-8 w-8 text-3xl bg-yellow-500">+</div>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      IncompleteTask: false
    };
  },
  method: {
    incompleteTasks() {
      if (this.IncompleteTask) {
        return this.$router.push({ name: "IncompleteTask" });
      }
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<template> 
<div class="mt-10">
<h1 class="my-6">List of jobs</h1>
<div v-for="job in jobs" :key="job.id">
    <router-link :to="{name:'JobDetails', params: {id: job.id}}">
      <p>{{job.title}}</p>
      </router-link>
</div>
</div>
</template>
<script>
export default {
  data(){
  return {
  jobs: [
    { title: "Web design", id: 1, description: "lorem" },
    { title: "web development", id: 2, description: "lorem" },
    { title: "graphics design", id: 3, description: "lorem" },
    { title: "teaching", id: 4, description: "lorem" },
  ],
  };
  },
};
</script>
<style scoped></style>

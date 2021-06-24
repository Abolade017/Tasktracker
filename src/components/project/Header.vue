<template>
    <header class="pt-10">
      <div class="flex justify-between items-center mb-8 px-6">
        <h1 class="text-xl font-bold text-white">{{ title }}</h1>
        <Button />
      </div>
    </header>
 
</template>
<script>
import Button from './Button';
export default {
  props: {'title':{
      type:String,
      default:'hello world'
  }},
  components:{
      Button,
  },
  data() {
    return {};
  },
};
</script>

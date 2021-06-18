<template>
    <div class="mt-10">
        <h1 class="text-2xl">Job Details page</h1>
        <p class="mt-4">{{id}}</p>
    </div>
</template>
<script>
export default {
    props:['id'],
    data(){
    return { 
        // id: this.$route.params.id,
    }
    },
};
</script>
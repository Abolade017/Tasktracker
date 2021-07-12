<template>
  <div class="flex flex-col space-y-8 px-3 pt-20 pb-2">
    <span class="text-center  font-bold text-yellow-500 text-xl"
      >Complete Task</span
    >
    <div
      v-for="task in tasks"
      :key="task.id"
      class=""
      :class="[task.completeTask ? 'complete' : '']"
    >
      <div class="relative flex justify-between  items-center">
        <div class="  flex space-x-4 items-center">
          <div class="flex justify-center items-center ">
            <button
              @click="taskChecked(task)"
              :class="[task.completeTask ? 'checked' : '']"
              class="focus:outline-none text-white h-10 w-10 flex justify-center items-center rounded-full bg-purple-900"
            >
              <i class="fas fa-check h-4 w-4"></i>
            </button>
          </div>
          <div class="w-48">
          <h1 class="text-left text-md font-bold  sm:break-normal break-words  ">
            {{ task.text }}
          </h1>
          </div>
        </div>
        <div
          v-if="task.completeTask"
          class="absolute border-b-2 border-yellow-400  bottom-auto w-72 sm:w-full h-2 left-14 sm:left-0"
        ></div>
        <p class="text-left font-bold">{{ task.day }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    taskChecked(task) {
      let taskData = { ...task, completeTask: false };

      this.$emit("checked", taskData);
    }
  }
};
</script>

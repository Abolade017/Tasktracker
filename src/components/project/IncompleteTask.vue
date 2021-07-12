<template>
  <div class="bg-white rounded-t-3xl shadow-lg ">
    <div class="flex flex-col space-y-8 px-3 pt-10 pb-2">
      <span class="text-center font-bold text-blue-900 text-xl">Incomplete Task</span>
      <div
        v-for="task in tasks"
        :key="task.id"
        class=""
        :class="[task.completeTask ? 'complete' : '']"
      >
        <div class="flex justify-between items-center">
          <div class="flex space-x-2 items-center ">
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
            <h1 class="text-left text-md font-bold sm:break-normal break-words ">
              {{ task.text }}
            </h1>
            </div>
          </div>
          <p class="text-left font-bold">{{ task.day }}</p>
        </div>
      </div>
    </div>
    <slot></slot>
    <div class="">
    <slot name="scroll"></slot>
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
      let taskData = { ...task, completeTask: true };

      this.$emit("checked", taskData);
    }
  }
};
</script>

<template>
  <div>
    <div class="mx-auto max-w-7xl  h-72 bg-purple-900 relative">
      <div class="pb-10">
        <Header title="My Task" />
      </div>
      <div>
        <TaskNote @add-task="addTask" />
      </div>
      <div class="bg-white rounded-t-3xl flex flex-col space-y-10">
        <div class="flex flex-col space-y-8 pt-20 pb-2">
          <div
            v-for="task in tasks"
            :key="task.id"
            class="flex justify-between items-center px-4"
          >
            <div class="flex space-x-2 items-center">
              <div
                class="h-10 w-10 flex justify-center items-center rounded-full bg-purple-900 text-white"
              >
                <div class="flex justify-center items-center">H</div>
              </div>
              <h1 class="text-left text-md font-bold">{{ task.text }}</h1>
            </div>
            <div>
              <p class="text-left font-bold">{{ task.day }}</p>
            </div>
            <!-- <div>
          <button class="text-red-700 font-bold focus:outline-none">X</button>
        </div> -->
          </div>
        </div>
        <div>
          <Task />
        </div>
      </div>
    </div>
  </div>
</template>

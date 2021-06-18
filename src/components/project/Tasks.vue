<template>
  <div class="task mx-auto max-w-7xl sm:px-0 h-72 bg-purple-900 relative">
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
          class="flex justify-between items-center px-3"
          :class="[task.completeTask ? 'complete' : '']"
        >
          <div class="flex space-x-3 items-center">
            <div
              class="h-10 w-10 flex justify-center items-center rounded-full bg-purple-900"
              :class="[task.completeTask ? 'checked' : '']"
            >
              <div class="flex justify-center items-center">
                <button
                  @click="taskChecked(task)"
                  class="focus:outline-none text-white"
                >
                  <i class="fas fa-check h-4 w-4"></i>
                </button>
              </div>
            </div>
            <h1 class="text-left text-md font-bold">
              {{ task.text }}
            </h1>
          </div>
          <div>
            <p class="text-left font-bold">{{ task.day }}</p>
          </div>
        </div>
      </div>
      <div>
        <Task />
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../project/Header";
import Task from "./Task.vue";
import TaskNote from "./TaskNote";
export default {
  components: { Task, Header, TaskNote },
  data() {
    return {
      tasks: [
        {
          id: 1,
          text: "Doctors appointment",
          day: "March 1st, 2021",
          completeTask: false,
          ckecked: false,
        },
        {
          id: 2,
          text: "Doctors appointment",
          day: "March 2nd, 2021",
          completeTask: false,
          ckecked: false,
        },
        {
          id: 3,
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false,
          checked: false,
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false,
          checked: false,
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false,
          checked: false,
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false,
          checked: false,
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false,
          ckecked: false,
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false,
          ckecked: false,
        },
      ],
    };
  },
  //   mounted(){
  //     setTimeout(() => this.tasks.splice(1, 1), 5000);
  //   },
  methods: {
    addTask(task) {
      let date = new Date();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();
      let day = date.getDate();

      let humanReadableDate = `${year}-${month}-${day}`;
      console.log(humanReadableDate);

      this.tasks = [
        ...this.tasks,
        {
          id: task.id,
          text: task.enteredValue,
          day: humanReadableDate,
          completeTask: false,
          checked: false,
        },
      ];
      console.log(this.tasks);
    },
    taskChecked(task) {
      task.completeTask = !task.completeTask;

      // this.tasks = this.tasks.map((task) =>
      //   task.id === id ? { ...task, checked: !task.checked } : task
      // );
      // console.log(true);
      // return this.$router.push({ name: "completeTask" });
    },
    // taskComplete(id) {
    //   this.tasks = this.tasks.map((task) =>
    //     task.id === id ? { ...task, completeTask: !task.completeTask } : task
    //   );
    // },
  },
};
</script>
<style scoped>
.task .checked {
  background-color: orange;
  text-decoration: line-through solid orange;
}

.task .complete {
  text-decoration: line-through;
  text-decoration-color: orange;
  text-decoration-thickness: 2px;
  width: auto;
}
</style>

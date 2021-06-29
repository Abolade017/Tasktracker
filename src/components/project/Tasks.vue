<template>
  <div class=" task mx-auto max-w-4xl sm:px-0 h-72 bg-purple-900  ">
      <div class="pb-10">
      <Header title="My Task" />
    </div>
    <div>
      <TaskNote @add-task="addTask" />
    </div>
    <incomplete-task :tasks="incompleteTask" @checked="handleChecked">
      <CompleteTask  :tasks="completeTask" @checked="handleChecked" />
       <a
        href="#top"
        class=" focus:outline-none fixed flex justify-center items-center bottom-10 sm:left-80 left-72 sm:bottom-0 h-16 w-16 px-4 rounded-full bg-yellow-500 text-white text-lg"
      >
        <div
          class="flex justify-center items-center h-8 w-8 text-3xl bg-yellow-500"
        >
          +
        </div>
      </a>
    </incomplete-task>
  </div>
  
</template>
<script>
 import Header from "./Header";
 import IncompleteTask from "./IncompleteTask.vue";
import CompleteTask from "./CompleteTask.vue";
import TaskNote from "./TaskNote";
export default {
  components: {  Header,TaskNote, IncompleteTask, CompleteTask },
  data() {
    return {
      IncompleteTask: false,
      tasks: [
        {
          id: 1,
          text: "Doctors appointment",
          day: "March 1st, 2021",
          completeTask: false
        },
        {
          id: 2,
          text: "Doctors appointment",
          day: "March 2nd, 2021",
          completeTask: false
        },
        {
          id: 3,
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: true
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false
        },
        {
          id: Math.random(),
          text: "Doctors appointment",
          day: "March 3rd, 2021",
          completeTask: false
        }
      ]
    };
  },
  computed: {
    incompleteTask() {
      return this.tasks.filter(task => !task.completeTask);
    },
    completeTask() {
      return this.tasks.filter(task => task.completeTask);
    }
  },
  methods: {
    handleChecked($event) {
      let id = $event.id;
      let index = this.tasks.findIndex(task => task.id == id);
      this.tasks[index] = $event;
    },
    addTask(task) {
      let date = new Date();
      let month = date.toLocaleString("default", { month: "long" });
      let year = date.getFullYear();
      let day = date.getDate();

      let humanReadableDate = `${month} ${day}, ${year}`;

      return this.tasks.unshift({
        id: task.id,
        text: task.enteredValue,
        day: humanReadableDate,
        completeTask: false
      });
    },
     scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>
<style>
/* #top{
  scroll-behavior: smooth;
} */
.task .checked {
  background-color: orange;
  /* text-decoration: line-through solid orange; */
}

/* .task .complete {
  text-decoration-line: line-through;
  text-decoration-color: orange;
  text-decoration-thickness: 2px;
  width: auto;
} */
</style>

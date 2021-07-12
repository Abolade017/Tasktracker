<template>
  <div class=" task h-72 bg-purple-900 mx-auto max-w-5xl">
    <div class="pb-10">
      <Header title="My Task" />
    </div>
    <div>
      <TaskNote @add-task="addTask" />
    </div>
    <div>
      <incomplete-task :tasks="incompleteTask" @checked="handleChecked">
        <CompleteTask :tasks="completedTask" @checked="handleChecked" />
        <a
          href="#top"
          class="focus:outline-none fixed flex justify-center items-center bottom-10 left-72 sm:left-3/4  sm:bottom-10 h-16 w-16 px-4 rounded-full bg-yellow-500 text-white text-lg"
        >
          <div
            class="flex justify-center items-center h-8 w-8 text-3xl bg-yellow-500"
          >
            +
          </div>
        </a>
      </incomplete-task>
    </div>
  </div>
</template>
<script>
const STORAGE_KEY = "task_storage";
import Header from "./Header";
import IncompleteTask from "./IncompleteTask.vue";
import CompleteTask from "./CompleteTask.vue";
import TaskNote from "./TaskNote";
export default {
  components: {
    IncompleteTask,
    CompleteTask,
    Header,
    TaskNote
  },
  data() {
    return {
      tasks: []
    };
  },
  computed: {
    incompleteTask() {
      return this.tasks.filter(task => !task.completeTask);
    },
    completedTask() {
      return this.tasks.filter(task => task.completeTask);
    }
  },
  watch: {
    tasks: {
      deep: true,
      handler(newValue) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
      }
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
      this.tasks.unshift({
        id: task.id,
        text: task.enteredValue,
        day: humanReadableDate,
        completeTask: false
      });
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    this.tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  }
};
</script>
<style>
#top {
  scroll-behavior: smooth;
  
}
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

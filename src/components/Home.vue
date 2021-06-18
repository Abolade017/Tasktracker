<template>
  <div>
    <!-- <div>hello</div> -->
    <div class="mt-10">
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col space-y-6">
          <div>
            <label>email</label><br />
            <input
              type="email"
              class="border border-gray-300"
              v-model="email"
              required
            />
          </div>
          <div>
            <label>password</label><br />
            <input
              type="password"
              class="border border-gray-300"
              required
              v-model="password"
            />
          </div>
          <div v-if="passwordError" class="text-red-300">
            {{ passwordError }}
          </div>
          <div>
            <label>role</label>
            <select v-model="role" class="border border-gray-300">
              <option value="designer">Web designer</option>
              <option value="developer">Web developer</option>
            </select>
          </div>
          <div>
            <label for="">skills</label>
            <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
            <div
              @click="deleteSkill(skill)"
              v-for="skill in skills"
              :key="skill"
            >
              {{ skill }}
            </div>
          </div>
        </div>
        <label for="">terms and condition</label>
        <input type="checkbox" v-model="terms" />
        <div>
          <button
            class="bg-blue-500 rounded-full focus:outline-none text-center px-6 py-2"
          >
            submit
          </button>
        </div>
        <!-- <label>Raymond</label>
        <input type="checkbox" value="Raymond" v-model="names">
        <label>Daniel</label>
        <input type="checkbox" value="Daniel" v-model="names">
        <label>David</label>
        <input type="checkbox" value="David" v-model="names"> -->
      </form>
      <p>{{ email }}</p>
      <p>{{ password }}</p>
      <p>{{ role }}</p>
      <p>{{ terms }}</p>
    </div>

    <!-- <p>Names:{{names}}</p> -->
    <h1>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
      provident quasi suscipit eligendi quia, cum sunt ex esse, in deleniti
      similique animi aperiam, culpa eius consequatur illo eum non soluta.
    </h1>
   <!-- <About />
    <Spinner :start="spin.val" /> -->
  </div>
</template>
<script>
// import Spinner from "@/components/Spinner.vue";
// import About from './About'
export default {
 
  components: {
    // Spinner,
    // About
  },
  data() {
    return {
      email: "",
      password: "",
      role: "",
      terms: false,
      tempSkill: "",
      skills: [],
      passwordError: "",
      // spin: {
      //   val: false,
      // },
    };

    // names:[],
  },
  provide() {
    return {
      mySpinner: this.spin,
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit() {
      this.passwordError =
        this.password.length > 5 ? "" : "password must be atleast 6 chars long";
      if (!this.passwordError) {
        console.log("email:", this.email);
        console.log("password:", this.password);
        console.log("skill:", this.skills);
        console.log("role:", this.role);
      }
    },
  },
};
</script>

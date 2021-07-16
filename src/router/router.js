import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Jobs from '../components/Jobs/Jobs.vue';
import JobDetails from '../components/Jobs/JobDetails.vue';
import NotFound from '../components/Jobs/NotFound.vue';
import Base from '../components/project/Tasks.vue';
import IncompleteTask from '../components/project/IncompleteTask.vue';
import completeTask from '../components/project/Tasks.vue';


const routes = [{ path: '/about', component: About, name: 'About' },
{ path: '/', component: Base, name: 'Base' },
{ path: '/home', component: Home, name: 'Home' },
{ path: '/jobs', component: Jobs, name: 'Jobs' },
{ path: '/jobs/:id', component: JobDetails, name: 'JobDetails', props: true },
{ path: '/all-jobs', redirect: '/jobs' },
{ path: '/:catchAll(.*)', component: NotFound, name: 'notFound' },
// { path: '/base', component: Base, name: 'Base' },
{ path: '/incomplete-task', component: IncompleteTask, name: 'IncompletTask' },
{ path: '/complete-task', component: completeTask, name: 'completTask' },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
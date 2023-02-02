<template>
  <div class="pa-md-4">
    <v-row>
      <v-col>
      <h1>{{ drawer }}</h1>
      <h1>Tareas pendientes</h1>
      <TimelineVue :tasks="tasks" @resolve-task="showTask"></TimelineVue>
      </v-col>
      <v-col>
        <h1>Tareas Realizadas</h1>
      <TimelineVue :tasks="tasks"></TimelineVue>
      </v-col>
    </v-row>
    <Task :drawer="drawer" :id="id" ></Task>
  </div>
</template>

<script>
import Task from "../components/task.vue";
import TimelineVue from "~/components/timeline.vue";
export default {
  name: 'IndexPage',
  data: () => {
   
    return {
      tasks: [ {
        "id": 528,
        "title": "xxxxxx",
        "is_completed": 0,
        "due_date": null
    },
    {
        "id": 530,
        "title": "Nueva tarea",
        "is_completed": 1,
        "due_date": "2023-01-05"
    },
    {
        "id": 532,
        "title": "Nueva tarea 2",
        "is_completed": 0,
        "due_date": "2023-01-05"
    },
    {
        "id": 533,
        "title": "tarea 10",
        "is_completed": 0,
        "due_date": "2023-01-05"
    }],
      drawer: false,
      id:''
    }
  },
  methods:{
    showTask(id){
      this.id= id;
      if(this.drawer){
        this.drawer=false;
        this.drawer=true;
      }
      this.drawer=true;
    }
  },
  components:{
    Task, TimelineVue
  },
}
</script>

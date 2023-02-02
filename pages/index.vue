<template>
  <div class="pa-md-4">
   
    <v-row>
      <v-col>
      <h1>Tareas pendientes</h1>
      <TimelineVue :tasks="tasks" @resolve-task="showTask"  ></TimelineVue>
      </v-col>
      <v-col>
        <h1>Tareas Realizadas</h1>
      <TimelineVue :tasks="tasks" @resolve-task="showTask" ></TimelineVue>
      </v-col>
    </v-row>
    <Task :drawer="drawer" :id="id" ></Task>
  </div>
</template>

<script>
import Task from "../components/task.vue";
import TimelineVue from "~/components/timeline.vue";
import axios from 'axios'
import axiosInstance from "~/plugins/axios";
import qs from 'qs'

export default {
  
  name: 'IndexPage',

  data: () => {
    return {
      tasks: [],
      drawer: false,
      id:0,
    }
  },
  mounted() {
  this.getData();
}
,
  methods:{
    showTask(id){
      this.id= id;
      if(this.drawer){
        this.drawer=false;
        this.drawer=true;
      }
      this.drawer=true;
    },
    
      async getData() {
      const token = 'e864a0c9eda63181d7d65bc73e61e3dc6b74ef9b82f7049f1fc7d9fc8f29706025bd271d1ee1822b15d654a84e1a0997b973a46f923cc9977b3fcbb064179ecd'

      try {
        const response = await axiosInstance.get()
        this.tasks = response.data;
      } catch (error) {
        console.error(error)
      }
    }
    

    
  
  },
  components:{
    Task, TimelineVue
  },

  
}
</script>

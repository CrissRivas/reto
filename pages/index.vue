<template>
  <div class="pa-md-4">
   
    <v-row>
      <v-col>
        <h1>¡Hola!</h1>
        <h3>  Estas son tus tareas  <br> pendientes para hoy {{ currentDate }}</h3>
      
      <TimelineVue :tasks="notCompletedArray" @resolve-task="showTask" @refreshData1="getData()" ></TimelineVue>
      </v-col>
      <v-col>
        <h1>Tareas Realizadas</h1>
      <TimelineCompleted :tasks="completedArray" @resolve-task="showTask" ></TimelineCompleted>
      </v-col>
    </v-row>
    <Task :drawer="drawer" :id="id" @refreshData="getData()"></Task>
  </div>
</template>

<script>
import Task from "../components/task.vue";
import TimelineVue from "~/components/timeline.vue";
import TimelineCompleted from "~/components/timelineCompleted.vue";
import axiosInstance from "~/plugins/axios";


export default {
  
  name: 'IndexPage',

  data: () => {
    return {
      tasks: [],
      drawer: false,
      id:0,
      currentDate: new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      completedArray: [],
      notCompletedArray: []
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
      
      try {
        this.completedArray=[];
        this.notCompletedArray=[];
        const response = await axiosInstance.get()
        this.tasks = response.data;
        this.separateArrays();
      } catch (error) {
        console.error(error)
      }
    },

    separateArrays () {
      console.log(this.tasks);
    this.tasks.forEach(element => {
      if (element.is_completed === 1) {
        this.completedArray.push(element)
      } else {
        this.notCompletedArray.push(element)
      }
    });
    console.log(this.completedArray);
    console.log(this.notCompletedArray);
    this.completedArray.sort((a, b) => {
      return new Date(a.due_date) - new Date(b.due_date)
    });
    this.notCompletedArray.sort((a, b) => {
      return new Date(a.due_date) - new Date(b.due_date)
    });
    console.log(this.completedArray);
    console.log(this.notCompletedArray);
  }
    

    
  
  },
  components:{
    Task, TimelineVue, TimelineCompleted
  },

  
}
</script>

<template>
  <div class="pa-md-4">

    <v-row>
      <v-col>
        <v-row class="ma-2">
          <h1>¡Hola!</h1><v-icon class="mx-4" color="green" x-large>mdi-hand-wave</v-icon>
        </v-row>
        <h3> Estas son tus tareas <br> de hoy {{ currentDate }}</h3>

        <TimelineVue :tasks="notCompletedArray" @resolve-task="showTask" @refreshData1="getData()"
          @newTask="upload = !upload"></TimelineVue>
      </v-col>
      <v-col>
        <h1>Tareas Realizadas</h1>
        <TimelineCompleted :tasks="completedArray" @resolve-task="showTask" @editTask="editTask"></TimelineCompleted>
      </v-col>
    </v-row>
    <Task :changes="changes" :id="id" @refreshData="getData()" :upload="upload" :edits="edits"></Task>
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
      changes: false,
      edits:false,
      id: 0,
      currentDate: new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }),
      completedArray: [],
      notCompletedArray: [],
      upload: false,
    }
  },
  mounted() {
    this.getData();

  }
  ,
  methods: {
    showTask(id) {
      this.id = id;
      this.changes= !this.changes;
    },

    editTask(id){
      this.id=id;
      this.edits= !this.edits;
    },

    async getData() {

      try {
        const response = await axiosInstance.get()
        this.tasks = response.data;
        this.separateArrays();
      } catch (error) {
        console.error(error)
      }
    },

    separateArrays() {
      this.completedArray = [];
      this.notCompletedArray = [];
      this.tasks.forEach(element => {
        if (element.is_completed === 1) {
          this.completedArray.push(element)
        } else {
          this.notCompletedArray.push(element)
        }
      });
      this.completedArray.sort((a, b) => {
        return new Date(a.due_date) - new Date(b.due_date)
      });
      this.notCompletedArray.sort((a, b) => {
        return new Date(a.due_date) - new Date(b.due_date)
      });

    }




  },
  components: {
    Task, TimelineVue, TimelineCompleted
  },


}
</script>

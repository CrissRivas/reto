<template>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      top
      temporary
      right
      cliped
      width="400"
    > 
    <v-list-item-title class="text-h6">
        <v-btn icon @click.stop="drawer = !drawer" >
                <v-icon x-large>
                    mdi-chevron-double-right
                </v-icon>
            </v-btn>
    </v-list-item-title>
    <v-divider></v-divider>

    <!-- Detalles de la tarea -->
   <v-row class="pa-3" dense v-if="edit">
    <v-col >
     <v-row justify="center" align="center">
      <h1 class="display-2 ma-4"> {{ task.title }}</h1>
    </v-row>
    <v-row justify="center" align="center">
      <v-chip
      class="ma-2"
      color="primary"
      v-if="task.tags"
    >
      {{ task.tags }}
    </v-chip>
    </v-row>
    <h3>Descripción:</h3>
    <v-card class="ml-4 pa-2 my-4" outlined height="50">
      <p class="">
    {{ task.description }}
    </p>
    </v-card>
    
    <h3>Comentarios:</h3>
    <v-card class="ml-4 pa-2 my-4" outlined height="50">
      <p >
    {{ task.comments }}
    </p>
    </v-card>
    

    <v-card :color="difference" height="150"  class="my-4"> 
      <v-row>
      <v-col  align="center" justify="center">
        <p>Fecha de entrega:</p>
      <h1> {{ weekday }} </h1>
      <h3>  {{ this.task.due_date }}</h3>
      </v-col>
      </v-row>
      
    </v-card>
      <v-btn v-if="task.is_completed === 0" color="green" block class="pa-8 my-4" @click="completeTask(task.id)" >
           <v-icon large>mdi-star-outline</v-icon>
      </v-btn>
      <v-btn v-if="task.is_completed === 1" color="amber accent-4" block class="pa-8 my-4" @click="inCompleteTask(task.id)" >
           <v-icon large>mdi-star</v-icon>
      </v-btn>
    <v-row>
    <v-col> 
      <v-btn @click="edit= !edit" color="blue" block class="pa-4">
            <v-icon large>mdi-pencil</v-icon>
      </v-btn>
    </v-col>
    <v-col> 
    <!--  -->
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        
        <v-btn color="red" block class="pa-4"  v-bind="attrs"
          v-on="on">
            <v-icon large>mdi-trash-can-outline</v-icon>
      </v-btn>
          
      </template>

      <v-card>
        <v-card-title class="text-h5 red darken-3">
          Borrar permanentemente 
        </v-card-title>

        <v-card-text justify="center" align="center">
          Des: {{ task.description }}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red lighten-1"
            text
            @click="deleteData(id)"
          >
            Borrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
    <!--  -->
     
    </v-col>
    </v-row>
    </v-col>
    

   </v-row>
   <!-- Detalles de la tarea -->


   <v-snackbar
      v-model="snackbar"
      absolute
      bottom
      color="lime accent-3"
      outlined
    >
      {{ detail }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="lime accent-3"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </v-navigation-drawer>


</template>
  

<script>

import axiosInstance from "~/plugins/axios";
import qs from 'qs';

  export default {

    data: () => {
    return {
      task: [],
      dialog: false,
      detail:"",
      snackbar: false,
      edit:true,
    }
  },

  watch: {
    id(id) {
      this.getData(id);
    }
  },
  methods: {
    
    async getData(id) {
      try {
        const response = await axiosInstance.get('/'+id)
        this.task = response.data[0]||{};
        // console.log(this.task); 
      } catch (error) {
        console.error(error)
      }
    },
    async deleteData(id) {
      try {
        const response = await axiosInstance.delete('/'+id)
        this.detail = response.data.detail || {};
        this.dialog = false;
        this.snackbar = true;
        this.drawer = false;
        this.$emit.deleted( )

        // console.log(this.task);
      } catch (error) {
        console.error(error)
      }
    },

    async completeTask(id) {
      try {
        const response = await axiosInstance.get('/'+id)
        this.task = response.data[0]||{};
        this.task.is_completed = 1;
        // console.log(this.task);
        const res = await axiosInstance.put('/'+id, qs.stringify(this.task));
        // console.log(res.data);
        this.drawer=false;
        this.$emit('refreshData');
      } catch (error) {
        console.error(error)
      }
    },
    async inCompleteTask(id) {
      try {
        const response = await axiosInstance.get('/'+id)
        this.task = response.data[0]||{};
        this.task.is_completed = 0;
        // console.log(this.task);
        const res = await axiosInstance.put('/'+id, qs.stringify(this.task));
        // console.log(res.data);
        this.drawer=false;
        this.$emit('refreshData');
      } catch (error) {
        console.error(error)
      }
    }

  },
      props: {
    drawer: {
      type: Boolean,
      required: true
    },
    id: Number
  },
  computed: {
    difference() {
      const date1 = new Date(this.task.due_date);
      const date2 = new Date();
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const difer = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (difer >= 7) {
        return "green"
      }
      if (difer >= 4) {
        return "orange"
      }
      else{
        return "red darken-2"
      }
    },
    weekday() {
      const weekdays = [ 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      const date = new Date(this.task.due_date);
      return weekdays[date.getDay()];
    }

  }


    }
</script>


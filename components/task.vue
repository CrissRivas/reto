<template>
  <v-navigation-drawer v-model="drawer" fixed top temporary right cliped width="400">
    <!-- Barra para cerrar Drawer -->
    <v-list-item-title class="text-h6">
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon x-large>
          mdi-chevron-double-right
        </v-icon>
      </v-btn>
    </v-list-item-title>
    <v-divider></v-divider>

    <!-- Detalles de la tarea -->
    <v-row class="pa-3" dense v-if="edit">
      <v-col>
      <!-- Titulo -->
        <v-row justify="center" align="center">
          <h1 class="display-2 ma-4"> {{ task.title }}</h1>
        </v-row>
        <v-row justify="center" align="center">
        <!-- Tag -->
          <v-chip class="ma-2" color="primary" v-if="task.tags">
            {{ task.tags }}
          </v-chip>
        </v-row>
        <!-- Descripcion -->
        <h3>Descripción:</h3>
        <v-card class="ml-4 pa-2 my-4" outlined height="50">
          <p class="">
            {{ task.description }}
          </p>
        </v-card>
        <!-- Comentarios -->
        <h3>Comentarios:</h3>
        <v-card class="ml-4 pa-2 my-4" outlined height="50">
          <p>
            {{ task.comments }}
          </p>
        </v-card>

        <!-- Fecha de entrega -->
        <v-card :color="difference" height="150" class="my-4">
          <v-row>
            <v-col align="center" justify="center">
              <p>Fecha de entrega:</p>
              <h1> {{ weekday }} </h1>
              <h3> {{ this.task.due_date }}</h3>
            </v-col>
          </v-row>
          <!-- Boton para completar la tarea o para marcarla como incompleta -->
        </v-card>
        <v-btn v-if="task.is_completed === 0" color="green" block class="pa-8 my-4" @click="completeTask(task.id)">
          <v-icon large>mdi-star-outline</v-icon>
        </v-btn>
        <v-btn v-if="task.is_completed === 1" color="amber accent-4" block class="pa-8 my-4"
          @click="inCompleteTask(task.id)">
          <v-icon large>mdi-star</v-icon>
        </v-btn>
        <v-row>
          <v-col>
          <!-- Boton para editar la tarea -->
            <v-btn @click="edit = !edit" color="blue" block class="pa-4">
              <v-icon large>mdi-pencil</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <!--  Se mostrara un mensaje antes de borrar  -->
            <div class="text-center">
              <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <!-- Boton para borrar la tarea-->
                  <v-btn color="red" block class="pa-4" v-bind="attrs" v-on="on">
                    <v-icon large>mdi-trash-can-outline</v-icon>
                  </v-btn>

                </template>
                <!-- Mensaje para asegurar que no se borre por error -->
                <v-card>
                  <v-card-title class="text-h5 red darken-3">
                    Borrar permanentemente
                  </v-card-title>
                  <!-- Descripcion de la tara antes de borrar -->
                  <v-card-text justify="center" align="center">
                    Des: {{ task.description }}
                  </v-card-text>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- Boton para borrar permanentemente  -->
                    <v-btn color="red lighten-1" text @click="deleteData(id)">
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
    <!-- Seccion para editar o subir nueva tarea -->
    <v-row class="pa-3" dense v-if="!edit">
    <!-- Editar titulo -->
      <v-text-field label="Titulo" class="display-1 pa-4" color="green" outlined v-model="task.title"></v-text-field>
      <!-- Editar tag -->
      <v-text-field dense label="Tag" filled rounded color="green" v-model="task.tags"></v-text-field>
      <!-- Editar descripción -->
      <v-textarea outlined name="input-7-4" label="Descripción" color="green" rows="3"
        v-model="task.description"></v-textarea>
        <!-- Editar comentarios -->
      <v-textarea outlined name="input-7-4" label="Comentarios" color="green" rows="3"
        v-model="task.comments"></v-textarea>
      <!-- Seleccionador de fechas -->
      <v-menu v-model="menu2" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" offset-y
        min-width="auto">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field v-model="task.due_date" label="Fechas de entrega" prepend-icon="mdi-calendar" readonly
            v-bind="attrs" v-on="on" color="green"></v-text-field>
        </template>
        <v-date-picker v-model="task.due_date" @input="menu2 = false" color="green" locale="es-MX"></v-date-picker>
      </v-menu>
      <!-- Boton para editar  -->
      <v-btn @click="submitChanges" color="blue" block class="pa-4" v-if="!newTask">
        <v-icon large>mdi-pencil</v-icon>
      </v-btn>
      <!-- Boton para subir -->
      <v-btn @click="submitNew" color="green" block class="pa-4" v-if="newTask">
        <v-icon large>mdi-plus</v-icon>
      </v-btn>

    </v-row>


    <v-snackbar v-model="snackbar" absolute bottom color="lime accent-3" outlined>
      {{ detail }}

      <template v-slot:action="{ attrs }">
        <v-btn color="lime accent-3" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-navigation-drawer>


</template>
  

<script>

import axiosInstance from "~/plugins/axios"; // Utilizamos axios con nuestra configuración
import qs from 'qs'; // Utilizamos qs para enviar los datos como application/x-www-form-urlencoded 


export default {

  data: () => {
    return {
      task: [],
      dialog: false,
      detail: "",
      snackbar: false,
      drawer: false,
      edit: true,
      menu2: false,
      newTask: false
    }
  },

  watch: {
    changes() {
      //Setea las variables para mostrar los datos 
      this.drawer = true;
      this.edit = true;
      this.newTask = false;
    },
    //Al cambio de ID pide la información al servidor
    id(id) {
      this.getData(id);
    },
    // Setea las variables para subir una nueva tarea
    upload() {
      this.task = {
        token: "",
        title: "",
        is_completed: 0,
        due_date: "",
        comments: "",
        description: "",
        tags: ""
      }
      this.drawer = true;
      this.edit = false;
      this.newTask = true;
    },
    //Setea las variables para editar una tarea
    edits(){
      this.drawer = true;
      this.edit = false;
      this.newTask = false;
    }

  },
  methods: {
    //Obtener los datos de la tarea
    async getData(id) {
      try {
        const response = await axiosInstance.get('/' + id)
        this.task = response.data[0] || {};
      } catch (error) {
        console.error(error)
      }
    },
    //Borrar la tarea
    async deleteData(id) {
      try {
        const response = await axiosInstance.delete('/' + id)
        this.detail = response.data.detail || {};
        this.dialog = false;
        this.snackbar = true;
        this.drawer = false;
        this.$emit('refreshData');
      } catch (error) {
        console.error(error)
      }
    },
    //Cambiar a completada la tarea
    async completeTask(id) {
      try {
        const response = await axiosInstance.get('/' + id)
        this.task = response.data[0] || {};
        this.task.is_completed = 1;
        const res = await axiosInstance.put('/' + id, qs.stringify(this.task));
        this.drawer = false;
        this.$emit('refreshData');
      } catch (error) {
        console.error(error)
      }
    },
    //Cambiar a imcompleta la tarea
    async inCompleteTask(id) {
      try {
        const response = await axiosInstance.get('/' + id)
        this.task = response.data[0] || {};
        this.task.is_completed = 0;
        const res = await axiosInstance.put('/' + id, qs.stringify(this.task));
        this.drawer = false;
        this.$emit('refreshData');
      } catch (error) {
        console.error(error)
      }
    },
    //Subir cambios a la tarea
    async submitChanges() {
      try {
        console.log(this.task);
        const res = await axiosInstance.put('/' + this.task.id, qs.stringify(this.task));
        console.log(res.data);
        this.edit = !this.edit;
        this.drawer = !this.drawer;
        this.$emit('refreshData');
      } catch (error) {
        console.error(error)
      }
    },
    //Subir una nueva tarea 
    async submitNew() {
      try {
        console.log(this.task);
        const res = await axiosInstance.post('', qs.stringify(this.task));
        this.edit = !this.edit;
        this.newTask = !this.newTask;
        this.drawer = !this.drawer;
        this.$emit('refreshData');
      } catch (error) {
        console.error(error)
      }
    },

  },


  props: {
    changes: Boolean,
    id: Number,
    upload: Boolean,
    edits: Boolean
  },

  computed: {

    //Una funcion para obtener los dias restantes para llegar a una fecha
    difference() {
      const date1 = new Date(this.task.due_date);
      const date2 = new Date();
      const timeDiff = Math.abs(date2.getTime() - date1.getTime());
      const difer = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (difer >= 7) {
        return "green" //Si faltan más de 7 días es color verde 
      }
      if (difer >= 4) {
        return "orange" //Si faltan entre 4 y 7 días es naranja
      }
      else {
        return "red darken-2" // Si faltan menos de 4 dias es colo rojo
      }
    },
    // Con esta funcion podemos 
    weekday() {
      const weekdays = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
      const date = new Date(this.task.due_date);
      return weekdays[date.getDay()];
    }

  }


}
</script>


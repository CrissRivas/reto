<template>
  <div>
    <!-- Crea una tarjeta con una forma personalizada y establece un ancho mínimo de 200 -->
    <v-card shaped dark outlined min-width="200" class="my-4">

      <!-- Al hacer clic, emite un evento "resolve-task" con el id de la tarea -->
      <div @click="$emit('resolve-task', task.id)">
        <!-- Muestra el título de la tarea -->
        <v-card-title class="text-h5">
          {{ task.title }}
        </v-card-title>

        <!-- Muestra la fecha de entrega de la tarea -->
        <v-card-subtitle>Entrega:{{ task.due_date }} </v-card-subtitle>
      </div>

      <!-- Si la tarea no se ha completado, muestra un botón verde con un icono de "mdi-star-outline" -->
      <v-btn v-if="task.is_completed === 0" color="green" fab absolute top right small @click="putData(task.id)">
        <v-icon>mdi-star-outline</v-icon>
      </v-btn>
      <!-- Si la tarea ya se ha completado, muestra un botón con un color "light-blue lighten-3" y un icono de "mdi-pencil" -->
      <v-btn v-else color="light-blue lighten-3" fab absolute top right small @click="$emit('editTask', task.id)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </v-card>

  </div>
</template>

<script>
// Importa una instancia de axios
import axiosInstance from '~/plugins/axios';
// Importa qs para stringify los datos
import qs from 'qs'

export default {
  name: 'Task',
  // Define los datos iniciales de la tarea
  data: () => {
    return {
      task: [],
      detail: "",
      showTask: true
    }
  },
  methods: {

    // Actualiza el estado de la tarea
    async putData(id) {
      try {
        // Obtiene los datos de la tarea por id
        const response = await axiosInstance.get('/' + id)
        // Establece los datos de la tarea
        this.task = response.data[0] || {};
        this.task.is_completed = 1;
        // Actualiza la tarea
        const res = await axiosInstance.put('/' + id, qs.stringify(this.task));
        // Emite un evento "refreshData" para refrescar los datos
        this.$emit('refreshData')
      } catch (error) {
        console.error(error)
      }
    }
  },

  props: {
    // Se define una propiedad "task" que se pasa al componente
    task: Object,
  },
}
</script>

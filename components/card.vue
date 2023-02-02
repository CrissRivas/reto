<template>
    <div>
                <v-card
                    shaped
                    dark
                    outlined
                    min-width="200"
                    class="my-4"
                    
                >

                <div @click="$emit('resolve-task', task.id)">
                
                    <v-card-title class="text-h5">
                    {{ task.title }}
                    </v-card-title>

                    <v-card-subtitle>Entrega:{{ task.due_date }} </v-card-subtitle>
                </div>

                  <v-btn
                    v-if="task.is_completed === 0"
                    color="green"
                    fab
                    absolute
                    top
                    right
                    small
                    @click="putData(task.id)"
                    >
                    <v-icon>mdi-star-outline</v-icon>
                  </v-btn>
                  <v-btn
                    v-else
                    color="light-blue lighten-3"
                    fab
                    absolute
                    top
                    right
                    small
                    >
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                </v-card>

               
            
    </div>
</template>

<script>
import axiosInstance from '~/plugins/axios';
import qs from 'qs'

   export default {
    name: 'Task',
    data: () => {
    return {
      task: [],
      detail:"",
      showTask: true
    }},
    methods: {
    
    async putData(id) {
      try {
        const response = await axiosInstance.get('/'+id)
        this.task = response.data[0]||{};
        this.task.is_completed = 1;
        // console.log(this.task);
        const res = await axiosInstance.put('/'+id, qs.stringify(this.task));
        // console.log(res.data);
        this.$emit('refreshData')
      } catch (error) {
        console.error(error)
      }
    }},

    props: {
        task: Object,
    },
    }
</script>

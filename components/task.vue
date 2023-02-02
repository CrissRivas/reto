<template>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      top
      temporary
      right
      cliped
    > 
    <v-list-item-title class="text-h6">
        <v-btn icon @click.stop="drawer = !drawer" >
                <v-icon x-large>
                    mdi-chevron-double-right
                </v-icon>
            </v-btn>
    </v-list-item-title>
    <v-divider></v-divider>
   <v-row class="pa-3" dense >
    <v-col justify="space-around">
      <h1> {{ task.title }}</h1>
    <v-chip
      class="ma-2"
      color="primary"
    >
      {{ task.tags }}
    </v-chip>
    <p>
    {{ task.description }}
    </p>
    <p>
    {{ task.due_date }}
    </p>
    </v-col>
    

   </v-row>
   
    </v-navigation-drawer>
</template>
  

<script>
  export default {

    data: () => ({
      task:{
        "id": 532,
        "title": "hola wenas",
        "is_completed": 0,
        "due_date": "2023-02-02",
        "comments": "Nueva tarea 2",
        "description": "Nueva tarea 2",
        "tags": "Nueva tarea 2",
        "token": "",
        "created_at": "2023-01-05 16:27:06",
        "updated_at": "2023-02-02 06:31:59"
    },
    }),
    
      props: {
    drawer: {
      type: Boolean,
      required: true
    },
    id: Number
  }
    }
</script>


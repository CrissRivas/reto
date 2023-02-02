<template>
    <div>
                <v-card
                    shaped
                    dark
                    outlined
                    min-width="200"
                    class="ma-md-4"
                    @click="$emit('resolve-task', task.id)"
                >
                    <v-card-title class="text-h5">
                    {{ task.title }}
                    </v-card-title>

                    <v-card-subtitle>Entrega:{{ task.due_date }} </v-card-subtitle>

                    <v-card-actions>
                    <v-btn text >
                        Realizada
                    </v-btn>
                    </v-card-actions>
                </v-card>
            
    </div>
</template>

<script>
   export default {
    name: 'Task',
    data: () => ({
      showTask: true,
    }),
    props: {
        task: Object,
    },
    }
</script>

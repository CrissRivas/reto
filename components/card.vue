<template>
    <div>
        <!-- <v-row dense>
            <v-col cols="12"> -->
                <v-card
                    color="#385F73"
                    dark
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
            <!-- </v-col>
        </v-row> -->
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

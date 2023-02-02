<template>
    <div>
        <v-timeline  dense>
            <v-timeline-item  color="lime accent-3" small >
            <v-row>
                <v-card
                    shaped
                    dark
                    outlined
                    min-width="200"
                    min-height="50"
                    class="my-4"
                    color="green light-3"
                    align="center" 
                    justify="center"
                >
                <v-icon x-large>mdi-plus</v-icon>
                </v-card>
            </v-row>
            </v-timeline-item >
            <v-timeline-item  color="lime accent-3" small  :key="task.id" v-for="task in tasks">
                <v-row>
                    <Card :task="task" @resolve-task="$emit('resolve-task', task.id)" @refreshData="$emit('refreshData1')"></Card>
                </v-row>  
            </v-timeline-item >
        </v-timeline>
    </div>
</template>

<script>
import Card from './card.vue';

    export default {
     components:{
        Card
     },
     props:{
        tasks: Array,color:String
     },
     emits: ['resolve-task', 'refreshData'],
    }
</script>

<style lang="scss" scoped>

</style>
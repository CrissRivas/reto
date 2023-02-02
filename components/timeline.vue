<template>
    <div>
        <v-timeline :key="task.id" v-for="task in tasks" dense>
            <v-timeline-item  color="teal lighten-3" small >
                <v-row>
                    <Card :task="task" @resolve-task="$emit('resolve-task', task.id)"></Card>
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
     emits: ['resolve-task'],
    }
</script>

<style lang="scss" scoped>

</style>
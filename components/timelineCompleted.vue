<template>
    <div>
        <v-timeline  dense>
            <v-timeline-item  color="light-blue lighten-3" small  :key="task.id" v-for="task in tasks">
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
<template>
    <!-- Se utiliza un componente de vuetify llamado v-timeline para desplegar los datos en forma de línea temporal -->
    <div>
        <v-timeline dense>
            <!-- Se itera sobre un arreglo de tareas llamado "tasks" y se utiliza v-for para desplegar un componente de tarjeta (Card) para cada tarea -->
            <v-timeline-item color="light-blue lighten-3" small :key="task.id" v-for="task in tasks">
                <v-row>
                    <Card :task="task" @resolve-task="$emit('resolve-task', task.id)" 
                    @editTask="$emit('editTask', task.id)"></Card>
                </v-row>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>

<script>
// Se importa el componente de tarjeta desde un archivo separado llamado card.vue
import Card from './card.vue';

export default {
    components: {
        Card
    },
    // Se define una propiedad llamada "tasks" que espera recibir un arreglo de datos y otra propiedad llamada "color" que espera recibir una cadena de texto
    props: {
        tasks: Array, color: String
    },
    // Se declara un evento personalizado llamado "resolve-task" que puede ser emitido desde el componente
    emits: ['resolve-task','editTask'],
}
</script>

<style lang="scss" scoped>
    /* Se pueden agregar estilos personalizados dentro de un bloque de estilo con alcance (scoped) */
</style>
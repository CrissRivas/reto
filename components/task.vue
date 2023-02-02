<template>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      top
      temporary
      right
    > 
    <v-list-item-title class="text-h6">
        <v-btn icon @click.stop="drawer = !drawer" >
                <v-icon x-large>
                    mdi-chevron-double-right
                </v-icon>
            </v-btn>
    </v-list-item-title>
    <v-divider></v-divider>
    <h1> {{ id }}</h1>
    </v-navigation-drawer>
</template>
  

<script>
  export default {
    
      props: {
    drawer: {
      type: Boolean,
      required: true
    },
    id: Number
  }
    }
</script>


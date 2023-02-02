<template>
  <v-app dark>
    <Navigation></Navigation>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "../components/navigation.vue";


export default {
    name: "DefaultLayout",
    data() {
        return {
      
        };
    },
    components: { Navigation }
}
</script>

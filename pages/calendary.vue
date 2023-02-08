<template>
  <v-row class="fill-height">
    <v-col justify="center" aling="center">
      <v-sheet height="500">
        <v-calendar
          :now="today"
          :value="today"
          color="green"
        >
          <template v-slot:day="{ past, date }">
            <v-row
              class="fill-height"
              justify="center"
              align="top"
              
            >
              <template v-if="past && tracked[date]">
               <v-card shaped dark outlined dense width="100">
                <v-icon class="mx-4" color="green" >mdi-hand-wave</v-icon>
               </v-card>
              </template>
            </v-row>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      today: new Date() ,
      tracked: {
        '2023-02-09': [23, 45, 10],
        '2023-02-08': [10],
        '2023-02-07': [0, 78, 5],
        '2023-02-06': [0, 0, 50],
        // '2023-02-05': [0, 10, 23],
        '2023-02-04': [2, 90],
        '2023-02-03': [10, 32],
        '2023-02-02': [80, 10, 10],
        '2023-02-01': [20, 25, 10],
      },
      colors: ['#1867c0', '#fb8c00', '#000000'],
      category: ['Development', 'Meetings', 'Slacking'],
    }),
  }
</script>

<template>
    <v-app-bar
      app
      color="grey lighten-4"
      height="100px"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Gambia Flag"
          class="shrink mr-2"
          contain
          src="../assets/gam flag with coat of arm.png"
          transition="scale-transition"
          width="130"
          height="100"
        />
      </div>
        <v-spacer></v-spacer>
      <div 
      class="black--text headline display-1">
        <span>2021 Presidential Election</span>
      </div>
        <v-spacer></v-spacer>
      <div>
                <v-img
          alt="IEC Logo"
          class="shrink ml-2"
          contain
          src="../assets/logo-IEC.png"
          transition="scale-transition"
          width="130"
          height="100"
        />    
      </div>
    </v-app-bar>
</template>

<script>
export default {
    name:"Header",
}
</script>
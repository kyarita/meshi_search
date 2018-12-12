<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light"> MESHI_SEARCH</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <Top/>
    </v-content>
  </v-app>
</template>

<script>
import Top from './components/Top'

export default {
  name: 'App',
  components: {
    Top
  },
  data () {
    return {
      //
    }
  }
}
</script>

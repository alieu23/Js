<template>
  <div class="home">
    <Header/>
   <DataBoxes/>
   <SelectConstituency/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import DataBoxes from '../components/DataBoxes.vue'
import SelectConstituency from '../components/SelectConstituency.vue'

export default {
  name: 'Home',
  components: {
    Header,
    DataBoxes,
    SelectConstituency
  }
}
</script>

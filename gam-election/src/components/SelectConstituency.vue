<template>

  <v-row align="center">
    <v-col cols="12">
    <v-select
      v-model="select"
      :items="items"
      label="Item"
      required
    ></v-select>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
  }
</script>
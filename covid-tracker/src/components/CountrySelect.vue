<template>
  <Select
    @change="onChange()"
    class="form-select mt-1 block w-full border p-3 rounded"
    v-model="selected"
  >
    <option value="select country">Select Country</option>
    <option v-for="country in countries" :value="country.ID">{{country.Country}}</option>
  </Select>

</template>
<script>
export default {
  name: "CountrySelect",
  props: ["countries"],
  data() {
    return {
      selected: "",
      text:"me",
    };
  },
  methods: {
    onChange() {
      const country = this.countries.find(
        (item) => item.Country == this.selected
      );
      //console.log(123);
      //console.log("selected", this.selected);
      this.$emit("get-country", country);
    },

  },
  created(){
      console.log("selected", this.selected)
      console.log("text", this.text)
  }
};
</script>
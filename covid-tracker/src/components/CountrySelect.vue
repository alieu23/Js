<template>
   <Select @change="onChange()"
     class="form-select mt-1 block w-full border p-3 rounded"
     v-model="selected">
       <option value="select country">Select Country</option>
       <option v-for="(country, index) in countries" :key="index" :value="country.ID">
           {{country.Country}}
       </option>
   </Select>
</template>
<script>
export default {
    name:'CountrySelect',
    props:['countries'],
    data(){
        return{
            selected:0,
        }
    },
    methods:{
        onChange(){
            const country = this.countries.find((item)=> item.ID === "Gambia")
            console.log('selected', country)
            this.$emit('get-country', country)
        },
    },
}
</script>
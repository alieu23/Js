<template>
    <header>
        <h1>{{title}}</h1>
        <Button
         v-show="homepage"
         @btn-click="$emit('toggle-add-task')" 
        :text="showAddTask ? 'Close':'Add Task'"
        :color="showAddTask ? 'red' : 'green'"/>
    </header>
</template>

<script>
import Button from './Button'

export default {
    name: 'Header',
    props:{
        title: String,
        showAddTask:Boolean 
    },
    computed:{
        homepage(){
            if(this.$route.path==='/'){
                return true
            }else{
                return false
            }
        }
    },
    components:{
        Button
    }
}
</script>

<style scoped>
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>
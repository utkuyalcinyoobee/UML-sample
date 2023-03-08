<template>
    <div class="search-user-div">
        <h1>SEARCH USERS</h1>
        <input type="text" v-model="search_query" placeholder="search">
        <input type="submit" value="search" @click="fetch_GET_search_results">
        
    </div>
</template>

<style scoped>
.search-user-div{padding: 20px;}
</style>

<script setup>
defineProps({ 
    // real prop for this component
    user_id: String, 
    // below are props I needed to pass to create a fake fetch system
    user_database:Array,
    friend_requests:Array,
    chat_messages:Array,
    current_user:Object
}); 
</script>

<script>
export default {
    data(){
        return{
            search_query:'',
            search_results:[]
        }
    },
    methods:{
        fetch_GET_search_results(){ // this would fetch an array of userObjs from 'user_database' that meet the search criteria

        }
    }
}
</script>
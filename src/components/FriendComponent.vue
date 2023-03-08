<template>
    <div class="friend-div">
        <h3>{{ friend_obj.username }} ({{ friend_obj.first_name }} {{ friend_obj.last_name }})</h3>
        
    </div>
</template>

<style scoped>
.friend-div{padding: 2px 10px;margin: 20px; background-color: blue; color: white;}
</style>

<script setup>
defineProps({ 
    // real prop for this component
    friend_id: String, 
    // below are props I needed to pass to create a fake fetch system
    user_database:Array
}); 
</script>

<script>
export default {
    data(){
        return{
            friend_obj:{}
        }
    },
    methods:{
        fetch_GET_friend_info(){ // fetch the userObj for the friend ID (we received as a prop) from the 'user_database'
            this.friend_obj = this.user_database.filter((user)=>user._id==this.friend_id)[0]
        }
    },
    created(){
        this.fetch_GET_friend_info();
    }
}
</script>
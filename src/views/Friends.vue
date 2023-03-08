<template>
    <div class="friends-div">
        <h1>Friend List</h1>
        <Friend v-for="friend in friend_list" :friend_id="friend" :user_database="user_database" />
    </div>
</template>

<style scoped>
.friends-div{padding: 10px;}
</style>

<script setup>
import Friend from '../components/FriendComponent.vue'

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
            friend_list:[]
        }
    },
    methods:{
        fetch_GET_friend_list(){ // fetch the friend_list_array property of userObj we are currently logged in (that array has the user IDs of the friends of currently logged user)
            this.friend_list = this.user_database.filter((user)=>user._id==this.user_id)[0].friend_list_array
        }
    },
    created(){
        this.fetch_GET_friend_list();
    }
}
</script>
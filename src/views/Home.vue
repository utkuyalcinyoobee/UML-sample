<template>
    <div class='home-div'>
        <h1>HOME</h1>
        
        <h2>Logged as {{ current_user_obj.username }}</h2>
        <h3>Welcome {{ current_user_obj.first_name }} {{ current_user_obj.last_name }}</h3>

        <router-link to="/search-user" class="search-friends-btn"><h2>Search for Friends</h2></router-link>

        <div class="friend-requests" v-if="incoming_friend_requests.length > 0">
            <h5>YOU HAVE NEW FRIEND REQUESTS</h5>
            <FriendRequest v-for="request in incoming_friend_requests" :request_obj="request" :user_database="user_database" :friend_requests='friend_requests' />
        </div>
    
    </div>
</template>

<style scoped>
.home-div{padding:20px;}
.friend-requests{background-color:aqua;text-align:center;padding:1px;}
.search-friends-btn{color: blue;}
</style>

<script setup>
import FriendRequest from '../components/Request.vue'

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
            current_user_obj:{},
            incoming_friend_requests:[]
        }
    },
    methods:{
        fetch_GET_current_user(){ // fetch userObj from 'user_database' based on the user ID we are currently logged as
            this.current_user_obj = this.user_database.filter((user)=>user._id==this.user_id)[0];
        },
        fetch_GET_incoming_friend_requests(){ // fetch an array of friend request objects from 'friend_requests_database' where currently logged user ID is the recipient
            this.incoming_friend_requests = this.friend_requests.filter((request)=>request.id_of_user_receiving_request==this.user_id && request.ignored==false)
        }
    },
    created(){
        this.fetch_GET_current_user();
        this.fetch_GET_incoming_friend_requests();
    }
}
</script>
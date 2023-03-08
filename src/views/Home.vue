<template>
    <div class='home-div'>
        <h1>HOME</h1>
        
        <h2>Logged as {{ current_user_obj.username }}</h2>
        <h3>Welcome {{ current_user_obj.first_name }} {{ current_user_obj.last_name }}</h3>

        <div class="friend-requests" v-if="incoming_friend_requests.length > 0">
            <h5>YOU HAVE NEW FRIEND REQUESTS</h5>
            <FriendRequest v-for="request in incoming_friend_requests" :request_obj="request" :user_database="user_database" :friend_requests='friend_requests' />
        </div>
    

        <h5>Placeholder for YOU HAVE NEW MESSAGES</h5>
    </div>
</template>

<style scoped>
.home-div{padding:20px;}
.friend-requests{background-color:aqua;text-align:center;padding:1px;}
</style>

<script setup>
import FriendRequest from '../components/Request.vue'

defineProps({ 
    // real prop for this component
    user_id: String, 
    // below are props I needed to pass to create a fake fetch system
    user_database:Array,
    friend_requests:Array,
    chat_messages:Array
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
        fetch_GET_current_user(){
            this.current_user_obj = this.user_database.filter((user)=>user._id==this.user_id)[0];
        },
        fetch_GET_incoming_friend_requests(){
            this.incoming_friend_requests = this.friend_requests.filter((request)=>request.id_of_user_receiving_request==this.user_id && request.ignored==false)
        }
    },
    created(){
        this.fetch_GET_current_user();
        this.fetch_GET_incoming_friend_requests();
    }
}
</script>
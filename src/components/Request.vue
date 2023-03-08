<template>
    <div class='request-div'>
        <h2>User {{ request_sender_user_obj.username }} wants to add you as friend!</h2>
        <h3>{{ request_sender_user_obj.first_name }} {{ request_sender_user_obj.last_name }}</h3>
        <p>{{ request_obj.request_msg }}</p>  
        <div class='flex-div'>
            <span @click='accept_request' class='btn accept-btn' :class='{accepted:accepted}'>Accept<span v-if='accepted'>ed</span></span>
            <span @click='ignore_request' class='btn ignore-btn' :class='{ignored:request_obj.ignored}'>Ignore<span v-if='request_obj.ignored'>d</span></span>
        </div>
    </div>
</template>

<style scoped>
.request-div{background-color:limegreen; border-radius:10px;padding:10px;margin:15px;}
.flex-div{display:flex;gap:10px;justify-content:flex-end;}
.btn{padding:5px;border-radius:10px;}
.accept-btn{background-color:green;color:white;}
.ignore-btn{background-color:gray;}
.ignored{background-color: red !important;}
.accepted{background-color:blue !important;}
</style>

<script setup>
defineProps({ 
    // real prop for this component
    request_obj: Object,
    // below are props I needed to pass to create a fake fetch system
    user_database:Array,
    friend_requests:Array,
}); 
</script>

<script>
export default {
    data(){
        return{
            request_sender_user_obj:{},
            accepted:false
        }
    },
    methods:{
        accept_request(){
            this.fetch_PUT_update_user_friendlist_for_user(this.request_obj.id_of_user_receiving_request,this.request_obj.id_of_user_sending_request);
            this.fetch_PUT_update_user_friendlist_for_user(this.request_obj.id_of_user_sending_request,this.request_obj.id_of_user_receiving_request);
            this.fetch_DELETE_delete_accepted_request();
        },
        ignore_request(){
            this.fetch_PUT_update_request_as_ignored();
        },
        fetch_PUT_update_user_friendlist_for_user(userID,friendID){ // update userOBJ in 'user_database' for the user with userID, and the update is adding the friendID into its .friend_list_array
            this.user_database.filter((user)=>user._id==userID)[0].friend_list_array.push(friendID);
        },
        fetch_PUT_update_request_as_ignored(){ // update the friend request object (with this request id) in 'friend_requests_database', and the update is changing its .ignored property to true
            this.request_obj.ignored = !this.request_obj.ignored;
        },
        fetch_DELETE_delete_accepted_request(){ // delete the friend request object (with this request id) from the 'friend_requests_database'
            let request_index = this.friend_requests.indexOf(this.request_obj);
            this.friend_requests.splice(request_index,1);
            this.accepted=true;
        },
        fetch_GET_sender_info(){ // fetch the userObj (for the userID we learned from the friend request object) from the 'user_database'
          this.request_sender_user_obj = this.user_database.filter((user)=>user._id==this.request_obj.id_of_user_sending_request)[0]
        }
    },
    created(){
        this.fetch_GET_sender_info();
    }
}
</script>
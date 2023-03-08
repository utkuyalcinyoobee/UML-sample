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
        fetch_PUT_update_user_friendlist_for_user(userID,friendID){

        },
        fetch_PUT_update_request_as_ignored(){
            this.request_obj.ignored = !this.request_obj.ignored;
        },
        fetch_DELETE_delete_accepted_request(){
            let request_index = this.friend_requests.indexOf(this.request_obj);
            this.friend_requests.splice(request_index,1);
            this.accepted=true;
        }
    },
    created(){
        this.request_sender_user_obj = this.user_database.filter((user)=>user._id==this.request_obj.id_of_user_sending_request)[0]
    }
}
</script>
<template>
    <div class="chat-menu-div">

        
    </div>
</template>

<style scoped>
.chat-menu-div{padding: 10px;}
</style>

<script setup>
defineProps({ 
    // real prop for this component
    user_id: String, 
    recipient_id:String,
    // below are props I needed to pass to create a fake fetch system
    user_database:Array,
    chat_messages:Array,
}); 
</script>

<script>
export default {
    data(){
        return{
            chat_message:''
        }
    },
    methods:{
        fetch_POST_send_message(){
            
        }
    },
    created(){
        this.fetch_POST_send_message();
    }
}
</script>
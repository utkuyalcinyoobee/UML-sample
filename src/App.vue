<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
<div class="main-container">
  <Header />

  <router-view :user_id="current_user_id" :user_database="users_database" :friend_requests="friend_requests_database" :chat_messages="chat_messages_database"></router-view>

  <Footer />
</div>
</template>

<style>
body{margin: 0;}
.main-container{display: grid; grid-template-rows: auto 1fr auto; min-height: 100vh;}
</style>


<script>
export default {
  data(){
    return{
      current_user_id:'user002',

      // USER DATABASE
      users_database:[
        {
          _id:'user001',
          username:'crazyhippo97',
          first_name:'Johnny',
          last_name:'Smith',
          friend_list_array:['user003']
        },
        {
          _id:'user002',
          username:'strawbarry4141',
          first_name:'Barry',
          last_name:'Parker',
          friend_list_array:[]
        },
        {
          _id:'user003',
          username:'teamothy34',
          first_name:'Timothy',
          last_name:'Peppers',
          friend_list_array:['user001']
        },
        {
          _id:'user004',
          username:'jackTheRipped',
          first_name:'Jack',
          last_name:'Brown',
          friend_list_array:[]
        }
      ],

      // FRIEND REQUEST DATABASE
      friend_requests_database:[
        {
          _id:'req001',
          id_of_user_sending_request:'user001',
          id_of_user_receiving_request:'user002',
          request_msg:'Yo its me Johnny',
          ignored:false
        }
      ],

      // CHAT MESSAGE DATABASE
      chat_messages_database:[
        {
          _id:'msg001',
          response_to_other_chat:false,
          id_of_message_responded:'',
          user_id:'user003',
          message_content:'u up for a gig next week?'
        },
        {
          _id:'msg002',
          response_to_other_chat:true,
          id_of_message_responded:'001',
          user_id:'user001',
          message_content:'nah, too busy'
        },
        {
          _id:'msg003',
          response_to_other_chat:true,
          id_of_message_responded:'001',
          user_id:'user003',
          message_content:'*sad face*'
        }
      ]
    } // end of data return
  }, // end of data()
   
}
</script>
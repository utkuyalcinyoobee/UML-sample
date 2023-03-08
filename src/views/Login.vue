<template>
    <div class="login-div">
        <h1>LOGIN PAGE</h1>
        <router-link to="sign-up"><h3>Sign up as New User</h3></router-link>
        <h3>or login as</h3>
        <div class="flex-div">
            <h3 @click="fetch_GET_log_as_user(user._id)" class="user" v-for="user in user_database">{{ user.username }}({{ user._id }})</h3>
        </div>
    </div>
</template>

<style scoped>
.login-div{padding: 10px;text-align: center;}
.flex-div{display: flex;gap: 10px;flex-wrap: wrap;}
.user{padding: 5px;background-color: blue;border-radius: 10px;color: white;}
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
    methods:{
        fetch_GET_log_as_user(userID){ // fetch the userObj's ID from 'user_database' with the account we logged
            this.current_user._id = userID;
            this.$router.push('/');
        }
    }
}
</script>
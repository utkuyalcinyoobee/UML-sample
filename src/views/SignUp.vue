<template>
    <div class="sign-up-div">
        <h1>SIGN UP</h1>
        <div class="input-div">
            <label>Username: </label>
            <input type="text" v-model="username_input" placeholder="username">
        </div>
        <div class="input-div">
            <label>First Name: </label>
            <input type="text" v-model="first_name_input" placeholder="first name">
        </div>
        <div class="input-div">
            <label>Last Name: </label>
            <input type="text" v-model="last_name_input" placeholder="last name">
        </div>
        <h3 @click="fetch_POST_sign_up" class="sign-up-btn" :class="{not_clickable:!validated}">sign up</h3>
    </div>
</template>

<style scoped>
.sign-up-div{padding: 10px;text-align: center;}
.input-div{display: flex;justify-content: space-between;width: 280px;align-items: center;margin: 10px auto;}
.sign-up-btn{padding: 4px; border-radius: 10px; width:fit-content;margin: auto;color: white;background-color: blue;}
.not_clickable{pointer-events: none;filter: grayscale(1);}
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
            username_input:'',
            first_name_input:'',
            last_name_input:'',
            new_user:{}
        }
    },
    methods:{
        fetch_POST_sign_up(){
            this.new_user._id = 'user'+(this.user_database.length+1);
            this.new_user.username=this.username_input;
            this.new_user.first_name=this.first_name_input;
            this.new_user.last_name=this.last_name_input;
            this.user_database.push(this.new_user);
            this.current_user._id=this.new_user._id;
            this.$router.push('/');
        }
    },
    computed:{
        validated(){
            return this.username_input.length&&this.first_name_input.length&&this.last_name_input.length
        }
    },
    created(){
        this.new_user={_id:'',username:'',first_name:'',last_name:'',friend_list_array:[]}
    }
}
</script>
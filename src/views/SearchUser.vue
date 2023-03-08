<template>
    <div>
        SEARCH USER
    </div>
</template>

<style scoped>

</style>

<script setup>
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
    
}
</script>
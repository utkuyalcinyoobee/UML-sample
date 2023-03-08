<template>
    <div>
        <div class="header">
            <router-link to="/" class="link"><h2>FAKEBOOK</h2></router-link>
            <router-link to="/login"><span class="login-btn">Login</span></router-link>
        </div>
        <div class="links-flex">
                <router-link to="/view-requests" class="link">Friends</router-link>
                <router-link to="/view-messages" class="link">Chat</router-link>
        </div>
    </div>
</template>

<style scoped>
.header{background-color: blue;color: blue;font-weight: 900;padding: 10px;display: flex; justify-content: space-between;align-items: center;}
.header h2{margin: 0;}
.login-btn{background-color: white; color: darkgreen;padding: 4px;border-radius: 10px;}
.link{text-decoration: none;color:inherit; background-color: white;border-radius: 5px;padding: 5px;}
.links-flex{display: flex; gap: 10px;padding: 5px;background-color: lightblue;padding: 5px 10px;}
</style>
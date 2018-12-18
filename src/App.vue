<template>
    <div>
        <h1>1111</h1>

        <mt-button type="danger" size="large" @click="show">default</mt-button>

        <router-link to="/account">Account</router-link>
        <router-link to="/goodlist">GoodList</router-link>
        <router-view></router-view>
    </div>
    
</template>
<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {};
    },
    methods: {
        show() {
            Toast("1提示信息")
        }
    }
}
</script>

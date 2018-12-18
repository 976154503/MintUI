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
        return {
            toastInstanse : null
        };
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.show();
            setTimeout(() => {
                this.toastInstanse.close()
            },3000)
        },
        show() {
            this.toastInstanse = Toast({
                message: '操作成功',
                duration: -1,//如果是-1，则弹出之后不消失
                position: 'top',
                iconClass: 'oi oi-aperture'
            })
        }
    }
}
</script>

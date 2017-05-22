<template>
    <div class="tmpl">
    
        <p>
    
            用户名: <input type="text" placeholder="请输入用户名" ref="uname">
    
        </p>
    
        <p>
    
            密码： <input type="password" placeholder="请输入密码" ref="upwd">
    
        </p>
    
        <p>
    
            <mt-button type="danger" size="large" @click="login">登录</mt-button>
    
        </p>
       <mt-button type="primary" size="large" @click="regist">没有账号?点击注册</mt-button>
    </div>
</template>
<style scoped>
    .tmpl {
    
        padding: 5px;
    
    }
</style>
<script>
    import {
    
        Toast
    
    } from 'mint-ui';
    
    import {
    
        setUserId
    
    } from '../../kits/loginHelper.js'
    
    import common from '../../kits/common.js';
    
    export default {
    
        data() {
    
            return {
    
    
    
            }
    
        },
    
        methods: {
    
            login() {
    
                //1.0 获取页面上的输入值
    
                let username = this.$refs.uname.value;
    
                let upwd = this.$refs.upwd.value;
    
                let url = common.apihost + '/api/user/CheckUser';
                this.$http.post(url, {
    
                    username: username,
    
                    password: upwd
    
                }, {
    
                    emulateJSON: true
    
                }).then(function(res) {
    
                    console.log(res);
    
                    console.log(res.data.length);
    
                    if (res.data.length == 0) {
    
    
                            // console.log("gaomao?");
                        this.$refs.uname.value = '';
    
                        this.$refs.upwd.value = '';
    
                        Toast('登录失败。检查用户和密码是否输入正确');
    
                    } else {
    
                        console.log(res)
    
                        Toast('登录成功');
    
                        // _this.msg = res.data[0].username+"登录成功啦";
    
                        localStorage.setItem('ms_username', username);
    
    
    
                        this.$router.push({
    
                            name: 'userinfo'
    
                        });
    
                    }
    
    
    
    
    
                    //setTimeout(function(){
    
                    // _this.arrList=res.data;
    
                    //},1000);
    
                }).catch(function(err) {
    
                    console.log(err);
    
                });
    
    
            },

             regist() {
                
                        this.$router.push({
    
                            name: 'regist'
    
                        });
             }
    
        }
    
    }
</script>

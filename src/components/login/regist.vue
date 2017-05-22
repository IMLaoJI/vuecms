<template>
    <div class="tmpl">
    
        <p>
    
            用户名: <input type="text" placeholder="请输入用户名" ref="uname">
    
        </p>
    
        <p>
    
            密码： <input type="password" placeholder="请输入密码" ref="upwd">
    
        </p>
         <p>
            确认密码： <input type="password" placeholder="请输入密码" ref="newupwd">
    
        </p>
    
        <p>
            <mt-button type="primary" size="large" @click="regist">注册</mt-button>
        </p>
      
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
             regist() {
    
                //1.0 获取页面上的输入值
    
                let username = this.$refs.uname.value;
    
                let upwd = this.$refs.upwd.value;
                 let newupwd = this.$refs.newupwd.value;
                 if (upwd!=newupwd) {
                     Toast('两次输入密码不同，请重新输入');
                        this.$refs.upwd.value = '';
                          this.$refs.newupwd.value = '';
                     return
                 }
    
                let url = common.apihost + '/api/user/RegUser';
                this.$http.post(url, {
                    username: username,
                    password: upwd
                }, {
                    emulateJSON: true
                }).then(function(res) {
                    if (res.data.length == 0) {
                        this.$refs.uname.value = '';
    
                        this.$refs.upwd.value = '';
    
                        Toast('登录失败。检查用户和密码是否输入正确');
    
                    } else {
                        Toast('登录成功');
                        localStorage.setItem('ms_username', username);
                        this.$router.push({
    
                            name: 'userinfo'
    
                        });
    
                    }
                }).catch(function(err) {
    
                    console.log(err);
    
                });
            }
    
        }
    
    }
</script>

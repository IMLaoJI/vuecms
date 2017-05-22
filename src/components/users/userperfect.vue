<template>
<div class="tmpl">
<mt-field label="昵称" placeholder="请输入昵称" v-model="nickname" ></mt-field>
<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
<!--<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>-->
<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
<mt-field label="个人网站" placeholder="请输入网址" type="url" v-model="website"></mt-field>

<mt-field label="生日" placeholder="请输入生日" type="date" v-model="birthday"></mt-field>

<mt-field label="自我介绍" placeholder="自我介绍"  type="textarea" rows="4" v-model="jieshao"></mt-field>
<mt-button type="primary" class="newbtn" @click.native="handleClick">修改密码</mt-button>
<mt-button type="primary" class="newbtn2" @click.native="handleClick2">确定</mt-button>

</div>
</template>

<script>
    import {
        Toast
    } from 'mint-ui';
import common from '../../kits/common.js';
import { Field } from 'mint-ui';
import { MessageBox } from 'mint-ui';
 export default{
   data(){
		return {
      uname:'',
      nickname:"",
      email:"",
      password:'',
      phone:'',
      website:'',
      birthday:'',
      jieshao:''
		}
	},
   created(){
		this.uname = localStorage.getItem('ms_username');
    if (this.uname==null) {
        this.$router.push({name:'login'});
    }
	},
    methods: {
    handleClick: function() {
      MessageBox.prompt('请输入新密码').then(({ value, action }) => {
        //  console.log(value);
        //  console.log(action);
        //向后台发送更新密码请求
        this.updatepwd(this.uname,value);
         
    });
  },
  updatepwd:function updatepwd(uname,newpwd) {
      let url = common.apihost + '/api/user/UpdatePwd';
                this.$http.post(url, {
                    uname: uname,
                    newpassword: newpwd,
                }, {
                    emulateJSON: true
                }).then(function(res) {
                  console.log(res.data.affectedRows);
                    if (res.data.affectedRows !=1) {
                      
                        Toast('修改失败');
                    } else {
                      console.log("dsadsa");
                        Toast('修改成功');
                    }
                }).catch(function(err) {
                });
    
  },
   handleClick2: function() {
     console.log('====================================');
     console.log(this.jieshao);
          console.log(this.nickname);
     console.log('====================================');
      let url = common.apihost + '/api/user/UpdateUser';
                this.$http.post(url, {
                    uname:this.uname,
                    nickname: this.nickname,
                    email: this.email,
                    phone:this.phone,
                    website:this.website,
                    birthday:this.birthday,
                    introduction:this.jieshao
                }, {
                    emulateJSON: true
                }).then(function(res) {
                  console.log(res.data.affectedRows);
                    if (res.data.affectedRows !=1) {
                        Toast('修改失败');
                    } else {
                      console.log("dsds");
                        Toast('修改成功');
                        this.$router.push({name:'userinfo',params:{uname:this.username}});
                    }
                }).catch(function(err) {
                });
      

    }
  }
 }
</script>

<style scoped>
.newbtn{
  margin-left: 10px;
}
.newbtn2{
  display: block;
  margin-left: 10px;
  margin-top: 10px; 
}
  .photo{
    
    width: 80px;
    height: auto;
    margin: 30px auto;
    padding: 30px 0;
   
  }
  .photo  img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
  .name{
    width: 100px;
    margin: 0 auto 30px auto;
    padding-bottom: 2px;
    color: #999;
    font-size: 20px;
    text-align: center;
    border-bottom: 1px solid #4bb6ae;
  }
  ul{
    width: 150px;
    margin: 0 auto;
    font-size: 18px;
    text-align: center;
    border-top: 1px solid #b6b6b6;
   
  }
  ul  li{
      padding: 10px;
      border-bottom: 1px solid #b6b6b6;
     
     
    }
     ul  li p{
        color: #999;
      }
       ul  li a{
        color: #2482ab;
      }
  .btn{
    margin: 50px auto 0 auto;
    width: 100px;
    height: 40px;
    border: 1px solid #999;
    border-radius: 10px;
    color: #b22323;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
  }
</style>

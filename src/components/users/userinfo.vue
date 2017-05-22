<template>
  <div class="tmpl">
    <div class="photo">
      <img src="https://avatars2.githubusercontent.com/u/16029951?v=3&s=460" alt="">
    </div>
    
    <ul>
      用户名：{{uname}}
    </ul>
      <div class="btn">
 <router-link to="/userperfect">
      <p>完善个人信息</p>
  </router-link>
    </div>
    <div class="btn" @click="handle">
      <p>登出</p>
    </div>
  </div>
</template>

<script>
 export default{
   data(){
		return {
		uname:""
		}
	},
   created(){
     if (this.$route.params.uname!=null) {
       this.uname = this.$route.params.uname
       localStorage.setItem('ms_username',this.uname)
     }else{
		  this.uname = localStorage.getItem('ms_username');
     }
	},
    methods: {
    handleClick: function() {
      this.$toast('Hello world!')
    },
    handle:function (params) {
      localStorage.removeItem('ms_username');
      this.$toast('您已安全退出');
       this.$router.push({
                            name: 'home'
                        });
    }
  }
 }
</script>

<style scoped>
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

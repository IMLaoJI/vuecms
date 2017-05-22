<template>
  <div class="sidebar-box" :class="{'show-sidebar':showSidebar}">
    <div class="swiper-slide">



      <!--侧边栏头部-->
      <div class="sidebar-header"  @click="hiddenBar">
      <router-link :to="{name: 'author', params: { id: '888'}}">
       <div class="user">
          <img src="https://avatars2.githubusercontent.com/u/16029951?v=3&s=460" alt="">
          <p>{{uname}}</p>
        </div>
      </router-link>

       
        <div class="function">

          <div class="function-sub">
            <i class="iconfont">&#xe614</i>
            <p>我的收藏</p>
          </div>

          <div class="function-sub">
            <i class="iconfont">&#xe60f</i>
            <p>离线下载</p>
          </div>

        </div>
      </div>
  


    </div>
  </div>
</template>

<script>
  /*eslint-disable no-new*/
  // import ajax from '../ajax'
  export default{
    props: ['showSidebar', 'tip'],
    data () {
      return {
        list: [],
        uname:'未登录'
      }
    },
    mounted () {
      this.getList()
    },
    methods: {
      getList () {
          const jsonBird = 'https://bird.ioliu.cn/v1/?url=';
          const zhihu = 'http://news-at.zhihu.com';
          var url = jsonBird+zhihu;
        let _this = this
        ajax({
//          url: 'http://news-at.zhihu.com/api/4/themes',
          url:`${url}/api/4/themes`,
          method: 'GET',
          callback: function (res) {
            _this.list = res.others
            // console.log(_this.list);
            
//            console.log(_this.list)
          }
        })
      },
      hiddenBar () {
        window.document.body.className = ''
        window.document.querySelector('html').className = ''
//        document.body.style.overflow = 'initial'
//        window.document.querySelector('html').style.overflow = 'initial'
    
        this.$emit("hide-side-bar")
        this.$emit("changetip")
     
      }
    }
  }
</script>

<style scoped >
  .iconfont {
    font-family:"iconfont";
    font-size: 14px;
    font-style:normal;
    color: #ffffff;
  }

  .show-sidebar{
    transform: translateX(290px);
  }
  
  .sidebar-box{
    position: fixed;
    transform: translateZ(0);
    height: 100%;
    overflow: auto;
    width: 290px;
    left: -290px;
    z-index: 99;
    top: 0;
    bottom: 0;
    transition: all .3s ease;
  }

  .sidebar-box .show-sidebar{
     transform: translateX(290px);
  }
  .sidebar-box .swiper-slide{
     font-size: 15px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
 
      .sidebar-box  .sidebar-header {
         padding: 15px;
      background: #00A2EA;
      }

      .sidebar-box  .sidebar-header .user{
         display: flex;
        flex-direction: row;
      }
      .sidebar-box  .sidebar-header .user img{
         width: 30px;
          height: 30px;
          border-radius: 50%;
      }
       .sidebar-box  .sidebar-header .user p{
         margin-left: 20px;
          line-height: 30px;
          flex: 1;
          font-size: 18px;
          font-weight: 300;
          color: #ffffff;
       }

    .sidebar-box .function{
      margin-top: 25px;
      display: flex;
      flex-direction: row;
      color: #ffffff;
     
    }
    .sidebar-box .function   .function-sub{
        padding-left: 52px;
        flex: 1;
        font-size: 13px;
        font-weight: 300;
        position: relative;
    }
    .sidebar-box .function   .function-sub i{
       position: absolute;
          top: 0;
          left: 20px;
    }
  

 
</style>


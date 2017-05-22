<template>
	<div class="app">
	<!-- 整个系统的头部 -->
	<mt-header fixed title="咨询类综合网站"><mt-button @click="changeStatus" v-if="isShow2" icon="more" slot="left" ></mt-button></mt-header>
	 	<!--返回按钮-->
		<div class="back" v-if="isShow">
			<a @click="goback">返回</a>
		</div>



		<!--<side-bar :show-sidebar="showSidebar"   @hide-side-bar="hideSideBar" > </side-bar>-->

    <!--侧边栏遮罩层-->
    <!--<div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar"></div>-->


	<!-- 路由占位，将来所有的组件都是替换这个位置来实现页面的跳转
	这也是一个单页系统的实现 -->
	<router-view></router-view>

	<!-- 整个系统的底部 -->
	<nav  class="mui-bar mui-bar-tab">
		<router-link class="mui-tab-item" to="/Home">
			<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
		</router-link>

		<router-link class="mui-tab-item" to="/member">
		<span class="mui-icon mui-icon-contact">
				
			</span>
			<span class="mui-tab-label">畅聊</span>
		</router-link>

		<router-link class="mui-tab-item" to="/shopcar">
		<span class="mui-icon mui-icon-home">
			<span id="badge" class="mui-badge">0</span>
		</span>
			<span class="mui-tab-label">购物车</span>
		</router-link>

		<router-link class="mui-tab-item" to="/search">
			<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
		</router-link>
	</nav>
	</div>
</template>

<script>
import sideBar from './components/Home/sidebar.vue'
	//6.0.2 注册commonvue.js(用来接收goodsinfo.vue中通过vueobj.$emit()发送过来的数据 )
	import {vueobj} from './kits/commonvue.js';
	//6.o.3 注册接收事件
	vueobj.$on('shopdata',function(data){
		//由于vueobj和export default是不同的vue对象，所以在此处必须通过原生js来操作dom实现购物车数量的增加
		let badge = document.getElementById('badge');
		let count = badge.innerText - 0; // 获取原始值
		count+=data;  // 在原始值上增加新数据

		// 将新数据同步到dom中
		badge.innerText = count;
	});
	vueobj.$on('shopdata1',function(data){
		//由于vueobj和export default是不同的vue对象，所以在此处必须通过原生js来操作dom实现购物车数量的增加
		let badge = document.getElementById('badge');
		let count = badge.innerText - 0; // 获取原始值
		count-=data;  // 在原始值上增加新数据
		if (count<0) {
			count=0;
		}
		// 将新数据同步到dom中
		badge.innerText = count;
	});

	export default{

		components: {
    sideBar,
	
    
  },

		data(){
			return {
				isShow:false, //这个就是用来控制返回按钮显示和隐藏的,
				xianshi:0,
				isShow2:true,
				 showSidebar: false,
			}
		},
//		created(){
//  			//表示当前app.vue组件创建完毕以后被触发
//			this.isShow = false;
//		},
		watch:{
			//监控当前的路由对象 $route ，如果url中的路由规则发生了改变，那么就会触发这个方法
			'$route':function(newval,oldval){
				if(newval.path.toLowerCase() == '/home'){
					//表示当前页面是首页应该要隐藏返回按钮
					this.isShow = false;
					this.isShow2 = true
				}else if (newval.path.toLowerCase()=='/userinfo') {
					this.isShow2 = false;
					this.isShow = false;
				}else{
					//非首页要显示返回按钮
					this.isShow = true;
				}
			}
		},
		methods:{
			goback(){
				this.$router.go(-1); //返回上一个页面
			},
			changeStatus(){
				// alert("dasd");
            //    mui('.mui-off-canvas-wrap').offCanvas('show');
			if (localStorage.getItem('ms_username')!=null) {
				this.$router.push({name:'userinfo'});
			}else{
				this.$router.push({name:'login'});
			}
		
			},
			  hideSideBar(){
               this.showSidebar=!this.showSidebar;;
            },
		}
	}

</script>

<style scoped>
	.back{
		position: fixed;
		top:10px;
		left:10px;
		z-index: 50;
	}
	.back a{
		font-size: 16px;
		color: #fff;
		font-weight:bold;
	}
</style>
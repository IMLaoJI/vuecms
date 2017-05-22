<template>
	<div class="tmpl">
		<div class="mui-card">
	<!--页眉，放置标题-->
			<div class="mui-card-header mui-card-media">
				<img src="../../../statics/images/touxiang.jpg" />
				<div class="mui-media-body">
					小M
					<p>发表于 2016-06-30 15:30</p>
				</div>
			</div>
			<!--内容区-->
			<img src="https://images.weserv.nl/?url=pic2.zhimg.com/v2-12bc4f4f4dc4ce18e83451dbafc1c311.jpg" alt="" width="100%">
			<!--页脚，放置补充信息或支持的操作-->
			<div class="mui-card-footer">
				<a class="mui-card-link">Like</a>
				<a class="mui-card-link">Comment</a>
				<a class="mui-card-link">Read more</a>
			</div>
</div>
	
	</div>
</template>

<script>
export default{
	data(){
		return {
			
		}
	}
}
	
</script>

<style>
	.mui-card-footer .mui-card-link, .mui-card-header .mui-card-link{
		position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    height: 44px;
    margin-top: -10px;
    margin-bottom: -10px;
    line-height: 44px;
    text-decoration: none;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
	}
</style>
<template>
	<main>
		<header class="header">
			<div class="l userLogo">
			</div>
			<div class="inf">
				<p class="userName">
					<router-link to="/loginRegister" tag="span">登录/注册</router-link>
				</p>
				<p class="phoneNum">
					<span class="iconfont">&#xe6a6;</span><span class="userPhone">登录后享受更多特权</span>
				</p>
			</div>
			<span class="iconfont arrows">&#xe600;</span>
		</header>
		<section class="cont">
			<div class="count">
				<p class="l lunckBag">
					<span class="iconfont">&#xe623;</span>
					<span class="text">红包</span>
				</p>
				<p class="r gold">
					<span class="iconfont">&#xe616;</span>
					<span class="text">金币</span>
				</p>
			</div>
			
			<ul>
				<li class="address sky">
					<span class="iconfont">&#xe668;</span>我的地址
					<span class="iconfont arrows">&#xe600;</span>
				</li>
				<li class="money bLine">
					<span class="iconfont">&#xe680;</span>金币商城
					<span class="iconfont arrows">&#xe600;</span>
				</li>
				<li class="share">
					<span class="iconfont">&#xe7b6;</span>分享拿20元现金
					<span class="iconfont arrows">&#xe600;</span>
				</li>
				<li class="sky bLine">
					<span class="iconfont">&#xe62d;</span>我的客服
					<span class="iconfont arrows">&#xe600;</span>
				</li>
				<li class="sky bLine">
					<span class="iconfont elm">&#xe722;</span>下载饿了么APP
					<span class="iconfont arrows">&#xe600;</span>
				</li>
				<li class="sky">
					<span class="iconfont">&#xe791;</span>规则中心
					<span class="iconfont arrows">&#xe600;</span>
				</li>
			</ul>
			<p class="police">隐私政策</p>
		</section>
	</main>
</template>

<script>
export default{
	mounted(){
		if (this.$route.params.data) {
			this.$store.commit('changeUserPhone',this.$route.params.data);	
		}
		if (this.$store.state.userPhone!='') {
			document.getElementsByClassName('userName')[0].innerHTML='6e508295326';
			document.getElementsByClassName('userPhone')[0].innerHTML=this.$store.state.userPhone;
		}	
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
header {
	width: calc(100% - 0.32rem);
	padding: 25px 0.16rem;
	overflow: hidden;
	background-color: $blue;
	position: relative;
}
.userLogo {
	border-radius: 50%;
	@include widthHeight(60px,60px);
	border-radius: 60px;
	background-image: url(../../data/img/mine/logo.png);
	background-size: 60px;
}
.inf {
	display: inline-block;
	width: 55%;
	padding: 8px 0 0 0.2rem;
	overflow: hidden;
	color: white;
	.userName {
		font-size: 0.2rem;
		font-weight: bold;
		padding-bottom: .08rem;
	}
	.phoneNum span,.phoneNum {
		color: white;
		font-size: 0.12rem;
	}
}
header>span {
	color: white;
	@include upDownCenter;
	right: 0.2rem;
}
.count {
	overflow: hidden;
	border-bottom: 10px solid #F5F5F5;
	p {
		width: 50%;
		@include box-sizing(18px,0,18px,0);
		text-align: center;
		overflow: hidden;
		span {
			display: block;
			font-size: 0.12rem;
		}
		.iconfont {
			font-size: 0.27rem;
			border-radius: 0.27rem
		}
		.text {
			font-size: 0.12rem;
			margin-top: 5px;
			color: $fontTColor;
			font-weight: 600;
		}
		
	}
	.lunckBag .iconfont {
		color: #FF5F3E;
	}
	.gold .iconfont {
		color: white;
		margin: 0 calc(50% - 0.15rem);
		background-color: #6AC20B;
		position: relative;
    	left: -5px;
	}
}
.cont ul {
	overflow: hidden;
}
.cont li {
	@include box-sizing(14px,0.16rem,14px,0.16rem);
	font-size: 0.14rem;
	color: $fontTColor;
}
.cont span {
	margin-right: 0.1rem;
	display: inline-block;
	font-size: 0.18rem;
}
.cont .arrows {
	float: right;
	color: $fontBColor;
	font-size: 0.15rem;
	margin-right: 0px;
}
.sky span {
	color: $blue;	
}
.money span {
	color: rgb(148, 217, 74);
}
.share span {
	color: rgb(252, 123, 83);
}
.address, .share {
	border-bottom: 15px solid $bgColor;
}
.bLine {
	border-bottom: 1px solid $bgColor;
}
.cont .elm {
	background-color: $blue;
	color: white;
	border-radius: 2px;
	font-size: .16rem;
}
.police {
	width: 100%;
	text-align: center;
	font-size: .13rem;
	color: $blue;
	background-color: $bgColor;
	padding: 0.26rem 0 0.83rem 0;
	border: 1px solid $bgColor;
}
</style>


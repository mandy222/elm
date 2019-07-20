<template>
	<div>
		<header>
			<span class="iconfont" @click="back()">&#xe650;</span>
			<img src="../../data/img/store/store02.jpg" alt="">
		</header>
		<div class="inf">
			<h2>有爱水果(人民中路店)<span class="iconfont">&#xe604;</span></h2>
			<p class="details">评价4.6<span>月售75单</span>蜂鸟专送约34分钟</p>
			<p class="discount">
				<span class="discountB">
					<span class="price">￥7</span>
					<span class="condition">
						<span class="iconfont">&#xe602;</span>
						无门槛
					</span>
					<span class="get">领取</span>
				</span>	
			</p>
		</div>
		<p class="active">
			<span class="activInf otherWord">减</span>
			<span class="activInf otherActivity">新用户下单立减21元新用户下单新用户下单立减21元立减21元</span>
			<span class="iconfont r activInf">3个优惠&#xe611;</span>
		</p>
		<p class="active activInf board">公告：❤️免费提供切洗服务，如有需要请备注</p>

		<ul class="link">
			<li :class="{activeLink:show=='orderFood'}" @click="show='orderFood'">
				点餐
			</li>
			<li :class="{activeLink:show=='evaluate'}" @click="show='evaluate'">
				评价
			</li>
			<li :class="{activeLink:show=='merchant'}" @click="show='merchant'">
				商家
			</li>
		</ul>
		<p id="emty"></p>
		<keep-alive>
			<component :is="show"></component>
		</keep-alive>
	</div>
</template>

<script>
import orderFood from './orderFood'
import evaluate from './evaluate'
import merchant from './merchant'
export default{
	data(){
		return{
			show:'orderFood',
			top:0
		}
	},
	components:{
		orderFood,
		evaluate,
		merchant
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		handleScroll(){
			// 控制商家筛选栏吸顶
			var oTitle=document.getElementsByClassName('link')[0];
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop < this.top+25) {
				oTitle.style.position='relative';
				emty.style.display='none';
			}		
			if(scrollTop > oTitle.offsetTop-40){
				oTitle.style.position='fixed';
				oTitle.style.top='0px';
				emty.style.display='block';
			}
		}
	},
	mounted(){
		window.addEventListener('scroll', this.handleScroll);
		this.top=document.getElementsByClassName('link')[0].offsetTop;	
	},
	beforeDestroy(){
		window.removeEventListener('scroll', this.handleScroll);
	}
}
</script>


<style lang="scss" scoped>
@import '../assets/css/mixin';
header {
	@include box-sizing(5px,0.12rem,0,0.12rem);
	width: 100%;
	background-image: url(../../data/img/store/store01.jpg);
	background-size: 100%;
	span {
		color: white;
		font-size: 0.2rem;
	}
	img {
		width: 21%;
		display: block;
		position: relative;
		left: 50%;
		bottom: -15px;
		transform: translateX(-50%);
	}
}
.inf {
	text-align: center;
	margin-top: 30px;
	h2 {
		font-size: 0.2rem;
		.iconfont {
			color: black;
		}
	}
	.details {
		color: $fontMColor;
		font-size: 0.1rem;
		padding: 8px 0;
		span {
			color: $fontMColor;
			padding-top: 10px;
		}
	}
	.discount {
		margin: 5px 0 10px 0;
	}
	.discountB {
		background: #ffe578;
		padding: 5px 0.1rem;
		span {
			color: $fontTColor;
			font-size: .12rem;
		}
		.price {
			font-size: 0.14rem;
			color: $fontMColor;
			font-weight: 600;
			margin-right: 0.05rem;
		}
		.condition {
			margin-right: 0.1rem;
			position: relative;
		}
		.condition::after {
			position: absolute;
			content: '';
			display: block;
			width: 6px;
			height: 5px;
			background-color: white;
			top: -4px;
			right: -7px;
			border-radius: 0 0 6px 6px;
		}
		.condition::before {
			position: absolute;
			content: '';
			display: block;
			width: 6px;
			height: 5px;
			background-color: white;
			bottom: -4px;
			right: -7px;
			border-radius: 6px 6px 0 0;
		}
	}
}
.active {
	width: 100%;
	@include box-sizing(0,0.36rem,0,0.36rem)
}
.activInf {
	font-size: .12rem;
	color: $fontBColor;
}
.otherWord {
	color: white;
	background-color: #F07373FF;
	padding: 0 .02rem;
	margin-right: .03rem;
}
.otherActivity {
	display: inline-block;
	position: relative;
	top: 2px;
	width: 70%;
	@include ell;	
	color: $fontMColor;
}
.board {
	margin: 8px 0 10px 0;
}
.link {
	width: 100%;
	text-align: center;
	background-color: white;
	overflow: hidden;
	padding: 10px 0;
	z-index: 99;
	li {
		width: 33%;
		font-size: 0.15rem;
		font-weight: 400;
		color: $fontMColor;
		float: left;
		position: relative;
	}
	.activeLink::after {
		display: block;
		content: '';
		width: 32px;
		height: 2.2px;
		background-color: $blue;
		position: absolute;
		bottom: -8px;
		left: calc(50% - 16px);
	}
}
.link .activeLink {
	color: $fontTColor;
	font-weight: 600;
}
#emty {
	display: none;
	width: 100%;
	height: 18px;
}
</style>

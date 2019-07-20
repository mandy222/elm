<template>
	<div class="main">
		<header>
			<ul>
				<li @click="current='全部'"  :class="{active:current=='全部'}">全部</li>
				<li @click="current='面食粥点'" :class="{active:current=='面食粥点'}">面食粥点</li>
				<li @click="current='简餐便当'" :class="{active:current=='简餐便当'}">简餐便当</li>
				<li @click="current='汉堡披萨'" :class="{active:current=='汉堡披萨'}">汉堡披萨</li>
				<li @click="current='香锅冒菜'" :class="{active:current=='香锅冒菜'}">香锅冒菜</li>
				<li @click="current='小吃炸串'" :class="{active:current=='小吃炸串'}">小吃炸串</li>
				<li @click="current='地方菜系'" :class="{active:current=='地方菜系'}">地方菜系</li>
				<li @click="current='日韩料理'" :class="{active:current=='日韩料理'}">日韩料理</li>
				<li @click="current='轻食简餐'" :class="{active:current=='轻食简餐'}">轻食简餐</li>
			</ul>
			<span class="iconfont">&#xe61d;</span>
		</header>
		<section class="recommend">
			<ul class="chooseNav">
				<li>综合排序<span class="iconfont">&#xe611;</span>
				</li>
				<li>距离最近</li>
				<li>品质联盟</li>
				<li>筛选<span class="iconfont">&#xe67e;</span>
				</li>
			</ul>
			<ul class="store storeBox">
				<li v-for="(item,index) in list">
					<div class="hate" v-show="show==index" @click="show=-1">
						<p @click="hate()">不喜欢</p>
					</div>
					<span class="hateBtn r infR" @click="show=index">···</span>
					<router-link to="/store" tag="div">
						<img class="l" :src="item.src" alt="">
						<div class="storeInf l">
							<p>
								<span class="storeName l">
									{{item.title}}
								</span>		
							</p>
							<p class="grade">
								<img class="star" :src="item.star" alt="">
								<span class="inf">{{item.grade}} 月售{{item.sale}}单</span>
								<span class="birdsend inf">蜂鸟专送</span>
							</p>
							<p>
								<span class="inf price">{{item.send[0]}} | {{item.send[1]}}</span>
								<span class="infR dist inf">{{item.spend[0]}} | {{item.spend[1]}}</span>
							</p>
							<p class="labelBox">
								<span class="inf label">{{item.tag[0]}}</span>
								<span class="inf label">{{item.tag[1]}}</span>
							</p>
							<div>
								<span class="iconfont infR inf">{{item.activity[0]}}个活动&#xe611;</span>
								<p class="activityB">
									<span class="inf firstWord">首</span>
									<span class="inf activity">{{item.activity[1]}}</span>
								</p>
								<p class="activityB">
									<span class="inf otherWord">减</span>
									<span class="inf otherActivity">{{item.activity[2]}}</span>
								</p>
							</div>
						</div>
					</router-link>
				</li>	
			</ul>
			
		</section>
		<span v-show="showGoTop==true" class="iconfont goTop" @click="goTop()">&#xe645;</span>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		data(){
			return{
				current:'全部',
				show:-1,
				top:0,
				showGoTop:false,
				list:[]
			}
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll);
			this.top=document.getElementsByClassName('chooseNav')[0].offsetTop;	
			this.$http.get('./data/home.json')
			.then((response)=>{
				this.list=response.data.list;
			})
			.catch((error)=>{
				console.log(error);
			})
			.then(()=>{
			});  
		},
		beforeDestroy(){
			window.removeEventListener('scroll', this.handleScroll);
		},
		methods:{
			handleScroll(){ 
				this.show=-1;
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				// 控制回到顶部的显示和隐藏
				if(scrollTop > document.documentElement.clientWidth){
					this.showGoTop=true;
				}else{
					this.showGoTop=false;
				}
			},
			hate(){
				Toast('已将商家置于最后');
			},
			goTop(){
				document.documentElement.scrollTop=0;
				window.pageYOffset=0;
				document.body.scrollTop=0;
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
::-webkit-scrollbar {
	display:none
};
header {
	width: 100%;
	overflow: auto;
	position: fixed;
	z-index: 99;
	ul {
		background-color: white;
		width: 190%;
		padding-right: 0.45rem;
		background-color: $blue;
		overflow: hidden;
		li {
			width: 11.1%;
			font-size: 0.12rem;
			float: left;
			text-align: center;
			@include box-sizing(14px,0.14rem,14px,0.14rem);
			color: rgba(178,222,255,1);
		}
		.active {
			color: white;
			font-weight: 700;
			position: relative;
		}
		.active::after {
			content: '';
			display: block;
			position: absolute;
			bottom: 10px;
			left: 0.13rem;
			width: 0.53rem;
			height: 1px;
			background-color: white;
		}
		.active:first-child::after {
			@extend .active::after;
			content: '';
			left: 0.27rem;
			width: 0.27rem;
		}
	}
	.iconfont {
		position: fixed;
		display: block;
		width: 0.45rem;
		font-size: 0.16rem;
		color: white;
		@include box-sizing(12.5px,0.14rem,12.5px,0.14rem);
		background-color: $blue;
		border-left: 1px solid #0FA4EF;
		top: 0;
		right: 0;
	}
}

.recommend {
	width: 100%;
	text-align: center;
	span {
		color: #000;
	}
	.chooseNav {
		z-index: 99;
		width: 100%;
		position: fixed;
		top: calc(28px + 0.15rem);
		overflow: hidden;
		background-color: white;
		li {
			@include box-sizing(10px,0.16rem,10px,0.16rem);
			width: 25%;
			float: left;
			text-align: center;
			font-size: 0.13rem;
			color: $fontMColor;
		}
		li:first-child {
			width: 27%;
		}
		li:last-child {
			width: 22%;
		}		
	}
	.store {
		overflow: hidden;
		position: relative;
		padding-bottom: 48px;
		padding-top: calc(48px + 0.15rem + 0.13rem);
	}
	.store li {
		width: 100%;
		overflow: hidden;
		position: relative;
		@include box-sizing(16px,0.1rem,16px,0.1rem);
		border-bottom: .01rem solid #EDEDED;
		img {
			width: 17%;
		}
		.hateBtn {
			position: absolute;
			right: 0.1rem;
			top: 0;
		}
		.storeInf {
			width: 83%;
			text-align: left;
			@include box-sizing(0,0,0,0.1rem);
			padding-left: 0.1rem;
			p {
				overflow: hidden;
			}
			.storeName {
				color: $fontTColor;
				@include ell;
				display: block;
				width: 80%;
				font-weight: 700;
				font-size: 0.16rem;
			}
			.grade {
				padding: 5px 0;
			}
			.grade span {
				margin-left: 0.1rem;
			}
			.star {
				position: relative;
				top: 3px;
				float: left;
			}
			.inf {
				font-size: 0.12rem;
				float: left;
				color: $fontMColor;
			}
			.infR {
				color: $fontBColor;
				float: right;
			}
			.birdsend {
				float: right;
				background-color: $blue;
				color:white;
				padding: 1px 2px;
				border-radius: 1px;
			}
			.firstWord {
				color: white;
				background-color: #70BC46FF;
				border-radius: 1px;
				padding: 1px 2px;
				margin-right: 0.05rem;
			}
			.otherWord {
				color: white;
				background-color: #F07373FF;
				border-radius: 1px;
				padding: 1px 2px;
				margin-right: 0.05rem;
			}
		}
		.activity {
			width: 80%;
			@include ell;
		}
		.otherActivity {
			padding: 1px;
			width: 70%;
			@include ell;
		}
		.label {
			margin-right: 0.1rem;
			border: 1px solid rgb(221, 221, 221);
			border-radius: 1px;
			padding: 1px;
		}
		.labelBox {
			padding: 12px 0;
		}
		.activityB {
			padding: 2px 0;
		}
	}
	.store .hate {
		background-color: #00000066;
		width: 100%;
		height: 190px;
		position: absolute;
		top: 0;
		margin: 0;
		left: 0;
		z-index: 9;
		p {
			@include verticalCenter;
			@include widthHeight(50px,50px);
			line-height: 50px;
			border-radius: 50px;
			background-color: white;
			font-size: .01rem;
		}
	}
}
.goTop {
	font-size: 0.45rem;
	color: #BBB;
	position: fixed;
	bottom: 60px;
	right: 0.1rem;
	z-index: 100;
	background-color: white;
}
</style>
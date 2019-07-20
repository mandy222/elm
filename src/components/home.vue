<template>
	<div class="main">
		<header class="search" >
			<p class="locBox">
				<span class="iconfont">&#xe61e;</span>
				<span class="placeName">广州市人民政府</span>
				<span class="iconfont">&#xe611;</span>
			</p>
			<p class="searchBox" id="searchInput">
				<span class="iconfont">&#xe619;</span>
				<span>搜索饿了么商家、商品名称</span>	
			</p>
		</header>
		<section class="topSlide">
			<mt-swipe :auto="0">
				<mt-swipe-item>
					<ul class="menu">
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic14.webp" alt="">	
								<span>美食</span>	
							</router-link>			
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic02.webp" alt="">
								<span>商店便利</span>
							</router-link>
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic03.webp" alt="">
								<span>水果</span>			
							</router-link>				
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic04.webp" alt="">
								<span>医疗健康</span>
							</router-link>
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic05.webp" alt="">
								<span>浪漫鲜花</span>
							</router-link>
						</li>
					</ul>
					<ul class="menu">
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic06.webp" alt="">
								<span>跑腿代购</span>
							</router-link>
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic07.webp" alt="">
								<span>汉堡披萨</span>
							</router-link>
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic08.webp" alt="">
								<span>厨房生鲜</span>
							</router-link>
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic09.webp" alt="">
								<span>甜品饮品</span>
							</router-link>
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic10.webp" alt="">
								<span>素食简餐</span>
							</router-link>
						</li>
					</ul>
				</mt-swipe-item>
				<mt-swipe-item>
					<ul class="menu">
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic11.webp" alt="">
								<span>地方小吃</span>
							</router-link>
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic12.webp" alt="">
								<span>大牌惠吃</span>
							</router-link>
						</li>
						<li>
							<router-link to="/cate" tag="div">
								<img src="../assets/img/home/pic13.webp" alt="">
								<span>速食简餐</span>
							</router-link>
						</li>
					</ul>
				</mt-swipe-item>
			</mt-swipe>
		</section>
		<section class="recommend">
			<p class="title">
				<span class="iconfont">&#xe601;&nbsp;&nbsp;&nbsp;</span>
				推荐商家
				<span class="iconfont">&nbsp;&nbsp;&nbsp;&#xe601;</span>
			</p>
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
				// 控制搜索栏吸顶
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var oSeacher=document.getElementsByClassName('search')[0];
				var oLocBox=document.getElementsByClassName('locBox')[0];
				if(searchInput.offsetTop < scrollTop){
					oSeacher.style.position='fixed';
					oLocBox.style.display='none';
				}else{
					oSeacher.style.position='relative';
					oLocBox.style.display='block';;
				}

				// 控制商家筛选栏吸顶
				var oChooseNav=document.getElementsByClassName('chooseNav')[0];
				if(scrollTop < this.top) {
					oChooseNav.style.position='relative';
					oChooseNav.style.top='0px';
				}		
				if(scrollTop > oChooseNav.offsetTop-61){
					oChooseNav.style.position='fixed';
					oChooseNav.style.top='55px';
				}	

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
// 定位+搜索框
header {
	@include box-sizing(8px,0.14rem,8px,0.14rem);
	@include widthHeight(100%);
	background-color: $blue;
	z-index: 99;
	.locBox {
		font-size: 0.16rem;
		padding: 10px 0 12px 0;
	}
	.iconfont {
		font-size: 0.16rem;
		position: relative;
		top: -5px;
		color: white;
	}
	.placeName {
		display: inline-block;
		font-weight: 700;
		max-width: 60%;
		color: white;
		@include ell;
	}
	.searchBox {
		width: 100%;
		background-color: white;
		text-align: center;
		font-size: 0.14rem;
		span {
			color: $fontBColor;
			display: inline-block;
			padding: 10px 0;
		}	
		.iconfont {
			position: relative;
			left: 0.02rem;
			top: 1px;
		}		
	}
}

// 分类
.menu {
	overflow: hidden;
	padding-top: 16px;
	li {
		width: 20%;
		float: left;
		text-align: center;
		font-size: 0.12rem;
		img {
			@include box-sizing(0,0.16rem,0,0.16rem);
			width: 100%;
		}
		span {
			color: $fontMColor;
		}
	}
}
.recommend {
	width: 100%;
	text-align: center;
	.title {
		font-size: 0.14rem;
		padding-top: 8px;
	}
	span {
		color: #000;
	}
	.chooseNav {
		z-index: 99;
		width: 100%;
		overflow: hidden;
		background-color: white;
		li {
			@include box-sizing(22px,0.16rem,22px,0.16rem);
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
				background-color: #70BC46;
				border-radius: 1px;
				padding: 1px 2px;
				margin-right: 0.05rem;
			}
			.otherWord {
				color: white;
				background-color: #F07373;
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
		background-color: rgba(0,0,0,.3);
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

<style lang="scss">
.mint-swipe{
	overflow: hidden;
}
.topSlide .mint-swipe-items-wrap {
	padding-bottom: calc(40% + 38px);
}
.mint-swipe-indicators {
	bottom: .1rem;
}
.mint-swipe-indicator {
	background-color: #808080;
	opacity: 1;
	width: 0.1rem;
	height: 1px;
}
.mint-swipe-indicator.is-active {
	background: #FE8;
	opacity: 1;
}
</style>
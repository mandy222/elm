<template>
	<main>
		<ul class="top">
			<li class="l goldMall">
				<h3 class="title">金币商城</h3>
				<p>0元好物在这里</p>
				<img class="r" src="../assets/img/find/find01.webp" alt="">
			</li>
			<li class="r recomGif">
				<div class="infL l">
					<h3 class="title">推荐有奖</h3>
					<p>20元现金拿不停</p>
				</div>
				<img class="r" src="../assets/img/find/find02.webp" alt="">
			</li>
			<li class="r around">
				<div class="infL l">
					<h3 class="title">周边优惠</h3>
					<p>领取口碑好券</p>
				</div>
				<img class="r" src="../assets/img/find/find03.webp" alt="">
			</li>
		</ul>

		<section class="recommend">
			<h3>
				—
				<span class="iconfont good">&#xe62b;</span>
				为你推荐 —
			</h3>
			<p>你的口味，我都懂得</p>
				<ul class="cont"> 
					<li v-for="(item,index) in food">
						<img :src="item.src" alt="">
						<h3>{{item.title}}</h3>
						<p class="details"><span>{{item.grade[0]}}</span><span>{{item.grade[0]}}</span></p>
						<p class="price">{{item.price}}</p>
						<p class="store">
							<span class="iconfont">&#xe677;&nbsp;&nbsp;</span>{{item.store}}
						</p>
					</li>
				</ul>	
				<p class="moreLook">查看更多></p>
		</section>
		<section class="gif">
			<h3>
				—
				<span class="iconfont clock">&#xe606;</span>
				限时好礼 —
			</h3>
			<p>金币换豪礼</p>
			<ul class="gifBox">
				<li v-for="(item,index) in gif">
					<p class="label">{{item.title}}</p>
					<img :src="item.src" alt="">
					<p class="inf">{{item.des}}</p>
					<p><span class="price">{{item.price[0]}}</span><del class="delPrice">{{item.price[0]}}</del></p>
				</li>
			</ul>
			<p class="moreLook">查看更多></p>
		</section>	
	</main>
</template>

<script>
	export default {
		data(){
			return{
				food:[],
				gif:[]
			}
		},
		mounted(){
			this.$http.get('./data/find.json')
			.then((response)=>{
				this.food=response.data.food;
				this.gif=response.data.gif;
			})
			.catch((error)=>{
				console.log(error);
			})
			.then(()=>{
			}); 
		}
	}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
main {
	width: 100%;
	padding-bottom: 50px;
	overflow: hidden;
}
.top {
	border-bottom: 12px solid #F5F5F5FF;
	overflow: hidden;
	.title {
		font-size: 0.16rem;
		padding-bottom: 6px;
	}
	li {
		width: 50%;
	}
	li p {
		font-size: 0.12rem;
		color: $fontBColor;
	}
	.goldMall {
		@include box-sizing(20px,0,12px,0.15rem);
		border-right: 1px solid #ededed;
		h3 {
			color: rgb(255, 153, 0);
		}
		img {
			width: 50%;
			@include box-sizing(25px,0.15rem,0,0);
		}
		
	}
	.infL {
		@include box-sizing(20px,0.15rem,14px,0.15rem);
		width: 65%;
	}
	.recomGif,.around {
		img {
			width: 35%;
			@include box-sizing(20px,0.15rem,14px,0);
		}
	}
	.recomGif {
		border-bottom: 1px solid #ededed;
		h3 {
		color: rgb(27, 169, 225);
		}
	} 
	.around h3 {
		color: rgb(237, 102, 96);
	}
}

.recommend {
	overflow: hidden;
	@include box-sizing(20px,0.07rem,20px,0.07rem);
	h3,p {
		width: 100%;
		text-align: center;
	}
	h3 {
		font-size: 0.18rem;
	}
	p {
		font-size: 0.1rem;
		color: $fontBColor;
	}
	.good {
		color: #F14C1AFF;
		font-size: 0.18rem;
		font-weight: normal;
	}
}
.cont {
	overflow: hidden;
	width: 100%;
	@include box-sizing(10px,0.05rem,20px,0.05rem);
	li {
		margin: 5px 0.05rem;
		width: calc(50% - 0.1rem - 2px);
		border: 1px solid #eee;
		float: left;
		img {
			width: 100%;
		}
		h3,p {
			padding-left: 0.1rem;
			text-align: left;
		}
		h3 {
			font-size: 0.14rem;
		}
		p {
			font-size: 0.12rem;
			line-height: 1.5;
		}
		.price {
			font-size: 0.13rem;
			color: #ff6000;
			font-weight: 800; 
			padding-bottom: 3px;
		}
		.store {
			@include box-sizing(6px,0.1rem,6px,0.1rem);
			border-top: 1px dotted $fontBColor;
			color: $fontBColor;
			font-size: 0.12rem;
			.iconfont {
				font-size: .14rem;
				color: $fontBColor;
			}
		}
	}
	.moreLook {
		font-size: .12rem;
		color: $fontBColor;
		width: 100%;
		text-align: center;
		margin-top: 20px;
		border: none;
	}
}

.gif .clock {
	font-size: 0.16rem;
	color: #F14C1AFF;
	position: relative;
}

.gif {
	width: 100%;
	padding: 20px 0;
	overflow: hidden;
	border-top: 12px solid #F5F5F5FF;
	border-bottom: 22px solid #F5F5F5FF;
	>h3,>p {
		text-align: center;
		width: 100%;
	}
	h3 {
		font-size: 0.18rem;
		color: $fontTColor;
	}
	>p {
		font-size: 0.12rem;
		color: $fontBColor;
	}
	.gifBox {
		width: calc(100% - 0.28rem);
		margin: 22px 0.14rem;
		overflow: hidden;
		li {
			width: 33.3%;
			float: left;
			text-align: left;
			.label {
				font-size: .12rem;
				color: white;
				width: 44%;
				padding: .03rem;
				background-color: #413d3c;
			}
			img {
				width: 100%;
			}
			.price {
				color: #ff6000;
				font-size: .14rem;
			}
			.inf {
				font-size: .14rem;
				color: $fontTColor;
				line-height: 2.5;
			}
			.delPrice {
				font-size: .12rem;
				color: $fontBColor;
			}
		}
	}
}
</style>
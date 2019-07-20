<template>
	<div>
		<header class="header">
			<span class="iconfont l" @click="back()">&#xe650;</span>
			确认订单
		</header>

		<main>
			<p class="addressTip">订单配送至</p>
			<p class="newAddress">新增收货地址<span class="iconfont">&#xe600;</span></p>
			<ul>
				<li>
					<p class="timeTxt">送达时间</p>
					<span class="birdSend">蜂鸟专送</span>
					<p class="sendTxt r">
						<span class="blueTxt">尽快送达(10:21送达)</span>
						<span class="arrow">></span>
					</p>
				</li>
				<li>
					支付方式
					<span class="blueTxt r">在线支付</span>
				</li>
			</ul>

			<ul class="food">
				<li>
					<h3>有爱水果 <span>(人民中路店)</span></h3>
				</li>
				<!-- 0:title 1:peice 2:index1 3:index2 4:num 5:delprice 6:src -->
				<li class="inf" v-for="(item,index) in this.$store.state.buy">
					<img :src="item[6]" alt="" class="l">
					<span class="title l">{{item[0]}}</span>	
					<span class="price r">￥{{item[1]}}</span>
					<del class="delPrice r">￥{{item[5]}}</del>
					<span class="num r">x{{item[4]}}</span>
				</li>
				</li>
				<li class="sendMoney">
					<span class="birdSend">蜂鸟</span>
					配送费
					<span class="r">￥3</span>
				</li>
				<li class="actyTxt">
					满减活动与折扣商品不同享
				</li>
				<li>
					红包
					<span class="iconfont chooseBag r">&#xe81d;选择地址后使用红包</span>
				</li>
				<li>
					<span class="iconfont discountTxt">优惠说明&#xe62c;</span>
					<span class="r">小计￥<span class="countPrice">{{count}}</span></span>
				</li>
			</ul>

			<ul class="ps">
				<li>
					订单备注<span class="infR r">口味、偏好 ></span>
				</li>
				<li>
					发票信息<span class="infR r">该店不支持线上开票，请电话联系商户</span>
				</li>
				<li>
					号码保护<span class="iconfont">&#xe62c;</span>
					<p class="infR phoneProte">号码保护中，将对商家、骑手隐藏您的真实手机号</p>
				</li>
			</ul>
		</main>

		<footer>
			<span class="price">￥{{count}}</span> 
			<span class="discount">已优惠￥{{(discount-count).toFixed(1)}}</span>
			<span class="pay">去支付</span>
		</footer>
	</div>
</template>

<script>
export default {
	data(){
		return {
			count:0,
			discount:0
		}
	},
	methods:{
		back(){
			this.$router.go(-1);
			this.$store.commit('init');
		},
	},
	mounted(){
		for (let i = 0; i < this.$store.state.buy.length; i++) {
			this.count+=this.$store.state.buy[i][1]*this.$store.state.buy[i][4];
			this.discount+=this.$store.state.buy[i][5]*this.$store.state.buy[i][4];
		}
		this.count=parseInt(3)+Number(this.count.toFixed(1));
		this.discount=this.discount.toFixed(1);
	}
}
</script>


<style lang="scss" scoped>
@import '../assets/css/mixin';
header {
	width: 100%;
	@include box-sizing(14px,0.18rem,14px,0.18rem);
	position: fixed;
	font-size: 0.18rem;
	color: white;
	span {
		font-weight: normal;
		line-height: 1.5;
	}
}
.header {
	top: 0;
	text-align: center;
	font-weight: 700;
	background: linear-gradient(270deg,#0085ff,#0af);
	z-index: 9;
}
footer {
	@extend header;
	@include box-sizing(12px,0.1rem,12px,0.1rem);
	bottom: 0;
	background-color: #3C3C3C;
	font-size: 0.14rem;
	color: #999999;
	.price {
		color: white;
		font-size: 0.16rem;
		font-weight: 600;
	}
	.discount {
		padding-left: 0.03rem;
		margin-left: 0.03rem;
		border-left: 1px solid #999999;
	}
	.pay {
		@extend .price;
		position: absolute;
		right: 0;
		top: 0;
		@include box-sizing(12px,0.28rem,12px,0.28rem);
		background-color: #0E6;
	}
}
main {
	padding: 60px 0;
	background: linear-gradient(0deg,#f5f5f5,#f5f5f5 65%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(270deg,#0085ff,#0af);
	>p {
		padding-left: 0.14rem;
		color: white;
	}
	.addressTip {
		font-size: 0.13rem;
	}
	.newAddress {
		font-size: 0.22rem;
		font-weight: 700;
		padding: 8px 0 20px 0.14rem;
		.iconfont {
			font-weight: normal;
		}
	}
	>ul {
		overflow: hidden;
		width: calc(100% - 0.1rem);
		margin: 0 0.05rem;
		background-color: white;
		>li {
			@include box-sizing(18px,0.2rem,18px,0.2rem);
			font-size: 0.14rem;
			color: $fontTColor;
			border-bottom: 1px solid #F9F9F9;
		}
		>li:last-child {
			border-bottom: none;
		}
		.sendTxt {
			position: relative;
			top: -8px;
		}
		.blueTxt,.blueTxt {
			color: $blue;
		}
		.arrow {
			color: $fontBColor;
		}
	}
	.birdSend {
		font-size: 0.12rem;
		background-color: $blue;
		padding: 0 2px;
		color: white;
	}
	.food {
		margin-top: 8px;
		font-size:0.13rem;
		h3 {
			font-size: 0.16rem;
			span {
				font-size: 0.13rem;
				font-weight: normal;
			}
		}
	}
	.inf {
		line-height: 2.5;
		overflow: hidden;
		img {
			width: 10%;
		}
		.title,.price,.delPrice {
			margin-left: 0.1rem;
		}
		.delPrice {
			color: $fontBColor;
		}
		.price {
			color: #FF5F24;
		}
		.num {
			font-size: 0.125rem;
			line-height: 2.8;
		}
		.title {
			width: 48%;
			@include ell;
			display: block;
		}
	}
	.sendMoney span {
		margin-right: 0.1rem;
	}
	.actyTxt,.discountTxt {
		color: $fontBColor;
		font-size: 0.13rem;
	}
	.chooseBag {
		font-size: 0.12rem;
		background-color: #FF5316;
		color: white;
		padding: 1px 5px;
		border-radius: 2px;
		font-weight: 550;
	}
	.countPrice {
		font-size: 0.2rem;
		line-height: 1;
	}
	.ps {
		margin-top: 8px;
		.infR {
			color: $fontBColor;
		}
		.phoneProte {
			font-size: 0.12rem;
			line-height: 3;
		}
	}
}
</style>

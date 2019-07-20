<template>
	<main>
		<ul>
			<li v-for="(item,index) in list">
				<img :src="item.src" alt="" class="l">
				<div class="inf l">
					<p class="store l"><span class="title">{{item.title}}</span>></p>
					<p class="orderState">{{item.state}}</p>
					<p class="time">{{item.time}}</p>
				</div>
				<p class="details r">
					<span class="goods">{{item.food}}</span>
					<span class="price">{{item.price}}</span>
				</p>
			</li>
		</ul>
		<p class="lookMore">查看两个月前的外卖订单<span class="iconfont">&#xe61d;</span></p>
	</main>
</template>

<style lang="scss" scoped>
@import '../assets/css/mixin';
ul {
	// width: 100%;
	overflow: hidden;
	li {
		width: 100%;
		@include box-sizing(15px,0.15rem,15px,0.15rem);
		border-top: 10px solid $bgColor;
		color: $fontTColor;
		overflow: hidden;
		img {
			width: 10%;
		}
		p {
			clear: both;
		}
		.inf,.details {
			width: 90%;
			@include box-sizing(0,0,12px,0.1rem);
			position: relative;
		}
		.details {
			padding-bottom: 0;
		}
		.inf {		
			overflow: hidden;
			border-bottom: 1px solid #F9F9F9FF; 
			.store {
				font-size: 0.16rem;
				width: 60%;
				.title {
					@include ell;
					display: inline-block;
					margin-bottom: -4px;
					max-width: 70%;
				}
			}
			.orderState {
				font-size: 0.13rem;
				position: absolute;
				top: 0;
				right: 0;
			}
			.time {
				font-size: 0.12rem;
				color: $fontBColor;
			}
		}
		.goods {
			display: inline-block;
			padding-top: 12px;
			font-size: 0.12rem;
			color: $fontMColor;
		}
		.price {
			font-weight: 600;
			color: $fontTColor;
			position: absolute;
			top: 12px;
			right: 0;
		}
	}
}
.lookMore {
	width: 100%;
	padding: 10px 0 90px 0;
	font-size: 0.12rem;
	color: $fontMColor;
	background-color: $bgColor;
	text-align: center;
}
</style>

<script>
export default{
	data(){
		return{
			list:[]
		}
	},
	mounted(){
		this.$http.get('./data/order.json')
		.then((response)=>{
			this.list=response.data.list;
		})
		.catch((error)=>{
			console.log(error);
		})
		.then((f)=>{
		});
	}
}	
</script>
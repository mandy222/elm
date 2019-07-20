<template id="evaluate">
	<main>
		<div class="score">
			<p class="storeScore l">
				<span>4.6</span>
				<span>商家评分<img src="../../data/img/evaluate/star.svg" alt=""></span>
			</p>
			<ul class="l">
				<li>
					质量
					<p>4.7</p>
				</li>
				<li>
					包装
					<p>4.7</p>
				</li>
				<li>
					配送
					<p>4.9</p>
				</li>
			</ul>
		</div>
		<ul class="cont">
			<li>
				<ul class="btn">
					<li>全部 5</li>
					<li>最新</li>
					<li>好评 5</li>
					<li>差评</li>
					<li>有图 5</li>
				</ul>
			</li>
			<li class="choose">
				<span class="iconfont">&#xe609;</span>只看有内容的评价
			</li>
			<li class="article" v-for="(item,index) in list">
				<img class="logo l" :src="item.logo" alt="">
				<span class="time">{{item.time}}</span>
				<span class="inf l">
					{{item.userName}}
				</span>
				<p class="inf l">
					<img src="../../data/img/evaluate/star.svg" alt="">
					<span>{{item.evaluate}}</span>
				</p>
				
				<p class="userWord">
					{{item.cont}}
				</p>
				<p class="replay">
					{{item.replay}}
				</p>
				<img class="foodPic" :src="item.pic" alt="">
			</li>
			<li>
				没有更多了哦~
			</li>
		</ul>
	</main>
</template>

<script>
export default {
	data(){
		return{
			list:[]
		}
	},
	mounted(){
		this.$http.get('./data/evaluate.json')
		.then((response)=>{
			this.list=response.data.list;
		})
		.catch((error)=>{
			console.log(error);
		})
		.then((f)=>{
		})
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
main {
	background-color: $bgColor;
	overflow: hidden;
}
.score {
	width: 100%;
	background-color: white;
	overflow: hidden;
	@include box-sizing(20px,0.24rem,32px,0.24rem)
	.storeScore {
		width: 40%;
		span:first-child {
			font-size: 0.32rem;
			color: #FF6000FF;
			font-weight: 500;
			margin-right: 0.1rem;
		}
		span:last-child {
			width: 50%;
			float: right;
			position: relative;
			top: 0.1rem;
		}
	}
	ul {
		overflow: hidden;
		width: 60%;
		li {
			float: left;
			width: 33.3%;
			text-align: center;
			padding: 8px 0 10px 0;
			position: relative;
			font-size: 0.11rem;
			color: $fontMColor;
			p {
				font-size: 0.2rem;
			}
		}
		li:last-child {
			width: 32%;
			border-left: 1px solid #F4F4F4FF;
		}
	}
}
.cont {
	overflow: hidden;
	margin-top: 8px;
	background-color: white;
	>li {
		width: calc(100% - 0.3rem);
		margin: 0 0.15rem;
		@include box-sizing(15px,0,15px,0);
		border-bottom: 1px solid #F4F4F4FF;
		overflow: hidden;
		font-size: 0.12rem;
	}
	.btn {
		overflow: hidden;
		li {
			
			margin-right: 7px;
			padding: 8px 13px;
			background-color: #EBF5FFFF;
			float: left;
			border-radius: 3px;
		}
		li:first-child {
			background-color: $blue;
			color: white;
		}
		li:nth-child(4) {
			background-color: #F5F5F5FF;
			color: #AAAAAAFF;
		}
	}
	.choose .iconfont {
		color: #76D572FF; 
		margin-right: 0.05rem;
	}
	>li:last-child {
		text-align:center;
		margin-bottom: 15px;
		border-bottom: none;
	}
}
.article {
	width: 100%;
	position: relative;
	.logo {
		width: 10%;
		border-radius: 100%;
	}
	.time {
		position: absolute;
		right: 0;
	}
	.inf {
		width: 80%;
		margin-left: 0.05rem;
		display: block;
		overflow: hidden;
	}
	.userWord {
		overflow: hidden;
		width: calc(100% - 10% - 0.05rem);
		margin-left: calc(10% + 0.05rem);
		padding: 8px 0;
	}
	.replay {
		@extend .userWord;
		@include box-sizing(8px,0.08rem,8px,0.08rem);
		background-color: #F3F3F3FF;
		border-radius: 3px;
		position: relative;
		overflow: visible;
	}
	.replay::after {
	    content: '';
	    border: 8px solid transparent;
	    border-bottom-color: #F3F3F3FF;
	    position: absolute;
	    top: -14px;
	    left: 0.1rem;
	}
	.foodPic {
		@extend .userWord;
		width: 50%;
	}
}
</style>
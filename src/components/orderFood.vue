<template>
	<div id="orderFood">
		<main>
			<ul class="menu">
				<li @click="show=0" :class="{active:show==0}"><span class="iconfont discount">&#xe607;</span>优惠</li>
				<li @click="show=1" :class="{active:show==1}">鲜切水果</li>
				<li @click="show=2" :class="{active:show==2}">二合一水果拼盘</li>
				<li @click="show=3" :class="{active:show==3}">超值六合一拼盘</li>
				<li @click="show=4" :class="{active:show==4}">国产水果区</li>
				<li @click="show=5" :class="{active:show==5}">进口水果区</li>
				<li @click="show=6" :class="{active:show==6}">苹果香蕉</li>
				<li @click="show=7" :class="{active:show==7}">瓜梨桃李</li>
				<li @click="show=8" :class="{active:show==8}">果篮.礼盒</li>
				<li @click="show=9" :class="{active:show==9}">公司聚会,优惠多多</li>
				<li @click="show=10" :class="{active:show==10}">本店福利,可开发票</li>
			</ul>
			<div class="goodsDetails">
				<p class="classfiy">{{title}}</p>
				<ul>
					<li class="btn" v-for="(item,index) in cont">	
						<img class="l" :src="item.src" alt="">
						<div class="inf l">
							<h3>{{item.title}}</h3>
							<p class="weight">{{item.weight}}</p>
							<p class="sale">月售{{item.sale}}份</p>
							<p class="fDiscount"><span>{{item.discount}}折</span></p>
							<p class="price">￥
								<span class="money">{{item.price[0]}}</span> 
								<del>￥<span class="delPrice">{{item.price[1]}}</span></del>
							</p>
						</div>
						<p class="changNum changNum">
							<span class="iconfont subCar" @click="decrease(index,item.title,item.price[0],item.price[1],item.src)" v-show="this_.$store.state.list[this_.show][index]>0">&#xe608;</span>
							<span class="num" v-show="this_.$store.state.list[this_.show][index]>0">
								{{this_.$store.state.list[this_.show][index]}}
							</span>
							<span class="iconfont addCar" @click="increment(index,item.title,item.price[0],item.price[1],item.src)">&#xe64c;</span>
						</p>
					</li>
				</ul>
			</div>
		</main>
		<footer>
				<div class="detailsFood">
					<transition enter-active-class="animated slideInUp" leave-active-class="animated slideOutDown">
						<p class="discountTips" v-html="discount"></p>
					</transition>
					<p class="countTitle" v-show="showBuy==true">
						<span>已选商品</span>
						<span class="iconfont" @click="clear()">&#xe670;清空</span>
					</p>

					<ul v-show="showBuy==true">
						<li v-for="(item,index) in this_.$store.state.buy">
							<h3 class="title">
								{{item[0]}}
							</h3>
							<span class="price">￥{{item[1]}}</span>
							<p class="changNum2">
								<!-- 
									title price 下标1 下标2 num
								 -->
								<span class="iconfont subCar" @click="subCountNum(index,item[0],item[1],item[2],item[3],item[4],item[5])">&#xe608;</span>
								<span class="num">{{this_.$store.state.list[item[2]][item[3]]}}</span>
								<span class="iconfont addCar" @click="addCountNum(index,item[0],item[1],item[2],item[3],item[4],item[5])">&#xe64c;</span>
							</p>
						</li>
					</ul>

				</div>
				
				<div class="bottom">
					<p :class="{animated:buyCar==true,heartBeat:buyCar==true}" id="car" @click="showBuy=!showBuy">
						<span class="iconfont" id="buyCar">&#xe605;</span>
						<span class="redDot" v-show="num>0">{{num}}</span>
					</p>
					<p>
						<span class="goods" id="count">未选购商品</span><del id="delCount"></del>
						<span>另需配送费3元</span>
					</p>
					<span class="r startSend" @click="toPay()">{{this.tips}}</span>
				</div>
		</footer>
	</div>
</template>

<script>
export default{
	data(){
		return{
			show:'0',
			list:[],
			this_:this,
			classfiy:[],
			title:'',
			cont:{},
			count:0,
			delCount:0,
			buyCar:false,
			tips:'￥20起送',
			discount:'新用户下单立减15元',
			discountPrice:0,
			num:0,
			showBuy:false
		}
	},
	watch:{
		// 监听变化动态改变
		show(){
			this.title=this.classfiy[this.show];
			this.cont=this.list[this.show];
		},
		count(){
			// count值有很小的小数
			if (this.count<20 && this.count>0.0001) {
				this.tips='还差'+(20-this.count).toFixed(1)+'元起送';
				this.discount=`还差<span v-html="rawHtml" style="color:red">${(20-this.count).toFixed(1)}</span>元起送(按优惠后金额计算)`;
				document.getElementsByClassName('startSend')[0].style.backgroundColor='#505052';
			} 
			else if(this.count>=20) {
				this.tips='去结算';
				document.getElementsByClassName('startSend')[0].style.backgroundColor='#38CA73';
				this.discount=`已减${this.discountPrice.toFixed(1)}元`;
			} else {
				this.tips='￥20起送';
				this.discount='新用户下单立减15元';
				document.getElementsByClassName('startSend')[0].style.backgroundColor='#505052';
				count.innerHTML='未选购商品';
				delCount.innerHTML='';
				buyCar.style.backgroundColor="#505052";
				count.style.color="#999";
				buyCar.style.color="#999";
			}
		}
	},
	methods:{
		// index_数组中的位置 title_商品名 price_商品单价
		increment(index_,title_,price_,priceDel_,pic_){
			this.$store.commit('addNum',[this.show,index_]);
			// 将加入购物车的商品相关信息存入数组buy中
			this.$store.commit('changeCont',[this.show,index_,title_,price_,priceDel_,pic_]);
			this.addChange(index_);
		},
		decrease(index_,title_,price_,priceDel_,pic_){
			this.$store.commit('subNum',[this.show,index_]);
			this.$store.commit('changeCont',[this.show,index_,title_,price_,priceDel_,pic_]);
			this.subChange(index_);
		},
		addCountNum(index_,title_,price_,index1,index2,priceDel_,pic_){
			// 数组的两个下标
			this.$store.commit('addNum',[index1,index2]);
			// 重新更新buy后页面才会刷新
			this.$store.commit('changeCont',[index1,index2,title_,price_,priceDel_,pic_]);
			this.addChange(index_);
		},
		subCountNum(index_,title_,price_,index1,index2,priceDel_,pic_){
			this.$store.commit('subNum',[index1,index2]);
			this.$store.commit('changeCont',[index1,index2,title_,price_,priceDel_,pic_]);
			this.subChange(index_);
		},
		addChange(index_){
			// 改变总价格
			var price=document.getElementsByClassName('money')[index_].innerHTML;
			var delPrice=document.getElementsByClassName('delPrice')[index_].innerHTML;
			this.count+=Number(price);
			this.delCount+=Number(delPrice);
			this.discountPrice=this.discountPrice+Number(delPrice)-Number(price);
			this.change();	
			// 控制购物车数量
			this.num++;
		},
		subChange(index_){
			// 改变总价格
			var price=document.getElementsByClassName('money')[index_].innerHTML;
			var delPrice=document.getElementsByClassName('delPrice')[index_].innerHTML;
			this.count-=Number(price);
			this.delCount-=Number(delPrice);
			this.discountPrice=this.discountPrice-Number(delPrice)+Number(price);
			if (this.count<0) {this.count=0}
			if (this.discountPrice<0) {this.discountPrice=0}
			this.change();
			// 控制购物车数量	
			this.num--;
			if (this.num<0) {this.num=0}
		},
		change(){
			// 改变总价格
			count.innerHTML='￥'+this.count.toFixed(2);
			delCount.innerHTML='￥'+ this.delCount.toFixed(1);
			count.style.color="white";
			count.style.fontSize="0.16rem";
			count.style.fontWeight="800";
			buyCar.style.backgroundColor="#0089dc";
			buyCar.style.color="#fff";

			// 控制动画
			this.buyCar=!this.buyCar;
			setTimeout(()=>{
				this.buyCar=!this.buyCar;
			},500)		
		},
		clear(){
			this.$store.commit('init');
			this.count=0;
			this.discountPrice=0
			this.num=0;
			this.showBuy=false;
		},
		toPay(){
			if(this.tips=='去结算'){
				// this.clear();
				this.$router.push({path:'./pay'});
			} 
		}
	},
	mounted(){
		var memuHight=document.documentElement.clientHeight-40-50;
		document.getElementsByClassName('menu')[0].style.height=memuHight+'px';
		document.getElementsByClassName('goodsDetails')[0].style.height=memuHight+'px';
		this.$http.get('./data/store.json')
		.then((response)=>{
			for (let i = 0; i < 11; i++) {
				this.list[i]=response.data.list[i].cont;
				this.classfiy[i]=response.data.list[i].classfiy;
			}
			// 附初始值
			this.title=this.classfiy[0];
			this.cont=this.list[0];			
		})
		.catch((error)=>{
			console.log(error);
		})
		.then((f)=>{
		});
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
// 隐藏滚动条
::-webkit-scrollbar {
	display:none
};
main {
	width: 100%;
	// 控制滚动
	height: 20px;
	position: relative;
	.menu,.goodsDetails {
		position: absolute;
		top: 0;
		z-index: -5;
		overflow: scroll;
		padding-bottom: 60px;
	}
}
.menu {
	left: 0;
	width: 20%;
	li {
		font-size: 0.12rem;
		color: $fontTColor;
		@include box-sizing(18px,0.08rem,18px,0.08rem);
	}
	.active {
		background-color: white;
	}	
	.discount {
		color: #3DD24B;
		font-size: 0.12rem;
		margin-right: 0.02rem;
	}
	background-color: #F8F8F8;
}
.goodsDetails {
	right: 0;
	width: 80%;
	overflow: hidden;
	li {
		@include box-sizing(20px,0.15rem,20px,0.1rem);
		.inf {
			width: 60%;
			@include box-sizing(0,0.08rem,0,0.08rem);
		}
		position: relative;
		overflow: hidden;
	}
	.classfiy {
		font-size: 0.12rem;
		color: $fontTColor;
		font-weight: 600;
		@include box-sizing(20px,0.15rem,0px,0.1rem);
	}
	.btn {
		img {
			width: 30%;
		}
		h3 {
			font-size: 0.15rem;
			@include ell;
		}
		.weight, .sale {
			font-size: 0.12rem;
			color: $fontBColor;
		}
		.fDiscount,.weight,.sale,h3 {
			padding-bottom: 5px;
		}
		.fDiscount span {
			font-size: 0.12rem;
			border: .133333vw solid hsla(8,79%,62%,.3);
			color: rgb(255, 83, 57);	
		}
		.price {
			font-size: 0.14rem;
			color: rgb(255, 83, 57); 
			del {
				font-size: 0.12rem;
				color: $fontBColor;
			}
		}	
	}
}
.subCar,.addCar,.num {
	bottom: 20px;
	position: absolute;
	right: 0.15rem;
}
.subCar {
	right: 0.55rem;
}
.num {
	right: 0.35rem;
	font-size: 0.14rem;
}
.changNum {
	font-size: 0.22rem;
	color: $blue;
	position: absolute;
	bottom: 20px;
	right: 0.15rem;
}

footer {
	position: fixed;
	width: 100%;
	height: 13.6vw;
	background-color: #505052;
	bottom: 0;
	margin: 0;
	padding: 0;
	.detailsFood {
		width: 100%;
		position: absolute;
	    bottom: 50px;
	    z-index: 8;
	    .discountTips {
			width: 100%;
			left: 0;
			text-align: center;
			font-size: 0.12rem;
			color: $fontMColor;
			background-color: #FFD;
			padding: 2px 0;
		}
		.countTitle {
			width: 100%;
			@include box-sizing(15px,0.13rem,15px,0.13rem);
			margin-left: -30px;
			background-color: #ECEFF1;
			color: $fontTColor;
			span {
				position: relative;
				display: inline-block;
				font-size: 0.14rem;
			}
			span:last-child {
				right: -70%;
				padding-right: 0.13rem;
			}
		}
	}
	.detailsFood ul{
		@include box-sizing(0,0.17rem,20px,0.17rem);
		background-color: white;
		overflow: hidden;
		font-size: 0.16rem;
		li {
			overflow: hidden;
			border-bottom: 1px solid #F9F9F9;
			padding: 20px 0;
		}
		h3,span {
			display: inline-block;
		}
		h3 {
			@include ell;
			width: 45%;
			font-size: 0.16rem;
			font-weight: 500;
		}
		.price {
			font-weight: 700;
			color: #FF5339;
			padding-left: 0.47rem;
		}
		.changNum2 {
			width: 15%;
		    position: absolute;
		    left: 81%;
		    color: $blue;
		    line-height: .6;
		}
		.subCar {
			position: relative;
			left: -0.13rem;
		}
		.num {
			position: relative;
			left: -0.12rem;
		}
	}
	.bottom {
		position: absolute;
		height: 13.6vw;
		width: 100%;
		bottom: 0;
		left: 0;
		color: #939393;
		background-color: #505052;
		z-index: 9;
	}
	span {
		display: block;
	}
	p {
		width: 40%;
		float: left;
		position: relative;
		left: 0.3rem;
		color: #999;
		padding-top: 8px;
		font-size: .12rem;
	}
	.goods {
		font-size: .14rem;
		display: inline-block;
	}
	#car {
		position: relative;
		float: left;
		top: -20px;
		left: 15px;
		width: auto;
	}
	#buyCar {
		font-size: 0.2rem;
		padding: 10px;
		border-radius: 100%;
		border: 3px solid #444;
		color: #939393;
		background-color: #505052;
		box-shadow: 0 -0.8vw 0.533333vw 0 rgba(0,0,0,.1);
	}
	.startSend {
		height: 100%;
		width: 30%;
		text-align: center;
		color: white;
		font-size: 0.14rem;
		font-weight: 700;
		line-height:  13.6vw;
		background-color: #535356;
	}
	
	.delCount {
		display: inline-block;
		padding-left: 0.03rem;
	}
	.redDot {
		width: 20px;
		height: 12px;
		position: relative;
		top: -49px;
		left: 0.3rem;
		border-radius: 5px;
		background-color: #FF4915;
		color: white;
		text-align: center;
		line-height: 1;
	}
	.showBuy {
		display: none;
	}
}
</style>
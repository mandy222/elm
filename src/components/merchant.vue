<template id="merchant">
	<main>
		<div class="top">
			<p class="inf sendInf">配送信息</p>
			<p class="otherInf"><span class="birdSend">蜂鸟专送</span> 约36分钟送达，距离2.4km</p>
			<p class="otherInf sendMoney">配送费￥3</p>
		</div>
		<div class="look">
			<p class="inf">商家实景</p>
			<img src="../../data/img/store/face01.png" alt="">
			<img src="../../data/img/store/face02.png" alt="">
		</div>
		<ul>
			<li class="inf">
				商家信息<span class="otherInf introduce">暂无简介</span>
			</li>
			<li class="inf">
				品类 <span class="otherInf r">水果、休闲零食</span>
			</li>
			<li class="inf">
				商家电话 <span class="otherInf r">13544798255 <span class="arrows">></span></span>
			</li>
			<li class="inf">
				营业时间 <span class="otherInf r">广州市荔湾区人民中路369号首层</span>
			</li>
			<li class="inf">
				营业时间 <span class="otherInf r">09:00-23:00</span>
			</li>
		</ul>
		<p class="inf bottom">营业资质<span class="arrows r">></span></p>
	</main>
</template>

<style lang="scss" scoped>
@import '../assets/css/mixin';
main {
	background-color: $bgColor;
	overflow: hidden;
	width: 100%;
}
.top {
	background-color: white;
	width: 100%;
	@include box-sizing(10px,0.15rem,24px,0.15rem);
}
.sendInf {
	margin-bottom: 20px;
}
.birdSend {
	color: white;
	background-color: $blue;
	padding: 2px 3px;
	border-radius: 2px;
}
.inf{
	font-size: 0.14rem;
	color: $fontTColor;		
	font-weight: 600;
}
.otherInf {
	font-size: 0.12rem;
	color: $fontMColor;
	font-weight: normal;
}
.sendMoney {
	padding-top: 8px;
}
.look {
	margin-top: 10px;
	@extend .top;
	@include box-sizing(20px,0.15rem,15px,0.15rem);
	p {
		padding-bottom: 13px;
	}
	img {
		padding-right: 0.02rem;
		width: 20%;
	}
}
ul {
	margin-top: 10px;
	@extend .top;
	@include box-sizing(3px,0.15rem,0,0.15rem);
	li {
		padding: 17px 0;
		border-bottom: 1px solid #F4F4F4FF;
	}
	.introduce {
		display: block;
		padding-top: 20px;
	}
}
.arrows {
	color: $fontBColor;
}
.bottom {
	margin: 10px 0;
	@extend .top;
	@include box-sizing(20px,0.15rem,20px,0.15rem);
}
</style>

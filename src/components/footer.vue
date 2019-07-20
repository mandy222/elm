<template>
	<div>
		<router-view></router-view>
		<footer>
			<div class="page-tabbar">
				<mt-tabbar fixed class='footerNav'>
					<mt-tab-item>
						<router-link to="/home" tag="div">
							<span class="iconfont home">&#xe722;</span>
							<span class="navWord">首页</span>
						</router-link>
					</mt-tab-item>

					<mt-tab-item>
						<router-link to="/find" tag="div">
							<span class="iconfont find">&#xe603;</span>
							<span class="navWord">发现</span>
						</router-link>
					</mt-tab-item>
					<mt-tab-item>
						<router-link to="/order" tag="div">
							<span class="iconfont order">&#xe66a;</span>
							<span class="navWord">订单</span>
						</router-link>
					</mt-tab-item>
					<mt-tab-item>
						<router-link to="/mine" tag="div" >
							<span class="iconfont mine">&#xe76d;</span>
							<span class="navWord">我的</span>
						</router-link>
					</mt-tab-item>
				</mt-tabbar>
			</div>
		</footer>
	</div>
</template>


<script>

	export default {
		data() {
			return {
				show:'home'
			}
		}
	};
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
.footerNav {
	box-shadow: 0 -0.3vw 0.5vw rgba(0,0,0,.1); 
}
.navWord {
	font-size: .12rem;
}
.iconfont {
	display: block;
	font-size: 0.2rem;
	padding-bottom: 1px;
}
.home {
	font-size: 0.35rem;
	line-height: .6;
}
.mine {
	font-size:0.19rem;
}
.find {
	position: relative;
	left: 0.07rem;
}
.mint-tabbar > .mint-tab-item.is-selected {
	background-color: white;
}
span {
	color: #8e8e93;
}
.router-link-exact-active span {
	color: $blue;
}
</style>


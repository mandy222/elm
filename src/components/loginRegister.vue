<template>
	<main>
		<img src="../assets/img/loginRegister/pic01.png" alt="">
		<p class="btn">
			<input id="phoneNum" type="text" name="" placeholder="手机号">
			<span id="getCode" @click="change()">获取验证码</span>
		</p>
		<p class="btn">
			<input id="code" type="text" name="" placeholder="验证码">
		</p>
		<p class="tips">新用户登录即自动注册，并表示同意 <span>《用户服务协议》</span></p>
		<p class="login">
			<button @click="login()">登录</button>
		</p>
		<p class="about">关于我们</p>
	</main>
</template>

<script>
export default {
	data(){
		return{
			flag:false,
			state:false,
			click:false,
			timer:null
		}
	},
	methods:{
		change(){
			this.click=true;
			var num=10;
			if (this.flag) {
				this.timer=setInterval(()=>{ 
					--num;
					getCode.innerHTML="已发送("+num+"s)";
					getCode.style.color="rgba(146,146,146,1)";
					if (num<=0) {
						clearInterval(this.timer);
						getCode.innerHTML="重新获取";
						getCode.style.color="rgba(0,169,255,1)";
					}
				},1000);
			}
		},
		login(){
			var userName=phoneNum.value;
			if (this.state && this.flag && this.click) {
				this.$router.push({
					name:'mine',
					params:{data:userName}
				})
			}
		}
	},
	mounted(){
		phoneNum.onkeyup=()=>{
			if(!(/^1[3456789]\d{9}$/.test(phoneNum.value))){ 
				getCode.style.color="rgba(146,146,146,1)";
				this.flag=false;
		    } else {
		    	this.flag=true;
		    	getCode.style.color="rgba(0,169,255,1)";
		    }
		};
		code.onkeyup=()=>{
			 if (code.value) {
		    	this.state=true;
		    } else {
		    	this.state=false;
		    }
		}
	},
	destroyed(){
		clearInterval(this.timer);
	}
}
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
img {
	width: 35%;
	margin: 41px 32.5% 20px 32.5%;
}
.btn {
	width: 100%;
	@include box-sizing(0,0.37rem,16px,0.37rem);
	position: relative;
	input {
		width: 100%;
		@include box-sizing(18px,0.1rem,18px,0.1rem);
		font-size: 0.13rem;
	    left: 0;
	    border: 1px solid #ddd;
	    border-radius: 4px;
	    color: $fontTColor;
	}
	input:focus { 
	  	outline-color: $blue;
	}
	
}
#getCode {
	font-size: 0.13rem;
	padding: 18px 0;
	color: $fontBColor;
	position: absolute;
	top: 0px;
	right: 0.47rem;
}
.tips {
	width: 100%;
	@include box-sizing(0,0.37rem,33px,0.33rem);
	font-size: 0.14rem;
	color: $fontBColor;
	span {
		color: $blue;
	}
}
.login {
	margin-bottom: 20px;
	overflow: hidden;
	@include box-sizing(0,0.37rem,10px,0.37rem);
}
.login button {
	width: 100%;
	padding: 12px 0;
	background-color: #4CD96F;
	font-size: 0.15rem;
	color: white;
	outline: none;
	border-radius: 4px;
	border: none;
}
.about {
	font-size: 0.12rem;
	color: $fontBColor;
	width: 100%;
	text-align: center;
}
.active {
	color: $blue;
}
</style>


<template>
	<div class="header">
		<div class="header-logo">DoniShop</div>
		<div class="header-links">
			<router-link class="header-links-link" :class="{'active': i === 1}" :to="link.href" v-for="(link, i) in links" :key="i">
				<div class="header-links-link-title">{{link.title}}</div>
				<fai class="header-links-link-img" :icon="['fas', link.img]" />
			</router-link>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				links: [
					{
						title: 'Главная',
						img: 'home',
						href: '/'
					},
					{
						title: 'Корзина',
						img: 'shopping-basket',
						href: '/basket'
					},
					{
						title: 'Мои заказы',
						img: 'shopping-bag',
						href: '/offers'
					},
					{
						title: 'Войти',
						img: 'user-circle',
						href: '/sign'
					}
				]
			}
		}
	}
</script>


<style lang="scss">
	@import '@/assets/scss/all.scss';

	.header{
		background-color: $white;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 160px;
		&>div{
			width: auto;
		}
		&-logo{
			font-weight: bold;
			font-size: 1.5rem;
		}
		&-links{
			flex-direction: row;
			font-size: 1.15rem;
			&-link{
				flex-direction: row;
				font-size: 1.1rem;
				padding: 1.25rem 1rem;
				&.active{
					&:after{
						max-height: 2px;
					}
				}
				&:after{
					content: "";
					height: 100%;
					width: 100%;
					max-height: 0;
					bottom: 0;
					position: absolute;
					z-index: 0;
					background-color: $purple;
					transition: 0.2s;
				}
				&:hover{

					&:after{
						max-height: 100%;
					}
					.header-links-link-title, .header-links-link-img{
						color: $white;
					}
				}
				&-title{
					white-space: nowrap;
					transition: 0.3s;
					z-index: 1;
				}
				&-img{
					margin-left: 10px;
					color: $purple;
					transition: 0.3s;
					z-index: 1;
				}
			}
		}
	}


</style>
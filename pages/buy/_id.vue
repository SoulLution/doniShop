<template>
	<div class="main">

		<div class="body">

			<div class="body-cookies">
				<router-link class="body-cookies-cookie" :to="cookie.link" v-for="cookie in cookies">{{cookie.title}}<fai :icon="['fas', 'angle-right']" v-if="cookie.next"/></router-link>
			</div>

			<div class="body-title">Покупка</div>

			<div class="body-results">
				<div class="row">
					<div class="row-content col-lg-10 col-md-8 col-sm-12">
						<div class="row-content-title">{{product.title}}</div>
						<div class="row-content-about">Описание<div>{{product.about}}</div></div>
						<div class="row-content-type">
							<div class="row-content-type-color">Цвет<div :style="{backgroundColor: product.color}"></div></div>
							<div class="row-content-type-memmory">Память<div>{{product.memmory}}</div></div>
						</div>
					</div>
					<div class="row-ava col-lg-2 col-md-4 col-sm-12"><img :src="product.img"></div>
				</div>


				<div class="score">
					<div class="score-title">Ваш счёт</div>
					<div class="score-items">
						<div class="score-items-item" v-for="item in offer">
							<div class="score-items-item-name">{{item.title}}</div>
							<div class="score-items-item-cost">{{item.cost}}<fai :icon="['fas', 'tenge']"/></div>
						</div>
					</div>
					<div class="score-all">Итого<div>{{all}}<fai :icon="['fas', 'tenge']"/></div></div>
					
				</div>


				<div class="ending">
					<div class="ending-types">
						<div class="ending-types-type active"><fai :icon="['fas', 'credit-card']"/>Оплата банковской картой</div>
						<div class="ending-types-type"><fai :icon="['fas', 'wallet']"/>Оплата Наличными</div>
					</div>
					<fai class="ending-arrow" :icon="['fas', 'arrow-circle-right']"/>
					<div class="button success">Купить</div>
					
				</div>

			</div>
		</div>

	</div>

</template>

<script>
	export default {
		data(){
			return {
				offer: [
					{
						title: 'iPhone X 256 GB black A2019 Model',
						cost: 150000,
					},
					{
						title: 'Черный силиконовый чехол',
						cost: 5000,
					},
					{
						title: 'Доставка',
						cost: 5000,
					},
				],
				all: 0,
				cookies: [
					{
						link: '/',
						title: 'Каталог',
						next: true
					},
				],
				product: {
					img: '',
					title: 'iPhone X 256 GB black A2019 Model',
					about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry’s standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries, but also
						the leap into electronic typesetting, remaining essentially unchanged. It was
						popularised in the 1960s with the release of Letraset sheets containing Lorem
						Ipsum passages, and more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum
					`,
					cost: 150000,
					color: '#f9f6f6',
					memmory: 64
				},
			}
		},
		created(){
			for(let i = 0; i < this.offer.length; i++)
				this.all += this.offer[i].cost 
			this.cookies.push({
				link: '/product/' + this.$route.params.id,
				title: this.product.title,
				next: true
			})
			this.cookies.push({
				link: this.$route.path,
				title: 'Покупка'
			})
		},
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.body{
		align-items: flex-start;
	}


	.score{
		font-size: 1.25rem;
		padding-bottom: 2rem;
		border-bottom: 2px dashed $black;
		&-title{
			border-bottom: 3px solid $black;
			align-items: flex-start;
		}
		&-items{
			border-bottom: 3px solid $black;
			&-item{
				border-top: 1px solid $grey;
				flex-direction: row;
				justify-content: space-between;
				padding: 0.5rem 0;
				&>div{
					flex-direction: row;
					width: auto;
					&>svg{
						margin-left: 0.5rem;
					}
				}
				&:first-child{
					border: unset;
				}
				&-name{

				}
				&-cost{

				}
			}
		}
		&-all{
			flex-direction: row;
			justify-content: space-between;
			padding: 0.5rem 0;
			&>div{
				flex-direction: row;
				width: auto;
				&>svg{
					margin-left: 0.5rem;
				}
			}
		}
	}
	.ending{
		flex-direction: row;
		justify-content: space-between;
		margin-top: 3rem;
		&-types{
			flex-direction: row;
			width: auto;
			&-type{
			  width: 20rem;
			  height: 5rem;
			  padding: 1rem 2rem;
			  margin: 0 1rem;
			  border-radius: 1rem;
			  border: 0.15rem solid $grey;
			  background-color: $white;
			  flex-direction: row;
			  cursor: pointer;
			  transition: 0.3s;
				font-size: 1.25rem;	
				&>svg{
					font-size: 2.5rem;	
					margin-right: 0.5rem;
				}
				&:hover, &.active{
					border-color: $purple;
				}
				&.active{
					&>svg{
						color: $purple !important;
					}
				}
			}
		}
		&-arrow{
			font-size: 3rem;	
			color: $grey_d;
			margin-right: 1rem;
			cursor: pointer;
			transition: 0.3s;
			&:hover{
				color: $purple_d;
			}
		}
		&>.button{
			width: 18rem;
			font-size: 2rem;
		}
	}
		
</style>
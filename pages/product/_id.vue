<template>
	<div class="main">

		<div class="body">

			<div class="body-cookies">
				<router-link class="body-cookies-cookie" :to="cookie.link" v-for="cookie in cookies">{{cookie.title}}<fai :icon="['fas', 'angle-right']" v-if="cookie.next"/></router-link>
			</div>

			<div class="body-product">
				<div class="body-product-column col-lg-3 col-md-4 col-sm-12">
					<div class="body-product-column-main"><img :stc="product.img[cur_img]"></div>
					<div class="body-product-column-galery"><img :stc="img" v-for="(img, i) in product.img"></div>
				</div>

				<div class="body-product-content col-lg-9 col-md-8 col-sm-12">
					<div class="body-product-content-title">{{product.title}}</div>
					<div class="body-product-content-cost">
						Цена
						<div>{{product.cost}}<fai :icon="['fas', 'tenge']"/></div>
					</div>
					<div class="body-product-content-buttons">
						<div class="button default">В корзину</div>
						<router-link class="button purple" :to="'/buy/' + $route.params.id">Купить</router-link>
					</div>
					<div class="body-product-content-about">
						Описание
						<div>{{product.about}}</div>
					</div>
					<div class="body-product-content-colors">
						Цвета
						<div v-for="color in product.colors" :style="{backgroundColor: color}"></div>
					</div>
					<div class="body-product-content-memmory">
						Память
						<div v-for="(memmory, j) in product.memmory">{{memmory}}<div>{{(j !== product.memmory.length - 1 ? '/' : '')}}</div></div>
					</div>
					
				</div>

			</div>
			<div class="body-mimic">
				<div class="body-mimic-title">Похожие продукты</div>
				<div class="body-mimic-contetn">
					<div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(data, i) in mimic">
						<router-link class="item-result " :to="'/product/' + i">
							<div class="item-result-img"><img :src="data.img"></div>
							<div class="item-result-title">{{data.title}}</div>
							<div class="item-result-rating">
								<div class="item-result-rating-stars">
									<fai :icon="['fas', 'star']" v-for="i in 5" />
								</div>
								<div class="item-result-rating-value">({{data.rating_cost}})</div>
							</div>
							<div class="item-result-cost">{{data.cost}}<fai :icon="['fas', 'tenge']"/></div>
						</router-link>
					</div>
				</div>

			</div>


		</div>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				cookies: [
					{
						link: '/',
						title: 'Каталог',
						next: true
					},
				],
				cur_img: 0,
				product: {
					img: [''],
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
					colors: ['#f9f6f6','#3e3939','#eca4a4'],
					memmory: [64,128,256]
				},
				mimic: [
					{
						img: '',
						title: 'iPhone X 256 GB black A2019 Model',
						rating_value: 4.5,
						rating_cost: 15,
						cost: 150000
					},
					{
						img: '',
						title: 'iPhone X 256 GB black A2019 Model',
						rating_value: 4.5,
						rating_cost: 15,
						cost: 150000
					},
					{
						img: '',
						title: 'iPhone X 256 GB black A2019 Model',
						rating_value: 4.5,
						rating_cost: 15,
						cost: 150000
					},
					{
						img: '',
						title: 'iPhone X 256 GB black A2019 Model',
						rating_value: 4.5,
						rating_cost: 15,
						cost: 150000
					},
					{
						img: '',
						title: 'iPhone X 256 GB black A2019 Model',
						rating_value: 4.5,
						rating_cost: 15,
						cost: 150000
					},
					{
						img: '',
						title: 'iPhone X 256 GB black A2019 Model',
						rating_value: 4.5,
						rating_cost: 15,
						cost: 150000
					},
					{
						img: '',
						title: 'iPhone X 256 GB black A2019 Model',
						rating_value: 4.5,
						rating_cost: 15,
						cost: 150000
					},
				],
			}
		},
		created(){
			this.cookies.push({
				link: this.$route.path,
				title: this.product.title
			})
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';

	.body{
	  align-items: flex-start;
		&-product{
			flex-direction: row;
			flex-wrap: wrap;
			align-items: flex-start;
			&-column{
				flex-direction: column;
				margin-bottom: 1rem;
				&-main{
					&>img{
						min-height: 200px;
				    background-color: $grey;
					}
				}
				&-galery{
					margin-top: 1rem;
					overflow-x: auto;
					flex-direction: row;
					justify-content: flex-start;
					&>img{
						min-height: 50px;
				    background-color: $grey;
						width: calc(25% - 1rem);
						margin: 0 0.5rem;
						cursor: pointer;
						border: 1px solid $grey;
						&:hover, &.active{
							border-color: $purple;
						}
					}
				}
			}
			&-content{
				background-color: $white;
				padding: 2rem 1.5rem;
				align-items: flex-start;
				border-radius: 5px;
				&-title{
					font-size: 2.25rem;
					align-items: flex-start;
					margin-bottom: 0.5rem;
				}
				&-cost{
					align-items: flex-start;
					&>div{
						flex-direction: row;
						justify-content: flex-start;
						font-size: 2rem;
						font-weight: bold;
						&>svg{
							margin-left: 0.5rem;
						}
					}
				}
				&-buttons{
					flex-direction: row;
					justify-content: flex-start;
					margin: 2rem 0;
					&>.button{
						margin-left: 2%;
						width: 10rem;
					}
				}
				&-about{
					align-items: flex-start;
					font-weight: bold;
					font-size: 1.05rem;
					&>div{
						font-size: 0.95rem;
						color: $grey_d;
						font-weight: normal;
					}
				}
				&-colors{
					width: auto;
					font-size: 1.15rem;
					flex-direction: row;
					justify-content: flex-start;
					margin: 2rem 0 0.5rem;
					&>div{
						cursor: pointer;
						width: 1.5rem;
						height: 1.5rem;
						border: 1px solid $grey;
						border-radius: 50%;
						margin-right: 0.25rem;
						&:hover{
							border-color: $purple;
						}
						&:first-child{
							margin-left: 2rem;
						}
					}
				}
				&-memmory{
					width: auto;
					font-size: 1.15rem;
					flex-direction: row;
					justify-content: flex-start;
					&>div{
						flex-direction: row;
						margin-right: 0.5rem;
						cursor: pointer;
						&:hover{
							color: $purple;
						}
						&>div{
							margin-left: 0.5rem;
							color: $black;
						}
						&:first-child{
							margin-left: 2rem;
						}
					}
				}
			}
		}
		&-mimic{
			margin-top: 2rem;
			align-items: flex-start;
			&-title{
				align-items: flex-start;
				font-weight: bold;
				font-size: 1.5rem;
		    margin-left: 1rem;
			}
			&-contetn{
				overflow-x: auto; 
				flex-direction: row;
				justify-content: flex-start;
				&>div{
				}
			}
		}
	}

</style>
<template>
	<div class="main">

		<div class="body">

			<div class="body-title">Поиск</div>
			<div class="body-search">
				<input class="body-search-input" type="text" placeholder="Введите текст">
				<div class="body-search-buttons">
					<div class="body-search-buttons-button">Фильтр</div>
					<div class="body-search-buttons-button">Поиск</div>
				</div>
			</div>

			<div class="body-filtres">
				<div class="body-filtres-filter col-lg-2 col-md-4 col-sm-12" :class="{'col-lg-4 col-md-12': i === filtres.length-1}" v-for="(filter, i) in filtres">
					<div class="body-filtres-filter-title">{{filter.title}}</div>
					<div class="body-filtres-filter-input">
						<div class="body-filtres-filter-input-select">{{filter.current >= 0 ? filter.values[filter.current] : 'Не Выбранно'}}</div>
						<div class="body-filtres-filter-input-options">
							<div class="body-filtres-filter-input-options-option" v-for="(value, i) in filter.values">{{value}}</div>
						</div>
						
					</div>
				</div>
			</div>

			<div class="body-name">
				<div class="body-name-first">Результат поиска</div>
				<div class="body-name-second">Всего результатов: 1</div>
			</div>

			<div class="body-results">
				<div class="col-lg-3 col-md-4 col-sm-6 col-12" v-for="(data, i) in resultes">
					<router-link class="item-result" :to="'/product/' + i">
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

			<div class="body-pages">
				<div class="body-pages-page" :class="{'active': i === 0}" v-for="(page, i) in pages">{{page}}</div>
			</div>


		</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				resultes: [
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
				pages: 3,
				current_page: 1,
				filtres: [
					{
						title: 'Выберите категорию',
						current: -1,
						values: [],
					},
					{
						title: 'Укажите цену',
						current: -1,
						values: [],
					},
					{
						title: 'Компания',
						current: -1,
						values: [],
					},
					{
						title: 'Память',
						current: -1,
						values: [],
					},
					{
						title: 'Цвет',
						current: -1,
						values: [],
					},
					{
						title: 'Сортировать по',
						current: -1,
						values: [],
					}
				]
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
	.body{
		&-search{
			background-color: $white;
			flex-direction: row;
			border-radius: 10px;
			overflow: hidden;
			&-input{
				border: none;
				padding: 1rem 16px;
				outline: none;
				width: 100%;
			}
			&-buttons{
				width: auto;
				flex-direction: row;
				&-button{
					padding: 1rem 2rem;
					cursor: pointer;
					background-color: $purple;
					color: $white;
					font-weight: 500;
					transition: 0.2s;

					&:hover{
						background-color: $purple_h;
					}
					&:active, &.active{
						background-color: $purple_d;
						color: $purple_font;
					}
				}
			}
		}
		&-filtres{
			background-color: $white;
			border-radius: 10px;
			margin: 35px 0;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: flex-start;
			padding: 15px 0 0;
			&-filter{
				margin: 0 1.5% 2.5%;
				&-title{
					font-size: 0.95rem;
					font-weight: 500;
					flex-direction: row;
					flex-wrap: wrap;
					justify-content: flex-start;
				}
				&-input{
					cursor: pointer;
					&-select{
						background-color: $grey;
						border-radius: 5px;
						align-items: flex-start;
					}
					&-options{
						position: absolute;
						height: 100%;
						max-height: 0;
						&.active{
							max-height: 200px;
						}
						&-option{
							padding: 1rem 0.5rem;
							align-items: flex-start;
							&:hover{
								color: $white;
								background-color: $purple_h;
							}
						}
					}
				}
			}
		}
		&-name{
			&-first{
				font-weight: bold;
				font-size: 1.5rem;
				align-items: flex-start;
			}
			&-second{
				font-size: 1.1rem;
				align-items: flex-start;
			}
		}
	}
	
</style>
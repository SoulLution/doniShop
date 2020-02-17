<template>
	<div class="main">
	
		<div class="body">
			<div class="body-title">Корзина</div>

			<div class="body-results">

				<div class="row" v-for="(offer, i) in offers">
					<div class="row-content col-lg-10 col-md-8 col-sm-12">
						<div class="row-content-title">{{offer.title}}</div>
						<div class="row-content-about">Описание<div>{{offer.about}}</div></div>
						<div class="row-content-type">
							<div class="row-content-type-color">Цвет<div :style="{backgroundColor: offer.color}"></div></div>
							<div class="row-content-type-memmory">Память<div>{{offer.memmory}}</div></div>
						</div>
						<div class="row-content-buttons">
							<div class="button error">Удалить</div>
							<router-link class="button purple" :to="'/buy/' + i" >Купить</router-link>
						</div>
						
					</div>

					<div class="row-ava col-lg-2 col-md-4 col-sm-12"><img :src="offer.img"></div>
				</div>

			</div>

			<div class="body-pages">
				<div class="body-pages-page" :class="{'active': i === 0}" v-for="(page, i) in pages">{{page}}</div>
			</div>

		</div>
		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pages: 3,
				current_page: 1,
				offers: [
					{
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
						color: '#f9f6f6',
						memmory: 64
					},
					{
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
						color: '#3e3939',
						memmory: 128
					},
					{
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
						color: '#eca4a4',
						memmory: 256
					}
				],
			}
		}
	}	
</script>

<style lang="scss" scoped>
	@import '@/assets/scss/all.scss';
</style>
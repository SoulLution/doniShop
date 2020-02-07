<template>
  <div>
    <v-header />
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import Functions from '~/plugins/functions.js'
import vHeader from '~/components/header.vue'
Vue.use(Functions)
export default {
	components: { vHeader }
}
</script>

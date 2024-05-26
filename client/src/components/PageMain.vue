<template>
	<main class="page-main">
		<div class="page-main__container">
			<div class="page-main__wrap" v-for="obj in objs">
				<CardNote
					@click="toFolder(obj.title)"
					:btnDel="false"
					:btnEdit="false"
					class="page-main__card"
					:title="obj.title"
					:author="obj.author"
				/>
			</div>
		</div>
	</main>
</template>

<script>
import { useNoteStore } from '@/main'
import axios from 'axios'
import CardNote from './card/CardNote.vue'

export default {
	components: {
		CardNote,
	},
	data() {
		return {
			objs: {},
		}
	},
	setup() {
		return {
			store2: useNoteStore(),
		}
	},
	mounted() {
		axios.get(`http://localhost:7335/api/commonnote`).then(res => {
			this.objs = res.data
			console.log(res.data)
		})
	},
	methods: {
		toFolder(value) {
			this.store2.title = value
			this.$router.push({
				name: 'intoNoteFromMain',
				params: { titleNote: value },
			})
		},
	},
}
</script>

<style lang="less">
.page-main {
	&__container {
		.container();
		margin: 100px auto;
		display: flex;
		flex-wrap: wrap;
		gap: 60px;
	}
}
</style>

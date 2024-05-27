<template>
	<transition>
		<div class="pp-note">
			<div class="pp-note__container">
				<h1>Редактор папки</h1>
				<button class="pp-note__btn-close" @click="close">
					<SvgX class="pp-note__svg-cls" />
				</button>
				<div class="pp-note__form form">
					<input
						type="text"
						class="pp-note__input"
						placeholder="название"
						v-model.trim="inputData"
					/>
				</div>
				<button class="pp-note__btn" @click="edit">Edit</button>
			</div>
		</div>
	</transition>
</template>

<script>
import { useFolderStore, useUserStore } from '@/main'
import axios from 'axios'
import SvgX from '../svg/SvgX.vue'

export default {
	setup() {
		return {
			store: useUserStore(),
			store2: useFolderStore(),
		}
	},
	data() {
		return {
			inputData: '',
		}
	},

	methods: {
		edit() {
			axios
				.patch('http://localhost:7335/api/updatefolder', {
					titleold: this.store2.title,
					title: this.inputData,
					idUser: this.store.id,
				})
				.then(res => {
					console.log(res)
				})

			this.store2.title = this.inputData
			this.$emit('deleteF', false)
		},
	},
}
</script>

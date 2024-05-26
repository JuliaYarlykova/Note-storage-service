<template>
	<transition>
		<div class="pp-note">
			<div class="pp-note__container">
				<h1>Редактор конспекта</h1>
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
				<button class="pp-note__btn" @click="edit">Редактировать</button>
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
	props: {
		oldTitle: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			inputData: '',
		}
	},

	methods: {
		async edit() {
			const obj = {
				titleold: this.oldTitle,
				title: this.inputData,
				idFolder: this.store2.title,
			}
			await axios
				.patch('http://localhost:7335/api/updatenote', obj)
				.then(res => {
					console.log(res)
				})

			this.$emit('editF', { act: false, new: obj.title, old: obj.titleold })
		},
	},
}
</script>

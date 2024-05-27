<template>
	<transition>
		<div class="pp-note">
			<div class="pp-note__container">
				<h1 class="pp-note__title">Редактор папки</h1>

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
				.then(res => {})
			this.$emit('deleteF', {
				act: false,
				old: this.store2.title,
				new: this.inputData,
			})
			this.store2.title = this.inputData
		},
	},
}
</script>

<template>
	<div class="modal">
		<div class="modal__wrap">
			<button class="modal__close" @click="close">Закрыть</button>
			<h1 class="modal__title">Выберите папку</h1>
			<div class="modal__wrap-btn">
				<div class="modal__folder" v-for="folder in folders" :key="folder.id">
					<p
						class="modal__folder-name"
						@click="() => (folderName = folder.title)"
					>
						{{ folder.title }}
					</p>
				</div>
				<div class="modal__folder-name">Выбранная папка: {{ folderName }}</div>
				<button class="pp-note__btn" @click="save">Сохранить</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ModalSave',
	props: {
		folders: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			folderName: '',
			show: true,
		}
	},
	methods: {
		close() {
			this.$emit('close')
		},
		save() {
			this.$emit('save', this.folderName)
		},
	},
}
</script>

<style lang="less">
.modal {
	&__folder-name {
		cursor: pointer;
		margin-bottom: 15px;
		font-size: 20px;
		font-weight: 400;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 1;
	background-color: #00000080;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	&__wrap {
		border: 2px solid @main;
		background-color: white;
		padding: 10px 20px 10px;
		display: flex;
		flex-direction: column;
		width: 500px;
		min-height: 200px;
	}
	&__close {
		display: flex;
		margin-left: auto;
	}
}
</style>

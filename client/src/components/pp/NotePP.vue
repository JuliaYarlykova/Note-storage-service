<template>
	<transition>
		<div class="pp-note">
			<div class="pp-note__container">
				<button class="pp-note__btn-close" @click="close">
					<SvgX class="pp-note__svg-cls" />
				</button>
				<form
					action=""
					class="pp-note__form form"
					@submit.prevent="createPost()"
					ref="form"
				>
					<h2 class="pp-note__title">Создание конспекта</h2>
					<input
						type="text"
						class="pp-note__input"
						placeholder="название"
						v-model.trim="formData.title"
					/>
					<div class="input-file-row">
						<label class="input-file" v-on:change="inputChange()">
							<input class="js-input-file" type="file" name="file" multiple />
							<span>Выберите файл</span>
						</label>
						<div class="input-file__wrapper">
							<div class="input-file-list" v-for="f in fs">
								<p class="pp-note__file-item">{{ f }}</p>
								<button class="pp-note__delete-file" @click="deleteBlock(f)">
									<SvgX class="pp-note__svg-cls pp-note__svg-cls--file" />
								</button>
							</div>
						</div>
					</div>
					<div class="pp-note__btn-wrap">
						<button type="submit" class="pp-note__btn">Создать</button>
					</div>
				</form>
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
	components: {
		SvgX,
	},
	data() {
		return {
			formData: {
				title: '',
				titleFolder: this.store2.title,
			},
			file: [],
			fs: [],
		}
	},
	methods: {
		close() {
			this.$emit('close')
		},
		closeRegistration() {
			this.$parent.objs.push(this.formData)
			console.log(this.$parent.objs)
			this.$emit('close')
		},
		async createPost() {
			// await axios
			//   .post('http://localhost:7335/api/note', this.formData)
			//   .then((res) => {

			//   })
			const formData = new FormData()
			formData.append('title', this.formData.title)
			formData.append('titleFolder', this.formData.titleFolder)
			for (const file of this.file) {
				formData.append('file', file)
			}
			console.log(formData)
			await axios
				.post('http://localhost:7335/api/note', formData, {
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				})
				.then(res => {
					console.log(this.file)
					this.closeRegistration()
				})
		},
		inputChange() {
			const files = document.querySelector('.js-input-file')
			this.file.push(files.files[0])
			const file_split = files.value.split('\\')
			this.fs.push(file_split[file_split.length - 1])
		},
		deleteBlock(el) {
			const index = this.fs.indexOf(el)
			this.fs.splice(index, 1)
		},
	},
}
</script>

<style lang="less">
.input-file-row {
	display: flex;
	flex-direction: row;
	margin-bottom: 30px;
	gap: 10px;
}

.input-file__wrapper {
	display: flex;
	flex-direction: column;
}

.input-file {
	position: relative;
	display: inline-block;
}

.input-file span {
	display: block;
	width: 150px;
	cursor: pointer;
	outline: none;
	text-decoration: none;
	font-size: 14px;
	vertical-align: middle;
	color: rgb(255 255 255);
	text-align: center;
	border-radius: 20px;
	background-color: @dark_blue;
	line-height: 22px;
	height: 40px;
	padding: 10px 20px;
	box-sizing: border-box;
	border: none;
	margin: 0;
}

.input-file input[type='file'] {
	position: absolute;
	z-index: -1;
	opacity: 0;
	display: block;
	width: 0;
	height: 0;
}
/* Список файлов */
.input-file-list {
	display: flex;
	padding: 10px 0;
}
.modal-fade-enter,
.modal-fade-leave-active {
	opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity 1.5s ease;
}

.pp-note {
	box-sizing: border-box;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	padding: 90px 100px 50px;

	@supports (backdrop-filter: blur(25px)) {
		background-color: @black_40;
		backdrop-filter: blur(25px);
	}

	overflow-y: auto;
	z-index: 110;

	&__container {
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		border: solid @dark_blue;
		width: 100%;
		max-width: 518px;
		margin: auto;
		padding: 70px 40px 40px;
		background-color: @white2;
		background-position: 0 0;
		background-size: auto;
		background-repeat: repeat;
	}
	&__title {
		color: @text_color;
		margin-bottom: 10px;
	}

	&__file-item {
		width: 240px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		clear: left;
	}

	&__btn-close {
		display: flex;
		justify-content: flex-end;
		margin-top: -60px;
		margin-right: -20px;
		color: @black;
	}
	&__btn-wrap {
		display: flex;
		justify-content: center;
	}

	&__svg-cls {
		width: 24px;
		height: 24px;
		&--file {
			width: 20px;
			height: 20px;
		}
	}

	&__input {
		box-sizing: border-box;
		border-width: 2px 0px 2px;
		border-top-color: @dark_blue;
		border-bottom-color: @dark_blue;
		border-style: solid;
		width: 100%;
		background-color: @white2;
		padding: 17px 20px 16px;
		color: @black;
		font-size: 16px;
		height: 55px;
		outline: none;
		margin-bottom: 30px;

		&::placeholder {
			color: @dark_blue;
		}
	}

	&__title {
		text-align: center;
		font-size: 30px;
		font-weight: 500;
		color: @text_color;
		margin-bottom: 85px;
	}

	&__btn {
		border: none;
		color: @white1;
		background-color: @dark_blue;
		width: 226px;
		height: 52px;
		border-radius: 50px;
	}

	&__btn-bottom {
		border: none;
		width: 226px;
		height: 30px;
		color: @dark_blue;
		margin-top: 20px;
	}
}
</style>

<template>
	<div class="one-note">
		<div class="one-note__container">
			<h1 class="one-note__title">
				<span class="one-noteCommon__span">Название конспекта: </span
				>{{ title }}
			</h1>
			<h2 class="one-note__title">
				<span class="one-noteCommon__span one-noteCommon__span--folder"
					>Папка: </span
				>{{ folder }}
			</h2>
			<p class="" v-bind:style="{ color: colorText }" v-show="text !== null">
				<span class="one-noteCommon__span one-noteCommon__span--folder"
					>Текст: </span
				>{{ text }}
			</p>
			<h3
				class="one-noteCommon__span one-noteCommon__span--folder"
				v-show="fileData.name !== null"
			>
				Изображения:
			</h3>
			<div class="one-note__wrap" v-for="i in iss">
				<div class="one-note__img-wrap">
					<img v-bind:src="i" alt="" class="one-note__img js-img" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { useFolderStore, useNoteStore } from '@/main'
import axios from 'axios'
export default {
	data() {
		return {
			title: '',
			folder: '',
			text: '',
			colorText: '',
			file_link: '',
			fileData: {
				name: '',
				type: '',
				blob: '',
			},
			iss: [],
		}
	},
	setup() {
		return {
			store: useNoteStore(),
			store2: useFolderStore(),
		}
	},
	mounted() {
		axios
			.get(`http://localhost:7335/api/onenote/${this.store.title}`)
			.then(res => {
				this.title = res.data.note.title
				this.text = res.data.note.text
				this.colorText = res.data.note.colorText
				this.folder = this.store2.title
				this.fileData.name = res.data.note.name
				this.fileData.type = res.data.note.type
				this.fileData.blob = res.data.note.data
				console.log(res.data)
				this.iss = res.data.obj
				// const searchPic = new Image(100, 100);
				// searchPic.src = res.data.html;
				// const imgTag = document.querySelector('.js-img')

				// imgTag.src = searchPic.src
				// console.log(imgTag, imgTag.src, searchPic)
			})
	},
}
</script>

<style lang="less">
.one-note {
	&__container {
		.container();
		margin: 100px auto;
		display: flex;
		flex-direction: column;
		text-align: left;
		gap: 60px;
	}

	&__img {
		width: 100%;
		height: 100%;
	}
	&__img-wrap {
		width: 300px;
	}
}
</style>

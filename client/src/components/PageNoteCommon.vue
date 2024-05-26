<template>
	<div class="one-noteCommon">
		<div class="one-noteCommon__container">
			<h1 class="one-noteCommon__title">
				<span class="one-noteCommon__span">Название конспекта: </span
				>{{ title }}
			</h1>
			<p class="">
				<span class="one-noteCommon__span one-noteCommon__span--folder"
					>Текст: </span
				>{{ 'текст' }}
			</p>
			<h3 class="one-noteCommon__span one-noteCommon__span--folder">
				Изображения:
			</h3>
			<div class="one-noteCommon__wrap" v-for="i in iss">
				<img v-bind:src="i" alt="" class="one-noteCommon__img js-img" />
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
			file: '',
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
			.get(`http://localhost:7335/api/commonnote/${this.store.title}`)
			.then(res => {
				this.title = res.data.note.title
				this.folder = this.store2.title
				this.fileData.name = res.data.note.name
				this.fileData.type = res.data.note.type
				this.fileData.blob = res.data.note.data
				this.iss = res.data.obj
				// // const searchPic = new Image(100, 100);
				// // searchPic.src = res.data.html;
				// // const imgTag = document.querySelector('.js-img')

				// // imgTag.src = searchPic.src
				// // console.log(imgTag, imgTag.src, searchPic)
			})
	},
}
</script>

<style lang="less">
.one-noteCommon {
	&__span {
		color: @text_color;
		font-size: 30px;
		&--folder {
			font-size: 16px;
		}
	}
	&__container {
		.container();
		margin: 100px auto;
		display: flex;
		flex-direction: column;
		text-align: left;
		gap: 60px;
	}

	&__img {
		width: 100px;
		height: 100px;
	}
}
</style>

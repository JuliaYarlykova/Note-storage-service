<template>
	<div class="note__wrapper">
		<div class="note__text" @click="$emit('clickNote')">
			<p class="note__title">{{ title }}</p>
			<p class="note__author">{{ author }}</p>
		</div>
		<div class="note__circle"></div>
		<span
			v-show="btnEdit"
			class="material-symbols-outlined note__edit"
			@click="$emit('editBtn', { act: true, title: title })"
		>
			edit
		</span>
		<span
			v-show="btnDel"
			class="material-symbols-outlined note__delete"
			@click="$emit('deleteNote', { act: true, title: title })"
		>
			delete
		</span>
	</div>
</template>

<script>
export default {
	name: 'CardNote',
	props: {
		title: {
			type: String,
			default: '',
			required: true,
		},
		author: {
			type: String,
			default: '',
			required: true,
		},
		btnEdit: {
			type: Boolean,
			default: true,
		},
		btnDel: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style lang="less">
.input {
	box-sizing: border-box;
	border: none;
	width: 130px;
	background-color: @white1;
	padding: 5px 2px 5px;
	color: @black;
	font-size: 16px;
	margin-top: 45px;
	outline: none;
}

.note {
	&__edit {
		position: absolute;
		bottom: 0;
		left: 5px;
		color: blanchedalmond;
		cursor: pointer;
	}
	&__delete {
		position: absolute;
		bottom: 0;
		right: 5px;
		color: black;
		cursor: pointer;
	}
	&__wrapper {
		position: relative;
		width: 128px;
		height: 128px;
		background-color: @gray;
		cursor: pointer;
	}
	&__text {
		display: block;
		height: 53px;
		text-align: center;
		font-size: 16px;
		font-weight: 400;
	}
	&__circle {
		background-color: @blue;
		height: 75px;
		&::before {
			content: '';
			display: block;
			background-color: @gray;
			height: 35px;
			border-end-end-radius: 30px;
			border-bottom-left-radius: 30px;
		}
	}
}
</style>

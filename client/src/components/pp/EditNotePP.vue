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
				<button class="pp-note__btn" @click="edit">Edit</button>
			</div>
		</div>
	</transition>
</template>
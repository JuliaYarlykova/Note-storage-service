<template>
	<transition>
		<div class="pp-auth">
			<div class="pp-auth__container">
				<button class="pp-auth__btn-close" @click="close">
					<SvgX class="pp-auth__svg-cls" />
				</button>
				<form
					action=""
					class="pp-auth__form form"
					@submit.prevent="createPost()"
					ref="form"
				>
					<h2 class="pp-auth__title">Регистрация</h2>
					<input
						type="text"
						class="pp-auth__input"
						placeholder="логин"
						v-model.trim="formData.login"
						:class="{
							invalid:
								v$.formData.login.$dirty &&
								v$.formData.login.minLengthValue.$invalid,
						}"
					/>
					<p
						class="pp-auth__error"
						v-if="
							v$.formData.login.$dirty &&
							v$.formData.login.minLengthValue.$invalid
						"
					>
						Длина логина должна быть не менее 5 символов
					</p>
					<input
						type="password"
						class="pp-auth__input"
						placeholder="пароль"
						v-model.trim="formData.password"
						:class="{
							invalid:
								v$.formData.password.$dirty &&
								v$.formData.password.minLengthValue.$invalid,
						}"
					/>
					<p
						class="pp-auth__error"
						v-if="
							v$.formData.password.$dirty &&
							v$.formData.password.minLengthValue.$invalid
						"
					>
						Длина пароля должна быть не менее 5 символов
					</p>
					<input
						type="text"
						class="pp-auth__input"
						placeholder="имя"
						v-model.trim="formData.username"
					/>
					<button type="submit" class="pp-auth__btn">Зарегистрироваться</button>
					<RouterLink
						type="submit"
						class="pp-auth__btn-bottom"
						to="/auth"
						@click="close"
					>
						Уже есть аккаунт? Войти
					</RouterLink>
					<p
						class="pp-auth__error"
						v-if="
							v$.formData.login.$dirty &&
							(v$.formData.login.required.$invalid ||
								v$.formData.password.required.$invalid ||
								v$.formData.username.required.$invalid)
						"
					>
						Поля не должны быть пустыми
					</p>
				</form>
			</div>
		</div>
	</transition>
</template>

<script>
import { useUserStore } from '@/main'
import { useVuelidate } from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'
import axios from 'axios'
import SvgX from '../svg/SvgX.vue'

export default {
	setup() {
		return {
			v$: useVuelidate(),
			store: useUserStore(),
		}
	},
	components: {
		SvgX,
	},
	data() {
		return {
			success: true,
			formData: {
				login: '',
				password: '',
				username: '',
			},
		}
	},
	methods: {
		close() {
			this.$emit('close')
		},
		closeRegistration() {
			if (this.success) {
				this.$router.push('/auth')
			}
		},
		async createPost() {
			this.v$.formData.$touch()
			await axios
				.post('http://localhost:7335/api/registration', this.formData)
				.then(res => {
					console.log(res)
					this.store.hasUser = true
					this.store.login = res.data.login
					this.store.username = res.data.username
					this.store.id = res.data.id
					console.log(this.store)
					this.success = true
					this.closeRegistration()
				})
		},
	},
	validations: {
		formData: {
			login: { required, minLengthValue: minLength(5) },
			password: { required, minLengthValue: minLength(5) },
			username: { required },
		},
	},
}
</script>

<style lang="less">
.modal-fade-enter,
.modal-fade-leave-active {
	opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
	transition: opacity 1.5s ease;
}

.pp-auth {
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

	&__error {
		color: red;
		margin-bottom: 55px;
	}

	&__btn-close {
		display: flex;
		justify-content: flex-end;
		margin-top: -60px;
		margin-right: -20px;
		color: @black;
	}

	&__svg-cls {
		width: 24px;
		height: 24px;
	}

	&__form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__input {
		box-sizing: border-box;
		border-width: 2px 0px 2px;
		border-style: solid;
		border-top-color: @dark_blue;
		border-bottom-color: @dark_blue;
		width: 100%;
		background-color: @white2;
		padding: 17px 20px 16px;
		color: @text_color;
		font-size: 16px;
		height: 55px;
		outline: none;
		margin-bottom: 60px;

		&::placeholder {
			color: @placeholder_color;
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
		text-align: center;
	}
}

.invalid {
	margin-bottom: 5px;
	border-top-color: red;
	border-bottom-color: red;
}
</style>

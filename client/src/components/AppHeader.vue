<template>
    <header class="app-header">
        <div class="app-header__container">
            <div class="app-header__left-button">

                <nav class="app-header__nav">
                    <routerLink href="#" class="icon-link" to='/'>
                        <SvgHome class="home-icon"></SvgHome>
                    </routerLink>

                    <routerLink href="#" class="icon-link" to='/folder'>
                        <SvgFolder class="folder" />
                    </routerLink>
                    <button href="#" class="icon-link">
                        <SvgNote class="note"></SvgNote>
                    </button>
                </nav>
            </div>
            <button class="app-header__user-icon" @click="showModal()">
                <SvgLodIn v-show="!store.hasUser" />
                <img  src="../assets/img/user.png" alt="userIcon" class="user-icon" v-show="store.hasUser">
            </button>


        </div>
    </header>
    <AuthPP v-show="isModalVisibleReg" @close="closeModal()" />
    <LoginPP  v-show="isModalVisible" @close="closeModalAuth()" />
</template>

<script>
import { useUserStore } from '@/main';
import AuthPP from './pp/AuthPP.vue';
import LoginPP from './pp/LoginPP.vue';
import SvgFolder from './svg/SvgFolder.vue';
import SvgHome from './svg/SvgHome.vue';
import SvgLodIn from './svg/SvgLodIn.vue';
import SvgNote from './svg/SvgNote.vue';
export default {
    components: {
        SvgFolder,
        SvgHome,
        SvgNote,
        SvgLodIn,
        AuthPP,
        LoginPP
    },
    data () {
      return {
        isModalVisibleReg: false,
        isModalVisible: false,
        store:useUserStore()

      };
    },
    methods: {
      showModal() {
        this.isModalVisibleReg = true;
      },
      closeModalAuth(){
        this.isModalVisible = false;
      },
      closeModal() {
        this.isModalVisibleReg = false;
      }
    },
}
</script>

<style lang="less">



.app-header {
    background-color: @blue;

    &__container {
        .container();
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__left-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }

    &__user-icon {
        width: 50px;
        height: 50px;
        border-radius: 20px;
        background-color: @blue;
        object-fit: contain;
        overflow: hidden;
    }

    &__nav {
        display: flex;
        align-items: center;
        margin-left: auto;
    }

}

.user-icon {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

}

.icon-link {
    &+& {
        margin-left: 30px;
    }
}
</style>
<template>
    <header class="app-header">
        <div class="app-header__container">
            <div class="app-header__left-button">
                <div class="app-header__user-icon">
                    <img src="../assets/img/user.png" alt="userIcon" class="user-icon">
                </div>
                <nav class="app-header__nav">
                    <routerLink href="#" class="icon-link" to='/folder'>
                        <SvgFolder class="folder" />
                    </routerLink>
                    <button href="#" class="icon-link" >
                        <SvgNote class="note"></SvgNote>
                    </button>
                </nav>
            </div> 
            <nav class="app-header__home-page">
                <routerLink href="#" class="icon-link" to='/'>
                    <SvgHome class="home-icon"></SvgHome>
                </routerLink>
            </nav>

        </div>
    </header>
</template>

<script>
import SvgFolder from './svg/SvgFolder.vue';
import SvgHome from './svg/SvgHome.vue';
import SvgNote from './svg/SvgNote.vue';
export default {
    components: {
        SvgFolder,
        SvgHome,
        SvgNote
    },
    emits:['setActiveTab']
}
</script>

<style lang="less">
.container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;

}

@blue: #BAE9F4;
@white2: #E5E5E5;
@black: #000000;
@white1: #ffffff;
@dark_blue: #8CBEC8;



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
    &__nav{
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
.icon-link{
    & + & {
      margin-left: 30px;
    }
}
</style>
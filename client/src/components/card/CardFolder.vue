<template>
    <div class="folder__wrapper">
        <SvgFolder class="folder__icon" />
        <p class="folder__title">{{ title }}</p>
    </div>
</template>

<script>
import SvgFolder from '../svg/SvgFolder.vue';
export default {
    name: 'CardFolder',
    components: {
        SvgFolder,
    },
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}

</script>

<style lang="less">
@blue: #BAE9F4;
@white2: #E5E5E5;
@black: #000000;
@white1: #ffffff;
@dark_blue: #8CBEC8;
@gray: #F4F4F4;


.folder {
    &__wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 130px;
        height: 130px;
        background-color: @dark_blue;
        border-radius: 20px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        clear: left;
    
    }

    &__title {
        margin: 0;
        font-size: 16px;
        color: @white1;
  transition: 3s;
  width: 60%;
  text-align: center;
    }

    &__icon {
        width: 100px;
        height: 80px;
        color: @white1;
        fill: @white1;

        
    }
}
</style>
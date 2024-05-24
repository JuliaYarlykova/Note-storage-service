<template>
    <div class="message">
        <div class="message__wrap">
            <h1 class="message__title">Вы уверены?</h1>
            <div class="message__wrap-btn">
                <button class="message__btn" @click="$emit('deleteF', true)">удалить</button>
                <button class="message__btn" @click="$emit('deleteF', false)">отмена</button>
            </div>

        </div>
    </div>
</template>

<script>

export default {

}

</script>

<style lang="less">

.message{
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &__wrap{
        border: 2px solid;
        background-color: white;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    &__title{
        font-size: 30px;
        font-weight: 700;
    }
    &__btn{
        padding: 10px;
        border-radius: 5px;
        border-color: black;
        border: 2px solid;
    }
    &__wrap-btn{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
    }
}
</style>
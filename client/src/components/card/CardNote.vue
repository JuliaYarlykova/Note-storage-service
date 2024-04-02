<template>
    <div class="note__wrapper">
        <div class="note__text">
            <p class="note__title">{{ title }}</p>
            <p class="note__author">{{ author }}</p>
        </div>
        <div class="note__circle"></div>
        
    </div>
</template>

<script>

export default{
    name: 'CardNote',
    props:{
        title:{
            type:String,
            default:'',
            required: true
        },
        author:{
            type:String,
            default:'',
            required: true
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


.note{
    &__wrapper{
        width: 128px;
        height: 128px;
       background-color: @gray;
    }
    &__text{
        display: block;
        height: 53px;
        text-align: center;
        font-size: 16px;
        font-weight: 400;
    }
    &__circle{
        background-color: @blue;
        height: 75px;
        &::before{
            content:'';
            display: block;
            background-color: @gray;
            height: 35px;
            border-end-end-radius: 30px;
            border-bottom-left-radius: 30px;
        }
    }
}


</style>
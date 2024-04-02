<template>
    <main class="page-main">
        <div class="page-main__container">
            <CardNote
            class="page-folder__card"
            :title="'математика'"
            :author="'Юлия Ярлыкова'"
            />
            <CardNote
            class="page-folder__card"
            :title="'математика'"
            :author="'Юлия Ярлыкова'"
            />
            <CardNote
            class="page-folder__card"
            :title="'математика'"
            :author="'Юлия Ярлыкова'"
            />
            <CardNote
            class="page-folder__card"
            :title="'математика'"
            :author="'Юлия Ярлыкова'"
            />
            <CardNote
            class="page-folder__card"
            :title="'математика'"
            :author="'Юлия Ярлыкова'"
            />
        </div>

    </main>
</template>

<script>
import CardNote from './card/CardNote.vue';

export default{
    components:{
        CardNote
    }
}
</script>

<style lang="less">

@blue: #BAE9F4;
@white2: #E5E5E5;
@black: #000000;
@white1: #ffffff;
@dark_blue: #8CBEC8;



.container{
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
}

.page-main{
    &__container{
        .container();
        margin: 100px auto;
        display: flex;
        flex-wrap: wrap;
        gap:60px;
    }
}

</style>
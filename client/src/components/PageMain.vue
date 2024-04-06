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
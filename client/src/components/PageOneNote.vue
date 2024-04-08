<template>
    <div class="one-note">
        <div class="one-note__container">
            <h1 class="one-note__title">{{ title }}</h1>
            <h2 class="one-note__title">{{ folder }}</h2>
            <p class="one-note__file">
                {{ file }}
            </p>
        </div>
    </div>
</template>

<script>
import { useFolderStore, useNoteStore } from '@/main';
import axios from 'axios';
export default {
    data() {
        return{
            title: '',
        folder: '',
        file: []
        }
        
    },
    setup() {
        return {
            store: useNoteStore(),
            store2: useFolderStore(),
        }
    },
    mounted() {
        axios
            .get(`http://localhost:7335/api/onenote/${this.store.title}`)
            .then((res) => {
                this.title = res.data.title
                this.folder = this.store2.title
                this.file.push(res.data.file.data)
                console.log(res.data)
            })
    }

}
</script>

<style lang="less">
.one-note {
    &__container {
        .container();
        margin: 100px auto;
        display: block;
        text-align: center;
        gap: 60px;
    }
}
</style>
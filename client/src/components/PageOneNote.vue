<template>
    <div class="one-note">
        <div class="one-note__container js-img">
            <h1 class="one-note__title">{{ title }}</h1>
            <h2 class="one-note__title">{{ folder }}</h2>
            
        </div>
    </div>
</template>

<script>
import { useFolderStore, useNoteStore } from '@/main';
import axios from 'axios';
export default {
    data() {
        return {
            title: '',
            folder: '',
            file: '',
            file_link: '',
            fileData: {
                name: '',
                type: '',
                blob: ''
            }

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
                this.title = res.data.note.title
                this.folder = this.store2.title
                this.fileData.name = res.data.note.name
                this.fileData.type = res.data.note.type
                this.fileData.blob = res.data.note.data
                
                // let ndp = new DOMParser()
                // let nDoc = ndp.parseFromString(res.data.html, "text/html")
                // console.log(nDoc.document.body)
                // const imgTag = document.querySelector('.js-img')
                // const divelem = document.createElement('div')
                // divelem.append(nDoc)
                // imgTag.append(divelem)
            })
    },


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

    &__img {
        width: 100px;
        height: 100px;
    }
}
</style>
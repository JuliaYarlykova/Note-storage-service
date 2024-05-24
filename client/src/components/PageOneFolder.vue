<template>
    <div class="one-folder">
        <div class="one-folder__container">

            <div class="one-folder__wrapper">
                <div class="page-main__wrap" v-for="obj in objs">
                <CardNote @clickNote="toFolder(obj.title)" class="page-main__card" :title="obj.title" :author="obj.author" @deleteNote="del"/>
            </div>
            </div>
            <button class="one-folder__button" @click="showModal()">
                Создать конспект
            </button>
        </div>
    </div>
    <NotePP v-show="isModalVisible" @close="closeModal()" />
    <MessagePP v-show="active.act" @deleteF="deleteMes"/>

</template>

<script>
import { useFolderStore, useNoteStore } from '@/main';
import axios from 'axios';
import CardNote from './card/CardNote.vue';
import MessagePP from './pp/MessagePP.vue';

import NotePP from './pp/NotePP.vue';
export default {
    components: {
        CardNote,
        NotePP,
        MessagePP

    },
    setup() {
        return {
            store: useFolderStore(),
            store2: useNoteStore()
        }
    },
    data() {
        return {
            active: {},
            objs: [],
            isModalVisible: false

        }
    },
    mounted() {
        axios
            .get(`http://localhost:7335/api/note/${this.store.title}`)
            .then((res) => {
                this.objs = res.data
                console.log(res.data)
            })
    },
    methods:{
        deleteMes(act){
            const obj = {
                title:this.active.title,
                idUser:this.store.id
            }
           
            if (act){
                axios
                .delete(`http://localhost:7335/api/deletenote`,{data:obj} )
            .then((res) => {
                this.objs.forEach((d, index)=>d.title === this.active.title? this.objs.splice(index, 1):console.log(1))
            })
            
            this.active.act = false
            }else{
                this.active.act = false
            }
        
        },
        del(act) {
            this.active = act
        },
        toFolder(value){
            this.store2.title = value
            this.$router.push({name:'intoNote', params: {titleNote: value}})

        },
        closeModal() {
        this.isModalVisible = false;
      },
      showModal() {
        this.isModalVisible = true;
      },

    }
}
</script>

<style lang="less">
.one-folder{
    &__container{
        .container();
        margin: 100px auto ;
        display: flex;

        flex-direction: column;
        gap: 100px;
        align-items: center;
    }
    &__wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 60px;
    }
    &__button{
        .button();
    }

}
</style>
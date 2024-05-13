<template>
    <main class="page-folder">
        <div class="page-folder__container">
            <p class="page-folder__text" v-show="show">
                Вы не вошли в систему
            </p>
            <div class="page-folder__wrap">
                <div class="page-header__for"  v-for="obj in objs">
                <CardFolder @click="toFolder(obj.title)"
             class="page-folder__card"
             :title="obj.title"
              />
            </div>
            <CardFolder v-show="show_create"  v-html="title" v-on:keyup.enter="text_input()"/>
            </div>
            
            <button class="page-folder__button" v-show="!show" @click="create()">
                Создать папку
            </button>
            
        </div>

    </main>
</template>

<script>
import { useFolderStore, useUserStore } from '@/main';
import axios from 'axios';
import CardFolder from './card/CardFolder.vue';
export default{
    name:'PageFolder',
    components:{
        CardFolder
    },
    setup() {
    return {
      store: useUserStore(),
      store2: useFolderStore()
    }
  },
    data(){
        return{
            objs:[],
            show:false,
            show_create:false,
            title: "<input class='input' />",
            req:{
                title:'',
                idUser:this.store.id
            }
        }
    },
    mounted(){
        if(this.store.id !==0)
        {axios
        .get(`http://localhost:7335/api/folder/${this.store.id}`)
        .then((res)=>{
            this.objs=res.data
            console.log(this.objs)
        })}
        else{
            this.show = true
        }
    },
    methods:{
        toFolder(value){
            this.store2.title = value
            this.$router.push({name:'intoFolder', params: {title: value}})
        },
        create(){
            this.show_create = true
        },
        text_input(){
            const input = document.querySelector('.input')
            const text = input.value
            this.req.title = text
            this.show_create=false
            axios
        .post(`http://localhost:7335/api/folder`,this.req )
        .then((res)=>{
            this.objs.push({title:this.req.title})
            console.log(this.req, res)
        })

        }
    }
}
</script>

<style lang="less">



.page-folder{
    &__container{
        .container();
        margin: 100px auto ;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 100px;
    }
    &__wrap{
        display: flex;
        flex-wrap: wrap;
        
        gap: 60px;
    }
    &__text{
        text-align: center;
        font-size: 45px;
    }
    &__button{
        .button();
    }
}

</style>
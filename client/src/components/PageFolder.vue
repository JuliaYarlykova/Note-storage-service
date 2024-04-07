<template>
    <main class="page-folder">
        <div class="page-folder__container">
            <p class="page-folder__text" v-show="show">
                вы не зашли в систему
            </p>
            <div class="page-header__wrap"  v-for="obj in objs">
                <CardFolder @click="toFolder(obj.title)"
             class="page-folder__card"
             :title="obj.title"
              />
            </div>
            
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
            objs:{},
            show:false
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
        flex-wrap: wrap;
        gap: 60px;
    }
}

</style>
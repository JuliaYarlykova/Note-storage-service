<template>
    <main class="page-folder">
        <div class="page-folder__container">
            <div class="page-header__wrap"  v-for="obj in objs">
                <CardFolder
             class="page-folder__card"
             :title="obj.title"
              />
            </div>
            
        </div>

    </main>
</template>

<script>
import axios from 'axios';
import CardFolder from './card/CardFolder.vue';
export default{
    name:'PageFolder',
    components:{
        CardFolder
    },
    data(){
        return{
            objs:{}
        }
    },
    mounted(){
        axios
        .get('http://localhost:7335/folder')
        .then((res)=>{
            this.objs=res.data
            console.log(this.objs)
        })
    }
}
</script>

<style lang="less">

.container{
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 15px;
}

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
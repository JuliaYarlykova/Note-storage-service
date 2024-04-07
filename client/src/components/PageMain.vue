<template>
    <main class="page-main">
        <div class="page-main__container">
            <div class="page-main__wrap"  v-for="obj in objs">
                
            <CardNote
             class="page-main__card"
             :title="obj.title"
             :author="obj.author"
              />
            </div>
        </div>

    </main>
</template>

<script>
import axios from 'axios';
import CardNote from './card/CardNote.vue';

export default{
    components:{
        CardNote
    },
    data(){
        return{
            objs:{}
        }
    },
    mounted(){
        
        axios
        .get(`http://localhost:7335/api/commonnote`)
        .then((res)=>{
            this.objs=res.data
            console.log(res.data)
        })
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
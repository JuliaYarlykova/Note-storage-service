<script>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import PageFolder from './components/PageFolder.vue';
import PageMain from './components/PageMain.vue';

export default{
  components:{
    AppHeader,
    PageFolder,
    PageMain
  },
  data(){
    return{
      activeTab:'home'
    }
  },
  methods: {
    setActiveTab(value) {
      this.activeTab = value;
    }
  },
  mounted() {
            this.$store.commit('setAuthUser', window.auth_user);
        }
}

</script>

<template>
  <AppHeader />

  <RouterView />

</template>

<style lang="less">
* {
 margin: 0;
 padding: 0;
}
body,
html {
 font-size: 16px;
}
button {
 background-color: transparent;
 border: none;
 cursor: pointer;
}
</style>

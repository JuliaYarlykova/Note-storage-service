<template>
  <main class="pageNotes">
    <div class="pageNotes__main-container">
      <div class="pageNotes__panel">
        <div class="pageNotes__color-picker">
          <label for="color-black">
            <input type="radio" id="color-black" name="color" value="black" checked>
            <span class="radio__name">Черный</span>
          </label>
          <label for="color-black">
            <input type="radio" id="color-black" name="color" value="red" checked>
            <span class="radio__name">Красный</span>
          </label>
          <label for="color-black">
            <input type="radio" id="color-black" name="color" value="blue" checked>
            <span class="radio__name">Синий</span>
          </label>
          <label for="color-black">
            <input type="radio" id="color-black" name="color" value="green" checked>
            <span class="radio__name">Зеленый</span>
          </label>
          
        </div>
      </div>
      <div class="pageNotes__container">
        <div class="pageNotes__workplace">
          <div class="pageNotes__name">
            <h6 class="pageNotes__title">Название конспекта</h6>
            <input class="pageNotes__input-title"/>
          </div>
          <textarea class="pageNotes__textarea" placeholder="Введите текст"></textarea>
          <button class="pageNotes__save">Сохранить</button>
        </div>
      </div>
    </div>
      
    
  </main>


</template>

<script>
  import { useNoteStore, useUserStore } from '@/main';
  import axios from 'axios';
  import CardNote from './card/CardNote.vue';
  export default {
  name: 'PageNote',
  components: {
    CardNote
  },
  mounted() {
    const colorInputs = document.querySelectorAll('.pageNotes__color-picker input[type="radio"]');
    const textarea = document.querySelector('.pageNotes__textarea');

    colorInputs.forEach((input) => {
      input.addEventListener('change', () => {
        textarea.style.color = input.value;
      });
    });
  }
}
  


</script>

<style lang="less">
  .pageNotes{
    display: flex;
    &__main-container{
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      padding: 0 15px;
      display: flex;

    } 
    &__panel{
      width: 256px;
      height: 754px;
      background-color: #8CBEC8;
    }
    &__container{
      display: flex;
      position: relative;
      width: 100%;
      max-width: 1184px;
      text-align: center;
      justify-content: center;
      margin-top: 0;
      align-items: start;

    }
    &__workplace{
      display: flex;
      width: 895px;
      flex-direction: column;
      
      margin-top: 120px;
    }
    &__name{
      display: flex;
      margin-bottom: 30px;
    }
    &__title{
      display: block;
      font-size: 30px;
      margin-right: 30px;
      color: #8CBEC8;
    }
    &__input-title{
      max-width: 400px;
      border-bottom: 2px solid #8CBEC8;
      border-right:none ;
      border-top: none;
      border-left: none;
      outline: none;
    }
    &__textarea{
      width: 100%;
      border: 2px solid #8CBEC8;
      outline: #8CBEC8;
      min-height: 300px;
      font-size: 20px;
    }
    &__save{
      position: absolute;
      right: 50px;
      top: 600px;
      display: inline-block;
      box-sizing: border-box;
      padding: 5px 40px;
      background-color: #8CBEC8;
      outline: none;
      font-size: 16px;
      color: #ffffff;
      line-height: 20px;
      text-align: center;
      text-decoration: none;
      transition: color 0.2s, background-color 0.2s,border-color 0.2s;
      overflow: hidden;
      cursor: pointer;
      border: none;
      border-radius: 20px;
      
    }
    &__color-picker{
      display: flex;
      flex-direction: column;
    }

  }
</style>
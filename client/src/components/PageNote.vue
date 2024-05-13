<template>
  <main class="pageNotes">
    <div class="pageNotes__main-container">
      <p class="page-folder__text" v-show="show">Вы не вошли в систему</p>
      <div class="pageNotes__panel">
        <div class="pageNotes__title-panel">Цвет текста</div>
        <div class="pageNotes__color-picker radio">
          <label for="color-black" class="radio__label">
            <input type="radio" class="radio__input" id="color-black" name="color" value="black" checked>
            <span class="radio__mark"></span>
            <span class="radio__name">Черный</span>
          </label>
          <label for="color-red" class="radio__label">
            <input type="radio" class="radio__input" id="color-red" name="color" value="red">
            <span class="radio__mark"></span>
            <span class="radio__name">Красный</span>
          </label>
          <label for="color-blue" class="radio__label">
            <input type="radio" class="radio__input" id="color-blue" name="color" value="blue">
            <span class="radio__mark"></span>
            <span class="radio__name">Синий</span>
          </label>
          <label for="color-green" class="radio__label">
            <input type="radio" class="radio__input" id="color-green" name="color" value="green">
            <span class="radio__mark"></span>
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
    CardNote,
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
      background-color: @dark_blue;
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
      color: @dark_blue;
    }
    &__input-title{
      max-width: 400px;
      border-bottom: 2px solid @dark_blue;
      border-right:none ;
      border-top: none;
      border-left: none;
      outline: none;
    }
    &__textarea{
      width: 100%;
      border: 2px solid @dark_blue;
      outline: @dark_blue;
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
      background-color: @dark_blue;
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
      gap: 15px;
    }
    &__title-panel{
      font-size: 22px;
      color: @black;
      margin-bottom: 15px;
    }
  }

  .radio{
    display: flex;
    flex-direction: column;
    &__name{
        margin: 15px;
        font-size: 20px;
      }
      &__input{
        .is-hidden;
        &:checked{
            &~.radio__mark{
                background-color: @black;
            }
        }
      }
      &__mark{
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border-radius: 50px;
        border: 2px solid @main;
        padding: 3px;
        background-clip: content-box;
        background-color: transparent;
        transition: background-color 0.2s;

    }
      &__label{
        display: block;
        margin-bottom: 15px;
        box-sizing: border-box;
        padding-left: 23px;
        position: relative;
        min-height: 23px;
        cursor: pointer;
        &:last-child{
            margin-bottom: 0;
        }
      }
}
    
</style>
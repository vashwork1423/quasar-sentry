<template>
  <q-page class="flex flex-center">
    <div>
      <q-btn label="click error" @click="clickBtn"/>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue';

export default {
  components: {},
  setup () {
    function clickBtn(){
      getErrrrrr123123()
      throw new Error('Проверка ошибки')
    }

    return {
      clickBtn
    }
  }
}
</script>

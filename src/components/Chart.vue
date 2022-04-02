<template>
   <div class="hello">
      <VueTradingView :options="{
         symbol: 'AMEX:SPY',
         theme: 'dark',
         allow_symbol_change: true,
         height: '100%',
         width: '100%'
      }"/>
   </div>
</template>

<script>
import VueTradingView from 'vue-trading-view/src/vue-trading-view';

export default {
   name: 'Chart',
   props: {
      options: String
   },
   components: {
      VueTradingView,
   }
}
</script>
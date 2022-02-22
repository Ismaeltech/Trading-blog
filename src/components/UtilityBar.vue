<template>
   <section class="utility-bar" v-if="data">
      <div class="container">
         <div v-for="ticker in data.quoteResponse.result" :key="ticker.displayName">
            <p>
               <span>{{ ticker.symbol }} -</span>
               <span>
                  ${{ ticker.regularMarketPrice }}
               </span>
               <span :class="ticker.regularMarketChangePercent > 0 ? 'green' : 'red' ">
                  {{ `(${ticker.regularMarketChangePercent.toFixed(2)}%)` }} 
                  <span v-html="ticker.regularMarketChangePercent > 0 ? '⬆': '⬇'"></span>
               </span>
            </p>
         </div>
      </div>
   </section>
</template>

<script>
   export default {
      name: "UtilityBar",
      data() {
         return {
               data: null
         };
      },
      methods: {
         async getData() {
               try {
                  var options = {
                     method: 'GET',
                     headers: {
                           'x-api-key': 'vcv2e5rlZL5HJElyVttxe5ruKo9N6WE267mdtc7n',
                           'accept': 'application/json'
                     }
                  };
                  const response = await fetch("https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=tsla,aapl,nvda,nflx,fb,xom,amd,ba", options);
                  
                  this.data = await response.json();
                  console.log(this.data);
               } catch (error) {
                  console.log(error);
               }
         }
      },
      mounted() {
         this.getData();
      }
   };
</script>

<style lang="scss" scoped>
   .green {
      color: green;
   }

   .red {
      color: red;
   }

   .utility-bar {
      background-color: #f2f2f2;

      .container {
         padding: 0.75rem 0.5rem;
         display: flex;
         overflow-x: scroll;
         overflow-y: hidden;
         white-space: nowrap;
         -ms-overflow-style: none;  /* IE and Edge */
         scrollbar-width: none;

         @media (min-width: 1500px) {
            padding: 0.75rem 0;
            justify-content: space-between;
            margin: 0 auto;
         }
      }


      .container::-webkit-scrollbar {
         display: none;
      }

      div {
         flex: 0 0 auto;
         margin: 0 0.5rem;

         @media (min-width: 1500px) {
            margin: 0;
         }
      }

      p {
         font-size: 14px;
      }
   }
</style>
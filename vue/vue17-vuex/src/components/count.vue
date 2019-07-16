<template>
  <div>
    <div>
      <p>{{count}}</p>
      <p>{{isEvenOrOdd}}</p>      
    </div>
    <button @click='increment'>+1</button>
    <button @click='decrement'>-1</button>
    <button @click='acyncIncrement'>异步+1</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  // name:"count",
  // methods:mapActions([
  //     'increment'
  // ]),
  data() {
    return {
      num: 6
      //count:8
    };
  },
  // computed:{
  //     count(){
  //         return this.$store.state.count
  //         // return this.num + 10
  //     }
  // },
  computed: mapGetters([
    "count",
    "isEvenOrOdd"
    ]),
  methods: mapActions([
      "increment",
      "decrement", 
      "acyncIncrement"     
      ])
};
</script>
<style scoped>
    
</style>
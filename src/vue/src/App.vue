<template>
  <div id="app">
    <myheader></myheader>
    <p v-if="sensitivity.length > 0">{{ sensitivity }}</p>
    <p v-else>基準となるゲーム内感度を入力してください</p>
    <input type="text" v-model="sensitivity" />
    <button @click="set()">設定</button>
  </div>
</template>

<script>
import myheader from "./components/MyHeader";
import axios from "axios";

export default {
  components: {
    myheader,
  },
  data() {
    return {
      sensitivity: "",
    };
  },
  methods: {
    set() {
      var sen = this.sensitivity;
      axios
        .get("/api/calculate", {
          params: {
            sensitivity: sen,
          },
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

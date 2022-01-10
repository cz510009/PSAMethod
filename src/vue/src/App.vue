<template>
  <div id="app">
    <myheader></myheader>
    <p v-if="high != null">{{ msg }}</p>
    <p v-else>DPIを入力してください</p>

    <label v-if="high != null" id="high" @click="setHigh()">{{ high }}</label>
    <label v-if="mid != null" id="mid">{{ mid }}</label>
    <label v-if="low != null" id="low" @click="setLow()">{{ low }}</label>
    <br />
    <br />
    <input type="text" v-model="dpi" />
    <button @click="setDpi()">設定</button>
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
      dpi: "",
      msg: "",
      high: null,
      mid: null,
      low: null,
    };
  },
  methods: {
    setDpi() {
      let dpi = this.dpi;
      let self = this;
      axios
        .get("/api/calculate", {
          params: {
            dpi: dpi,
          },
        })
        .then(function (response) {
          self.high = response.data["high"];
          self.mid = response.data["mid"];
          self.low = response.data["low"];
          self.msg = "好みのゲーム内感度を選択してください";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    setHigh() {
      let type = "HIGH";
      let sen = this.high;
      let mid = this.mid;
      let self = this;
      axios
        .get("/api/calculate/next", {
          params: {
            sen: sen,
            mid: mid,
            type: type,
          },
        })
        .then(function (response) {
          self.high = response.data["high"];
          self.mid = response.data["mid"];
          self.low = response.data["low"];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    setLow() {
      let type = "LOW";
      let sen = this.low;
      let mid = this.mid;
      let self = this;
      axios
        .get("/api/calculate/next", {
          params: {
            sen: sen,
            mid: mid,
            type: type,
          },
        })
        .then(function (response) {
          self.high = response.data["high"];
          self.mid = response.data["mid"];
          self.low = response.data["low"];
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
#high,
#low {
  font-size: 250%;
}
#high:hover,
#low:hover {
  cursor: pointer;
}

#mid {
  font-size: 150%;
}

label {
  margin: 20px;
}
</style>

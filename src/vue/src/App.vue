<template>
  <div id="app">
    <myheader></myheader>
    <p>{{ msg }}</p>
    <div class="sen-area">
      <label v-if="high != null" id="high" @click="setHigh()">{{ high }}</label>
      <label v-if="mid != null" id="mid">{{ mid }}</label>
      <label v-if="low != null" id="low" @click="setLow()">{{ low }}</label>
    </div>
    <input type="text" v-model="dpi" placeholder="DPI" />
    <button @click="setDpi()">設定</button>
    <div class="description">
      <h3>使い方</h3>

      <ol class="process">
        <li>マウスのDPIを入力する</li>
        <li>設定ボタンをクリックする</li>
        <li>表示された高い方の感度と低い方の感度をVALORANTで設定して試す</li>
        <li>操作しやすい感度をクリックする</li>
        <li>感度をクリックしても数値が変わらなくなるまで３~4を繰り返す</li>
        <li>変わらなくなったときに真ん中に表示された感度が適切な感度です</li>
      </ol>
    </div>

    <p>参考動画</p>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/9p98yvaqZyM"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
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
      msg: "DPIを入力してください",
      high: null,
      mid: null,
      low: null,
    };
  },

  methods: {
    setDpi() {
      let dpi = this.dpi;
      let self = this;
      const pattern = /^[0-9]*$/;
      if (!pattern.test(dpi)) {
        this.msg = "DPIは半角数字で入力してください";
        return;
      }
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
          self.msg = "好みのゲーム内感度をクリックしてください";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    setHigh() {
      let sen = this.high;
      let mid = this.mid;
      let self = this;
      axios
        .get("/api/calculate/next", {
          params: {
            sen: sen,
            mid: mid,
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
      let sen = this.low;
      let mid = this.mid;
      let self = this;
      axios
        .get("/api/calculate/next", {
          params: {
            sen: sen,
            mid: mid,
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

.sen-area {
  height: 5rem;
}
li {
  box-align: center;
}
.description {
  text-align: center;
}
.process {
  display: inline-block;
  text-align: left;
}
</style>

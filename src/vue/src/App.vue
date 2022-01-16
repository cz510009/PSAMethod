<template>
  <div id="app">
    <myheader></myheader>
    <p>{{ msg }}</p>
    <div class="sen-area">
      <label v-if="high != null" id="high" @click="setHigh()">{{ high }}</label>
      <label v-if="mid != null" id="mid">{{ mid }}</label>
      <label v-if="low != null" id="low" @click="setLow()">{{ low }}</label>
    </div>
    <p v-if="ave != null">あなたの適切なAIM感度は{{ ave }}です</p>
    <input type="text" v-model="base" placeholder="基準感度" />
    <button @click="setBase()">設定</button>
    <div class="description">
      <h3>使い方</h3>

      <ol class="process">
        <li>基準となる感度を入力する</li>
        <li>設定ボタンをクリックする</li>
        <li>太字で表示された感度をゲーム内で試す</li>
        <li>操作しやすい感度をクリックする</li>
        <li>3~4を繰り返す</li>
      </ol>
      <h5>基準値の目安は以下の通りです</h5>
      <label>APEX ... 1200 ÷ マウスのDPI</label>
      <label>VALORANT ... 280 ÷ マウスのDPI</label>
      <p class="acceleration">
        ※ 加速を有効にしている場合の感度調整は非対応です
      </p>
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
      base: "",
      msg: "基準となる感度を入力してください",
      high: null,
      mid: null,
      low: null,
      count: 0,
      ave: null,
    };
  },

  methods: {
    setBase() {
      let base = this.base;
      let self = this;
      self.count = 0;
      self.ave = null;
      const pattern = /^([1-9]\d*|0)(\.\d+)?$/;
      if (!pattern.test(base)) {
        this.msg = "感度は半角数字で入力してください";
        return;
      }
      axios
        .get("/api/calculate", {
          params: {
            base: base,
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
      let count = this.count + 1;
      self.count = count;
      if (count == 6) {
        let ave = (this.high + this.mid + this.low) / 3;
        ave = Math.round(ave * 100) / 100;
        this.ave = ave;
        self.high = null;
        self.low = null;
        return;
      }
      axios
        .get("/api/calculate/next", {
          params: {
            sen: sen,
            mid: mid,
            count: count,
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
      let count = this.count + 1;
      self.count = count;
      if (count == 6) {
        let ave = (this.high + this.mid + this.low) / 3;
        ave = Math.round(ave * 100) / 100;
        this.ave = ave;
        self.high = null;
        self.low = null;
        return;
      }
      axios
        .get("/api/calculate/next", {
          params: {
            sen: sen,
            mid: mid,
            count: count,
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
.acceleration {
  color: red;
}
</style>

<template>
  <div>
    <div>
      <div style="border: 1px solid #cccccc;width: 850px;height: 600px">
        <!-- 地图 -->
        <el-amap class="amap-box" :zoom="zoom" :center="center">
          <el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events"
            :key="marker.index"></el-amap-marker>
          <el-amap-info-window v-for="window in windows" :offset="window.offset" :position="window.position"
            :content="window.content" :open="window.open" :key="window.index"></el-amap-info-window>
        </el-amap>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    getProjectCount
  } from "@/api/business/pvanduv";
  export default {
    name: "Map",
    data() {
      const vm = this;
      return {
        windows: [],
        markers: [],
        unit: "那兔网",
        address: "红色传承,经典咏流传",
        zoom: 16,
        center: [118.758453, 30.95207],
        scenicNum: '',
        cultureNum: '',
        storeNum: '',
      };
    },
    created() {},
    mounted() {
      this.getProjectCount();

    },
    methods: {
      test() {
        console.log(">>>>>>我被调用了<<<<<")
      },

      getProjectCount() {
        getProjectCount().then(res => {
          this.scenicNum = res.data.scenicNum
          this.cultureNum = res.data.cultureNum
          this.storeNum = res.data.storeNum
          this.initMap();
        })
      },
      // 初始化地图
      initMap(map) {
        this.markers.push({
          position: [118.758453, 30.95207],
        });
        // 地图信息窗体
        this.windows.push({
          position: [118.758453, 30.95207],
          content: "<div style='width: 500px;margin:10px;'>" +
            "<span style='margin: 10px'>" + this.unit +
            "</span><span style='margin-left:120px;display:inline-block;width:80px'>故事</span>" +
            "<span style='margin-left:10px;display:inline-block;width:80px'>文化</span>" +
            "<span style='margin-left:10px;display:inline-block;width:60px'>景点</span>" +
            "</div>" +
            "<div style='width: 500px;margin:10px;'>" +
            "<span style='margin: 10px'>" + this.address + "</span>" +
            "<span style='margin-left:12px;display:inline-block;width:80px;text-align:center;'>" + this.storeNum +
            "</span>" +
            "<span style='margin-left:10px;display:inline-block;width:80px;text-align:center;'>" + this.cultureNum +
            "</span>" +
            "<span style='margin-left:10px;display:inline-block;width:60px;text-align:center;'>" + this.scenicNum +
            "</span>" +
            "</div>",
          offset: [0, 200],
          open: true
        });
      },
      // // 提交方法
      sure() {
        const vm = this;
        this.$emit("updateLocation", vm.dataForm);
      },

      windowInfo() {

      }
    },
  };
</script>
<style lang="scss" scoped>
  .amap-box {
    //height: 44vh;
    //height: calc(100vh - 45px);
    height: 100% !important;
  }

  .el-vue-search-box-container {
    // top: 45px;
    width: 100% !important;
  }

  .search-box {
    position: absolute;
    z-index: 5;
    width: 70%;
    left: 13%;
    top: 10px;
    height: 30px;
  }

  .search-box .el-input {
    float: left;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 0 7px 7px 0;
    outline: none;
    position: relative;
  }

  .search-box .el-button {
    position: absolute;
    right: 0;
    top: 1px;
    width: 20%;
    background: #38a28a;
    border-radius: 0 7px 7px 0;
    border: none;
    color: #fff;
    outline: none;
  }

  .tip-box {
    text-align: center;
    width: 100%;
    position: absolute;
    top: 35px;
    padding: 10px 0;
    background-color: #fff;
    opacity: 0.8;
  }
</style>

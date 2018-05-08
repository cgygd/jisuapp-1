<template>
  <div class="seckill">
    <ul :class="getContent(widgetdata.id,'css')">
      <li class="goods-list-item" v-for="(v,i) in 3" :key="i" :style="getStyleStr(widgetdata.id)">
        <img src="../../assets/default.png" :style="getStyleStr(widgetdata.id,'imgStyle')">
        <div class="title-container">
          <p class="title" :style="getStyleStr(widgetdata.id,'titleStyle')">秒杀商品标题</p>
          <div class="transverse">
            <div>
              <span class="price">￥100</span>
              <div class="countdown"><label>已结束</label><span class="date">00</span>:<span class="date">00</span>:<span class="date">00</span></div>
            </div>
            <div class="oldprice-wrap">
              <span class="oldprice">￥200</span>
              <div class="seckill-progress-wrap">
                <span>已售0%</span>
                <div class="seckill-progress">
                  <span style="width:20%;"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="vertical">
            <div>
              <span class="price">￥100</span>
              <span class="oldprice">￥200</span>
            </div>
            <div class="seckill-progress-wrap">
              <span>已售0%</span>
              <div class="seckill-progress">
                <span style="width:20%;"></span>
              </div>
            </div>
            <div class="countdown"><label>已结束</label><span class="date">00</span>:<span class="date">00</span>:<span class="date">00</span>
              </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters} from 'Vuex'
export default {
  name: 'widgetSeckill',
  props: ['widgetdata'],
  computed: {
    ...mapGetters([
      'getStyleStr',
      'getContent'
    ])
  }
}
</script>
<style scoped>
.seckill {
  width: auto;
  max-width: 100%;
  font-size: 0;
  box-sizing: border-box;
}
.one-mode .goods-list-item {
  position: relative;
  padding-left: 10px;
  box-sizing: border-box;
  width: 100%;
}
.one-mode .goods-list-item img {
  display: inline-block;
  vertical-align: middle;
}
.one-mode .vertical,.thrid-mode .transverse,.sec-mode .transverse {
  display: none;
}
.sec-mode .goods-list-item {
  position: relative;
  width: 50%;
  display: inline-block;
}
.sec-mode .goods-list-item img {
  display: block;
  width: 160px;
  height: 160px;
}
.sec-mode .title-container,.thrid-mode .title-container {
  width: 100%;
}
.thrid-mode {
  overflow-x: scroll;
  white-space: nowrap;
}
.thrid-mode::-webkit-scrollbar {
  height: 0;
  width: 0;
  border-radius: 0;
}
.thrid-mode .goods-list-item {
  position: relative;
  /* width: 140px; */
  display: inline-block;
  margin-right: 10px;
}
.thrid-mode .goods-list-item img {
  width: 140px;
  height: 140px;
  display: block;
}
.title-container {
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 70px);
  box-sizing: border-box;
}
.title-container .title {
  width: 100%;
  padding: 0 10px;
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  word-break: break-all;
  box-sizing: border-box;
  font-size: 15px;
}
.transverse {
  width: 240px;
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  padding: 0 10px;
  font-size: 15px;
}
.vertical {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 15px;
}
.vertical .countdown, .vertical .seckill-progress-wrap {
  float: none;
  margin-top: 5px;
}
.sec-mode .seckill-progress {
  width: 78px;
}
.price {
  color: #f60;
  margin-right: 10px;
  font-size: 16px;
}
.countdown {
  float: right;
  background: #f1f2f6;
  height: 20px;
  padding: 0 3px;
  font-size: 10px;
  color: #666;
  line-height: 20px;
  text-align: center;
  border-radius: 3px;
}
.countdown label {
  vertical-align: middle;
}
.date {
  height: 14px;
  margin: 3px 2px;
  padding: 0 3px;
  border-radius: 4px;
  background: #9a9a9a;
  color: #fff;
  vertical-align: top;
}
.oldprice-wrap {
  margin-top: 5px;
}
.oldprice {
  font-size: 10px;
  color: #a8a8a8;
  text-decoration: line-through;
}
.seckill-progress-wrap {
  float: right;
  font-size: 10px;
  color: #999;
}
.seckill-progress {
  display: inline-block;
  margin-left: 10px;
  width: 60px;
  height: 6px;
  border-radius: 5px;
  border: 1px solid #9a9a9a;
  font-size: 0;
  overflow: hidden;
}
.seckill-progress span {
  height: 100%;
  background: #fa6583;
  border-radius: 5px;
  float: left;
}
</style>

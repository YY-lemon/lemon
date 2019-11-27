<template>
  <div id='dashBoard'>
    <van-tabbar v-model="active"
                :safe-area-inset-bottom=true
                :fixed=true
                active-color="#75a342">
      <van-tabbar-item v-for="(item,index) in tabbarList"
                       :key="index">
        <span :class="currentIndex === index ? active : ''">{{item.title}}</span>
        <img slot="icon"
             slot-scope="props"
             :src="props.active ? item.active : item.normal">
      </van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>
           
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      active: 0, // 当前选中标签的名称或索引值
      tabbarList: [
        {
          name: "home",
          title: "首页",
          normal: require("@/assets/images/tabbar/home_default.png"),
          active: require("@/assets/images/tabbar/home_selected.png")
        },
        {
          name: "category",
          title: "分类",
          normal: require("@/assets/images/tabbar/category_default.png"),
          active: require("@/assets/images/tabbar/category_selected.png")
        },
        {
          name: "eat",
          title: "吃什么",
          normal: require("@/assets/images/tabbar/eat_default.png"),
          active: require("@/assets/images/tabbar/eat_selected.png"),
        },
        {
          name: "cart",
          title: "购物车",
          normal: require("@/assets/images/tabbar/shoppingcart_default.png"),
          active: require("@/assets/images/tabbar/shoppingcart_selected.png"),
          num: 5
        },
        {
          name: "mine",
          title: "我的",
          normal: require("@/assets/images/tabbar/mine_default.png"),
          active: require("@/assets/images/tabbar/mine_selected.png")
        }
      ]
    }
  }
}
</script>
<style lang='less' scoped>
#dashBoard {
  width: 100%;
  height: 100%;
}
</style>
# wx-scroll-view
### 微信小程序fixed定位scroll-view滚动失效问题

**如图微信小程序中 scroll-view组件外div加display：flxed后， scroll-view组件滚动失效**

![https://github.com/fancaixia/wx-scroll-view/blob/master/pic/001.png](https://github.com/fancaixia/wx-scroll-view/blob/master/pic/001.png)

##### 解决办法：

1. scroll-view宽度为屏幕宽度，

2. 子元素view.cont设置overflow:auto;内容超出屏幕会出滚动条，然后便可以拖动了，

3. 最外层header设置overflow-y: hidden;隐藏滚动条，实现了模拟scroll-view的效果

4. 点击view.green时 设置元素cur为当前点击view的offsetLeft

##### 示例代码

```html
<view class="header">
          <scroll-view class="scroll-view_H" scroll-x="{{true}}">
            <view class="cont">
                <view class="list">
                      <view class="green" wx:for="{{tags}}" wx:key="{{index}}" bindtap='fnclick'>{{item}}</view>
                  </view>
                <view class="cur" style='left:{{left}}px'></view>
            </view>
          </scroll-view>
 </view>
```
```css
.header{
  background: #fff;
  position: fixed;
  z-index: 200;
  top:0;
  left: 0;
  height: 60rpx;
  overflow-y: hidden;
}
.header .cont{
  white-space: nowrap;
  position: relative;
  height: 90rpx;
  overflow:auto;
  width:750rpx;

}
.header .cont .list view{
 width: 120rpx;
 display: inline-block;
 text-align: center;
font-size: 30rpx;
}
.cur{
  position: absolute;
  left: 0;
  bottom: 30rpx;
  width: 70rpx;
  height: 6rpx;
  background: yellow;
  margin-left: 25rpx;
  transition: .5s all ease;
}

```
```js
Page({
     data:{
      tags:[
          "日用",
          "目镜", 
          "家居", 
          "smile", 
          "男装",
          "smile",
          "虫子", 
          "smile", 
          "smile", 
          "推荐", 
          "推荐"
      ],
      left:0,
    },
    onLoad(){
    },
    // 导航条鼠标跟随
    fnclick(ev){
      this.setData({
        left:ev.target.offsetLeft
      })

    },

})
```

### 如果这篇文章对你有帮助，请帮忙扫描二维码，或微信搜索小程序(幼教学园)，帮忙点击页面，感谢
![https://github.com/fancaixia/wx-scroll-view/blob/master/pic/youjiaoxueyuan.png](https://github.com/fancaixia/wx-scroll-view/blob/master/pic/youjiaoxueyuan.png)



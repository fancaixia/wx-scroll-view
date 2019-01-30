
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

// components/tag/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String
    },
    shape: {
      type: Number,
      value: 0
    } //0:半圆角 1:圆角长方形 
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function (e) {
      this.triggerEvent('tag-tap', {
        text: this.properties.text
      });
    }
  }
})
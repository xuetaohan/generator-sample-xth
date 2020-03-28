<template>
  <div id="app">
    <my-header custom-title="通讯录" custom-fixed>
      <button @touchstart="backBtn" slot="left">返回</button>
      <button @touchstart="homeBtn" slot="right">主页</button>
    </my-header>
    <my-list :user-data="userData"></my-list>
  </div>
</template>

<script>
  let userData = [
    {
      "index": "A", "users": [
        { "name": "a1", "tel": "13011111111" },
        { "name": "a2", "tel": "13011111112" },
        { "name": "a3", "tel": "13011111113" },
      ]
    },
    {
      "index": "B", "users": [
        { "name": "b1", "tel": "13011111114" },
        { "name": "b2", "tel": "13011111115" },
        { "name": "b3", "tel": "13011111116" },
      ]
    },
    {
      "index": "C", "users": [
        { "name": "c1", "tel": "13011111117" },
        { "name": "c2", "tel": "13011111118" },
        { "name": "c3", "tel": "13011111119" },
      ]
    },
    {
      "index": "D", "users": [
        { "name": "d1", "tel": "13011111121" },
        { "name": "d2", "tel": "13011111122" },
        { "name": "d3", "tel": "13011111123" },
      ]
    },
    {
      "index": "E", "users": [
        { "name": "e1", "tel": "13011111124" },
        { "name": "e2", "tel": "13011111125" },
        { "name": "e3", "tel": "13011111126" },
      ]
    },
    {
      "index": "F", "users": [
        { "name": "f1", "tel": "13011111127" },
        { "name": "f2", "tel": "13011111128" },
        { "name": "f3", "tel": "13011111129" },
      ]
    },
  ];
  export default {
    name: 'app',
    data:function(){
      return {
        userData:userData
      }
    },
    methods: {
      backBtn: function () {

      },
      homeBtn: function () {

      }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0
  }

  li {
    list-style: none;
  }
</style>
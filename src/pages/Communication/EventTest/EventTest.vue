<template>
  <div>
    <h1>EventTest组件</h1>
    <button @click="test1">测试原生事件</button>
    <button @click="test1($event)">测试原生事件</button>
    <br />
    <br />
    <Event1 @click.native="test2" />
    <br />
    <br />
    <Event2 @click="test3" @xxx="test4" />
    <Event2 @click="test3($event)" @xxx="test4($event)" />
  </div>
</template>

<script type="text/ecmascript-6">
import Event1 from './Event1.vue'
import Event2 from './Event2.vue'

export default {
  name: 'EventTest',

  components: {
    Event1,
    Event2,
  },

  methods: {
   test1(event){
     alert(event.target.innerHTML)
   },
   test2(event){
     alert('test2'+event.target.innerHTML)
   },
   test3(data){
     alert('test3---'+ data)
   },
   test4(data){
     alert('test4()---'+data.name)
   }
  }
}
</script>

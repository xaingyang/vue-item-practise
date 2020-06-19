<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <HintButton
      title="添加"
      type="primary"
      icon="el-icon-plus"
      size="mini"
      @click="add"
    >
    </HintButton>
    <HintButton
      title="修改"
      type="info"
      icon="el-icon-edit"
      size="mini"
      @click="update"
    >
    </HintButton>
    <HintButton
      title="删除"
      type="danger"
      icon="el-icon-delete"
      size="mini"
      @click="remove"
    >
    </HintButton>
    <HintButton
      title="添加"
      type="primary"
      icon="el-icon-plus"
      size="mini"
      @click="add"
    >
    </HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
import HintButton from './HintButton'
export default {
  name: 'AttrsListenersTest',
  components:{
    HintButton
  },

  methods: {
    add() {
      alert('add()')
    },
    update(){
      alert('update()')
    },
     remove() {
      alert('remove()')
    }
  },
}
</script>

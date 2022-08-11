<template>
  <div class="containers">
    <!--画图面板、工具栏-->
    <div class="canvas" ref="canvas"></div>
    <!--属性面板-->
    <panel v-if="bpmnModeler" :modeler="bpmnModeler"/>
    <!--操作按钮-->
    <div class="toolbar">
      <a ref="saveDiagram" href="javascript:" title="download BPMN diagram">下载BPMN</a>
      <a ref="saveSvg" href="javascript:" title="download as SVG image">下载SVG</a>
    </div>
  </div>
</template>

<script>
  import BpmnModeler from 'bpmn-js/lib/Modeler' // 引入 bpmn-js
  import panel from '../components/PropertyPanel' // 属性面板

  export default {
    components: {
      panel
    },
    data() {
      return {
        bpmnModeler: null
      }
    },
    methods: {
      createNewDiagram() {
        const bpmnXmlStr = `
      <?xml version="1.0" encoding="UTF-8"?>
<bpmn2:definitions xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd">
  <bpmn2:process id="process1567044459787" name="流程1567044459787">
    <bpmn2:documentation>描述</bpmn2:documentation>
    <bpmn2:startEvent id="StartEvent_1" name="开始">
      <bpmn2:outgoing>Flow_0tdp37m</bpmn2:outgoing>
    </bpmn2:startEvent>
    <bpmn2:sequenceFlow id="Flow_0tdp37m" sourceRef="StartEvent_1" targetRef="Activity_0q6pvc2" />
    <bpmn2:userTask id="Activity_0q6pvc2" name="填写申请单" category="apply">
      <bpmn2:extensionElements>
        <bpmn2:taskListener event="create" delegateExpression="taskExpressionListener"></bpmn2:taskListener>
      </bpmn2:extensionElements>
    </bpmn2:userTask>
  </bpmn2:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="process1567044459787">
      <bpmndi:BPMNEdge id="Flow_0tdp37m_di" bpmnElement="Flow_0tdp37m">
        <di:waypoint x="220" y="82" />
        <di:waypoint x="270" y="82" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="184" y="64" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="191" y="40" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_017gv3c_di" bpmnElement="Activity_0q6pvc2">
        <dc:Bounds x="270" y="42" width="100" height="80" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn2:definitions>

      `
        // 将字符串转换成图显示出来
        this.bpmnModeler.importXML(bpmnXmlStr, (err) => {
          if (err) {
            console.error(err)
          }
        })
      },
      // 下载为SVG格式,done是个函数，调用的时候传入的
      saveSVG(done) {
        // 把传入的done再传给bpmn原型的saveSVG函数调用
        this.bpmnModeler.saveSVG(done);
      },
      // 下载为SVG格式,done是个函数，调用的时候传入的
      saveDiagram(done) {
        // 把传入的done再传给bpmn原型的saveXML函数调用
        this.bpmnModeler.saveXML({ format: true }, function(err, xml) {
          done(err, xml);
        });
      },
      // 当图发生改变的时候会调用这个函数，这个data就是图的xml
      setEncoded(link, name, data) {
        // 把xml转换为URI，下载要用到的
        const encodedData = encodeURIComponent(data);
        // 获取到图的xml，保存就是把这个xml提交给后台
        this.xmlStr = data;
        // 下载图的具体操作,改变a的属性，className令a标签可点击，href令能下载，download是下载的文件的名字
        if (data) {
          link.className = "active";
          link.href = "data:application/bpmn20-xml;charset=UTF-8," + encodedData;
          link.download = name;
        }
      }
    },
    mounted() {
      const canvas = this.$refs.canvas
      // 生成实例
      this.bpmnModeler = new BpmnModeler({
        container: canvas
      })

      // 获取a标签dom节点
      const downloadLink = this.$refs.saveDiagram;
      const downloadSvgLink = this.$refs.saveSvg;
      // 监听流程图改变事件
      const _this = this;
      this.bpmnModeler.on("commandStack.changed", function() {
        _this.saveSVG(function(err, svg) {
          _this.setEncoded(downloadSvgLink, "diagram.svg", err ? null : svg);
        });
        _this.saveDiagram(function(err, xml) {
          _this.setEncoded(downloadLink, "diagram.bpmn", err ? null : xml);
        });
      })

      this.createNewDiagram() // 新增流程定义
    }
  }
</script>

<style lang="scss">
  /*左边工具栏以及编辑节点的样式*/
  @import '~bpmn-js/dist/assets/diagram-js.css';
  @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
  @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
  @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';

  .containers {
    position: absolute;
    background-color: #ffffff;
    width: 100%;
    height: 100%;

    .canvas {
      width: 100%;
      height: 100%;
    }

    .bjs-powered-by {
      display: none;
    }

    .panel {
      position: absolute;
      right: 0;
      top: 50px;
      width: 300px;
    }
    .toolbar {
      position: absolute;
      top: 20px;
      right: 350px;
      a {
        text-decoration: none;
        margin: 5px;
        color: #409eff;
      }
    }
  }
</style>


### 安装
````vuejs 
npm install --registry=https://registry.npm.taobao.org
````



### 去掉url中的#号(需要服务器支持)
* src/router/index.js
````vuejs 
const createRouter = () => new Router({
  mode: 'history', // require service support,去掉url中的#号，使用#号请注释这行代码
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
````

### 修改项目名称
* 相关地方全部引用这里的变量
* src/settings.js
````vue
  title: '凡业科技低代码开发框架',
  logo:'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
````

### 新增组件

#### font-awesome
````vue
npm install --save font-awesome --registry=https://registry.npm.taobao.org
````
修改 src/main.js 增加
````vue
import 'font-awesome/scss/font-awesome.scss'
````
#### treeselect
````vue
npm install --save @riophae/vue-treeselect --registry=https://registry.npm.taobao.org
````
### 时间格式化
```vue
{{value.formatDate}}  //默认时间格式为 yyyy-MM-dd hh:mm:ss
{{value.formatDate('yyyy-MM-dd')}}  //指定时间格式 yyyy-MM-dd
```

### 拖拽表格
npm install sortablejs --save-dev --registry=https://registry.npm.taobao.org

npm install jquery --registry=https://registry.npm.taobao.org

git提交不了
删除package.json中husky的
    "hooks": {
      "pre-commit": "lint-staged"
    }
    
    
### 构建
1. 如果你的数据不是模拟的,则需要将/src/main.js中的以下代码注释掉
    
    import { mockXHR } from '../mock'
    if (process.env.NODE_ENV === 'production') {
      mockXHR()
    }
    // 将以上代码注释掉!

2. 然后对根目录中名为.env.production的配置文件做以下修改
    
    base api
    将原有的 VUE_APP_BASE_API 用 # 号注释掉或者直接删除
    VUE_APP_BASE_API = '/prod-api'
    将你使用的服务地址填到 VUE_APP_BASE_API 后面
    VUE_APP_BASE_API = 'http://203.195.***.***:6677'

3. 同时，根目录中vue.config.js中的publicPath: '/' 要改为publicPath: './'
    
4. 运行命令打包正式环境
    
    npm run build:prod
    构建打包成功之后，会在根目录生成 dist 文件夹，里面就是构建打包好的文件
    
5. 发布
    
    将打包生成的dist目录放到Apache服务器的根目录/var/www/html/dist中
    访问的方式为
    
    www.xxx.cn/dist
    或者
    203.195.xxx.xxx/dist
    
### 安装富文本插件,图片大小调整控件，图片拖拽上传控件
```vuejs
npm install vue-quill-editor --save --registry=https://registry.npm.taobao.org
npm install quill-image-resize-module --save --registry=https://registry.npm.taobao.org

npm install quill-image-extend-module --save --registry=https://registry.npm.taobao.org
npm install quill-video-extend-module --save --registry=https://registry.npm.taobao.org

npm uninstall vue-quill-editor
npm uninstall quill-image-resize-module
npm uninstall quill-image-extend-module
npm uninstall quill-video-extend-module

```
局部引用，在需调用的vue页面中声明
````vuejs
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor
  }
}
````
### 安装请求参数，数组处理问题
````shell script
npm install qs --registry=https://registry.npm.taobao.org
````

npm i vue-uuid --save --registry=https://registry.npm.taobao.org

npm install @growthbunker/vuetimeline --registry=https://registry.npm.taobao.org

npm install --save moment --registry=https://registry.npm.taobao.org

npm install quill-better-table --save --registry=https://registry.npm.taobao.org
npm install quill@2.0.0-dev.3 --save --registry=https://registry.npm.taobao.org
npm uninstall quill@2.0.0-dev.3

### 富文本插件
npm install vue-froala-wysiwyg --save --registry=https://registry.npm.taobao.org

npm install plupload --save --registry=https://registry.npm.taobao.org
npm uninstall plupload

### 解决图标乱码
npm uninstall node-sass
npm install sass -S -D --registry=https://registry.npm.taobao.org

### 升级mock
npm uninstall mockjs
npm install mockjs --registry=https://registry.npm.taobao.org

### 升级axios,解决文件上传报错问题，但是进度条在正式环境下还是不能显示
npm uninstall axios
npm install axios --registry=https://registry.npm.taobao.org

### 解决axios在正式环境下上传文件时获取不了进度
````vuejs
// 解决axios在正式环境下上传文件时获取不了进度
MockXMLHttpRequest.prototype.upload = createNativeXMLHttpRequest().upload
````
node_modules/mockjs/src/mock/xhr/xhr.js 210行 添加

node_modules/mockjs/dist/mock.js 8306行 添加


npm uninstall @yichenlei/vue-component
npm install @yichenlei/vue-component  --save
npm install @yichenlei/vue-component  --save --registry=https://registry.npm.taobao.org

// 将html页面转换成图片
npm install html2canvas --force --save --registry=https://registry.npm.taobao.org
npm install jspdf --save  --registry=https://registry.npm.taobao.org


cnpm install camunda-bpmn-moddle
cnpm install bpmn-js-properties-panel
cnpm install --save camunda-bpmn-moddle

cnpm install bpmn-js
cnpm install @dagrejs/graphlib

### Yeoman(通用型脚手架工具)

1. 明确需求
2. 找到合适的Generator
3. 全局范围安装找到的Generator
4. 通过Yo运行对应的Generator
5. 通过命令行交互填写选项
6. 生成你所需要的项目结构

### Vue Generator

1. 创建文件目录 `mkdir filename（以generator-sample为例）`

2. 进入文件目录并生成package.json文件`cd generator-sample,yarn init`

3. 生成基础yeoman-generator配置包`yarn add yeoman-generator`

4. 当前文件目录下创建主入口文件`generators/app/index.js`

   ``` javascript
   const Generator = require('yeoman-generator');
   
   module.exports = class extends Generator {
       prompting () {
   		return this.prompt([{
               type: 'input',
               name: 'name',
               message: 'Your project name',
               default: this.appname
           }])
           .then(answers => {
               this.answers=answers;
           })
       }
       
       write () {
           //把每一个文件都通过模板转换到目标路径
           const templates=[
               '.babelrc',
               '.editorconfig',
               '.gitignore',
               'index.html',
               'package.json',
               'README.md',
               'webpack.config.js',
               'dist/build.js',
               'dist/build.js.map',
               'src/Alert.js',
               'src/Alert.vue',
               'src/App.vue',
               'src/Head.vue',
               'src/List.vue',
               'src/main.js',
               'src/assets/logo.png'
           ];
           templates.forEach(item=>{
               //item => 每个文件路径
               this.fs.copyTpl(
               	this.templatePath(item),
                   this.destinationPath(item),
                   this.answers
               )
           })
       }
   }
   ```

5. 在generaors/app目录下创建templates目录，将构建好的完整的脚手架工程（vue或react）放到templates下

6. 通过`yarn link`的方式把generator-sample模块link到全局

7. templates目录下的脚手架工程的项目名称用模板语法替换名称（例如：package.json下的name属性修改为`"<%= name %>"`,如果页面中有要保持原始状态的模板标签语法，则修改为`<%== ... %>`）即可

8. 最后在自己创建的目录下运行yo sample `此处为 generator- 后的名称即可`
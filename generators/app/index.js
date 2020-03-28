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
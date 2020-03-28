import Vue from 'vue'
import Alert from './Alert.vue'


let myAlert = (function () {
    let defaults = {
        title: '',
        body: '',
        confirm: null,
        cancel: null
    };
    let MyComponent = Vue.extend(Alert);
    return function (opts) {
        for (let attr in opts) {
            defaults[attr] = opts[attr];
        }
        let vm = new MyComponent({
            el: document.createElement('div'),
            data: {
                customTitle: defaults["title"],
                customBody: defaults["body"],
                confirm: defaults["confirm"],
                cancel: defaults["cancel"]
            }
        });
        document.body.appendChild(vm.$el);
    }
})();

export default myAlert;
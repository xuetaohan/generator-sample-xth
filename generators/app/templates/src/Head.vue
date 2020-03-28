<template>
    <div id="header" :style="{'position':customFixed?'fixed':'absolute'}">
        <slot name="left">返回</slot>
        {{customTitle}}
        <slot name="right">主页</slot>
    </div>
</template>
<script>
    export default {
        name: 'my-header',
        props: {
            'customTitle': {
                type: String,
                default: '标题'
            },
            'customFixed': {
                type: Boolean,
                default: false
            }
        }
    }
</script>
<style>
    #header {
        width: 100%;
        height: 40px;
        background: #666;
        color: #fff;
        text-align: center;
        line-height: 40px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }

    #header button {
        height: 100%;
        padding: 0 5px;
    }

    #header button:first-child {
        float: left;
    }

    #header button:last-child {
        float: right;
    }
</style>
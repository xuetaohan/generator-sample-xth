<template>
    <div id="alert" ref="alert">
        <div class="alert_content">
            <div class="alert_title">{{customTitle}}</div>
            <div class="alert_body">{{customBody}}</div>
            <div class="alert_btn">
                <button v-if="confirm" @touchstart="confirm">确定</button>
                <button v-if="cancel" @touchstart="cancel">取消</button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>
    #alert {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 20;
        display: flex;
    }

    #alert .alert_content {
        width: 200px;
        height: 150px;
        background: #fff;
        border-radius: 5px;
        margin: auto;
        position: relative;
    }

    #alert .alert_title {
        padding: 5px;
        border-bottom: 1px solid #ccc;
    }

    #alert .alert_body {
        line-height: 50px;
        height: 50px;
        text-align: center;
    }

    #alert .alert_btn {
        position: absolute;
        right: 0;
        bottom: 0;
    }

    #alert .alert_btn button {
        margin: 10px;
        padding: 5px;
    }
</style>
<template>
    <div id="list">
        <ul class="list_user" ref="listUser" @touchmove="bMove=true">
            <li v-for="item in userData">
                <p>{{item.index}}</p>
                <ul>
                    <li @touchend="showTel(user.tel)" v-for="user in item.users">{{user.name}}</li>
                </ul>
            </li>
        </ul>
        <ul class="list_index" ref="listIndex">
            <li @touchstart="setScroll" v-for="item in userIndex">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    import myAlert from './Alert.js'
    export default {
        name: 'my-list',
        props: {
            'user-data': {
                type: Array,
                default: function () {
                    return [];
                }
            }
        },
        computed: {
            userIndex: function () {
                return this.filterIndex(this.userData);
            }
        },
        data: function () {
            return { bMove: false };
        },
        methods: {
            filterIndex: function (data) {
                let result = data.map(function (val, idx) {
                    if (val.index) {
                        return val.index;
                    }
                });
                return result;
            },
            setListIndexPos: function () {
                let iH = this.$refs.listIndex.offsetHeight;
                this.$refs.listIndex.style.marginTop = "-" + iH / 2 + "px";
            },
            setScroll: function (ev) {
                let aP = this.$refs.listUser.getElementsByTagName("p");
                Array.from(aP).map(function (oP) {
                    if (ev.target.innerHTML == oP.innerHTML) {
                        //顶部存在<!DOCTYPE HTML>声明时，document.body.scrollTop不起作用，需要使用document.documentElement.scrollTop
                        document.body.scrollTop = aP[i].offsetTop;
                        document.documentElement.scrollTop = aP[i].offsetTop;
                    }
                });
            },
            showTel: function (tel) {
                if (!this.bMove) {
                    myAlert({
                        title: '呼叫',
                        body: tel,
                        confirm: function () {
                        },
                        cancel: function () {
                            document.body.removeChild(document.getElementById("alert"));
                        }
                    })
                } else {
                    this.bMove = false;
                }
            }
        },
        mounted: function () {
            this.setListIndexPos();
        }
    }
</script>
<style>
    #list {
        position: relative;
        top: 40px;
        overflow: hidden;
    }

    #list .list_user p {
        background: #ccc;
        padding-left: 10px;
    }

    #list .list_user ul li {
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        padding-left: 10px;
    }

    #list .list_index {
        position: fixed;
        right: 10px;
        top: 50%;
        font-size: 20px;

    }

    #list .list_index li {
        margin: 5px 0;
    }
</style>
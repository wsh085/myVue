<template>
    <div class="app">
        <div class="app-header">
            <div class="app-header-logo">
                <img src="./assets/logo.png">
            </div>
            <div class="app-header-login">
                <ul>
                    <li @click="loginShowDialog()">登录</li>
                    <li @click="registShowDialog()">注册</li>
                    <li @click="aboutShowDialog()">关于</li>
                </ul>
            </div>
        </div>
        <div class="app-content">
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <div class="app-footer">
            <p>&copy;2017 fishenal MIT</p>
        </div>
        <my-dialog :isShow="loginShow" @on-close="closeDialog()">
        </my-dialog>
        <my-dialog :isShow="registShow" @on-close="closeDialog()">
        </my-dialog>
        <my-dialog :isShow="aboutShow" @on-close="closeDialog()">
        </my-dialog>
    </div>
</template>

<script>
import myDialog from "@/components/Dialog"
export default {
    components:{
        myDialog
    },
    data(){
        return {
            msg:"helloworld",
            loginShow:false,
            registShow:false,
            aboutShow:false
        }
    },
    methods: {
        loginShowDialog(){
            this.registShow = false;
            this.aboutShow = false;
            this.loginShow = true;
        },
        registShowDialog(){
            this.loginShow = false;
            this.aboutShow = false;
            this.registShow = true;
        },
        aboutShowDialog(){
            this.loginShow = false;
            this.registShow = false;
            this.aboutShow = true;
        },
        closeDialog(){
            this.loginShow = false;
            this.registShow = false;
            this.aboutShow = false;
        }
    }
}
</script>

<style scoped>
/* 头部部分 */
.app-header{
    width:100%;
    background-color:#363636;
    height: 90px;
    line-height:90px;
    color:#b2b2b2;
}
/* 头部 logo 部分 */
.app-header .app-header-logo{
    float: left;
    margin-left:45px;
    
}
.app-header .app-header-logo img{
    width:50px;
    height:50px;
    vertical-align: middle
}
/* 头部 登录 部分 */
.app-header .app-header-login{
    float: right;
    margin-right:20px;
}
.app-header .app-header-login ul li{
    display: inline;
    text-align: center;
    padding:0 25px;
    border-right:1px solid #ffffff;
    cursor: pointer;
}
.app-header .app-header-login ul li:nth-child(3){
    border-right:0px solid #ffffff;
}
/* 中部  部分 */
.app-content{
    width:1200px;
    margin:0 auto;
}
/* 底部部分 */
.app-footer{
    width:100%;
    background-color:#e3e4e8;
    line-height:80px;
    height:80px;
    text-align:center;
    margin-top:30px;
    clear:both;
}
</style>

<style>
/* 全局限定样式 */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, 
img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, 
i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, 
caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, 
embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, 
section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
div {
    display: block;
}
.app{
    background-color:#f0f2f5;
}
li{
    list-style:none;
}
</style>

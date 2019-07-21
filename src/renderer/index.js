// Initial welcome page. Delete the following line to remove it.
'use strict';

import { xsltProcess, xmlParse } from 'xslt-processor'


var fs = require('fs');
var path = require('path');
let XSLTcii2xr=fs.readFileSync(__dirname + "/../../cii-xr.xsl",{ encoding: 'utf8' });
let XSLTxr2html=fs.readFileSync(__dirname + "/../../xrechnung-html.xsl",{ encoding: 'utf8' });
let zugferdInvoice=fs.readFileSync(__dirname + "/../../zugferd-invoice.xml",{ encoding: 'utf8' });


const XMLXRString = xsltProcess(
    xmlParse(zugferdInvoice),
    xmlParse(XSLTcii2xr)
);
const invoiceContent = xsltProcess(
    xmlParse(XMLXRString),
    xmlParse(XSLTxr2html)
);
const styles=document.createElement('style');
styles.innerText=`@import url(https://unpkg.com/spectre.css/dist/spectre.min.css);
.empty{display:flex;flex-direction:column;justify-content:center;height:100vh;position:relative}.footer{bottom:0;font-size:13px;left:50%;opacity:.9;position:absolute;transform:translateX(-50%);width:100%}`;
const vueScript=document.createElement('script');
vueScript.setAttribute('type','text/javascript'),vueScript.setAttribute('src','https://unpkg.com/vue'),vueScript.onload=init,document.head.appendChild(vueScript),document.head.appendChild(styles);
function init(){
Vue.config.devtools=false,Vue.config.productionTip=false,new Vue({data:{
    versions:{electron:process.versions.electron,
    electronWebpack:require('electron-webpack/package.json').version},
    custom:invoiceContent
    },methods:{open(b){require('electron').shell.openExternal(b)}},template:`<p class=footer><span v-html="custom"></span></p></div></div>`}).$mount('#app')}

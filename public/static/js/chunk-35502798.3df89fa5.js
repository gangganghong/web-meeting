(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35502798"],{"232a":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("df3b");function r(e){if(Array.isArray(e))return Object(a["a"])(e)}var i=n("b5eb"),o=n("db29");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e){return r(e)||Object(i["a"])(e)||Object(o["a"])(e)||c()}},"4fce":function(e,t,n){},"58f6":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"remote1",attrs:{"element-loading-text":e.loadingText,"element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[e.isJoin?e._e():n("div",{staticClass:"shade"},[n("div",{staticClass:"input-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入你的昵称"},domProps:{value:e.account},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.join(t)},input:function(t){t.target.composing||(e.account=t.target.value)}}}),n("button",{on:{click:e.join}},[e._v("确定")])])]),n("div",{staticClass:"userList"},[n("h5",[e._v("在线用户："+e._s(e.userList.length))]),e._l(e.userList,(function(t){return n("p",{key:t.account},[e._v("\n            "+e._s(t.account)+"\n            "),t.account===e.account||t.account===e.isCall?n("i",[e._v("\n                "+e._s(t.account===e.account?"me":"")+"\n                "+e._s(t.account===e.isCall?"calling":"")+"\n            ")]):e._e(),t.account!==e.account&&t.account!==e.isCall?n("span",{on:{click:function(n){return e.apply(t.account)}}},[e._v("呼叫 "+e._s(t.account))]):e._e()])}))],2),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isToPeer,expression:"isToPeer"}],staticClass:"video-container"},[n("div",[n("video",{attrs:{src:"",id:"rtcA",controls:"",autoplay:""}}),n("h5",[e._v(e._s(e.account))]),n("button",{on:{click:e.hangup}},[e._v("hangup")])]),n("div",[n("video",{attrs:{src:"",id:"rtcB",controls:"",autoplay:""}}),n("h5",[e._v(e._s(e.isCall))])])]),n("div",{staticClass:"demo"},[n("div",{staticClass:"rtcBox"},[n("ul",e._l(e.handleList,(function(t){return n("li",{key:t.type},["color"===t.type?n("el-color-picker",{attrs:{"show-alpha":"",disabled:e.allowHangup},on:{change:e.colorChange},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}}):e._e(),["color","lineWidth","polygon"].includes(t.type)?e._e():n("button",{class:{active:e.currHandle===t.type},attrs:{disabled:"cancel"===t.type?e.allowHangup||e.allowCancel:"go"===t.type?e.allowHangup||e.allowGo:e.allowHangup},on:{click:function(n){return e.handleClick(t)}}},[e._v("\n                        "+e._s(t.name)+"\n                    ")]),"polygon"===t.type?n("el-popover",{attrs:{placement:"top",width:"400",trigger:"click"}},[n("el-input-number",{attrs:{"controls-position":"right",min:3,max:10},on:{change:e.sidesChange},model:{value:e.sides,callback:function(t){e.sides=t},expression:"sides"}}),n("button",{class:{active:e.currHandle===t.type},attrs:{slot:"reference",disabled:e.allowHangup},on:{click:function(n){return e.handleClick(t)}},slot:"reference"},[e._v(e._s(t.name)+"\n                        ")])],1):e._e(),"lineWidth"===t.type?n("el-popover",{attrs:{placement:"top",width:"400",trigger:"click"}},[n("el-slider",{attrs:{max:20},on:{change:e.lineWidthChange},model:{value:e.lineWidth,callback:function(t){e.lineWidth=t},expression:"lineWidth"}}),n("button",{attrs:{slot:"reference",disabled:e.allowHangup},slot:"reference"},[e._v(e._s(t.name)+" "),n("i",[e._v(e._s(e.lineWidth+"px"))])])],1):e._e()],1)})),0),n("div",[n("canvas",{ref:"canvas",attrs:{width:"400",height:"300"}}),n("h5",[e._v("白板操作")])]),n("div",[n("video",{attrs:{src:"",id:"rtcB-Board",playsinline:"",autoplay:""}}),n("h5",[e._v("演示画面")]),n("button",{attrs:{disabled:e.allowCall},on:{click:e.call2}},[e._v("call")]),n("button",{attrs:{disabled:e.allowHangup},on:{click:e.hangup2}},[e._v("hangup")])])])])])},r=[],i=(n("ed63"),n("8cf2"),n("232a")),o=n("b382"),c=(n("6a61"),n("327b")),s=n("29b2"),l=n("ebd6"),u={name:"remote1",data:function(){return{peerA:null,peerB:null,offerOption2:{offerToReceiveAudio:1,offerToReceiveVideo:1},allowCall:!0,allowHangup:!0,handleList:[{name:"圆",type:"arc"},{name:"线条",type:"line"},{name:"矩形",type:"rect"},{name:"多边形",type:"polygon"},{name:"橡皮擦",type:"eraser"},{name:"撤回",type:"cancel"},{name:"前进",type:"go"},{name:"清屏",type:"clear"},{name:"线宽",type:"lineWidth"},{name:"颜色",type:"color"}],color:"rgba(19, 206, 102, 1)",currHandle:"line",lineWidth:5,palette:null,allowCancel:!0,allowGo:!0,sides:3,boardLocalStream:null,account:window.sessionStorage.account||"",isJoin:!1,userList:[],roomid:"webrtc_1v1",isCall:!1,loading:!1,loadingText:"呼叫中",isToPeer:!1,peer:null,offerOption:{offerToReceiveAudio:1,offerToReceiveVideo:1}}},methods:{join:function(){this.account&&(this.isJoin=!0,window.sessionStorage.account=this.account,s["a"].emit("join",{roomid:this.roomid,account:this.account}))},initSocket:function(){var e=this;s["a"].on("joined",(function(t){e.userList=t})),s["a"].on("reply",function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.loading=!1,console.log(n),t.t0=n.type,t.next="1"===t.t0?5:"2"===t.t0?12:"3"===t.t0?14:16;break;case 5:return e.isCall=n.self,t.next=8,e.createP2P(n);case 8:return t.next=10,e.createDataChannel();case 10:return e.createOffer(n),t.abrupt("break",16);case 12:return e.$message({message:"对方拒绝了你的请求！",type:"warning"}),t.abrupt("break",16);case 14:return e.$message({message:"对方正在通话中！",type:"warning"}),t.abrupt("break",16);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),s["a"].on("apply",(function(t){console.log("apply"),e.isCall?e.reply(t.self,"3"):(console.log("apply data start"),console.log(t),console.log("apply data end"),e.$confirm(t.self+" 向你请求视频通话, 是否同意?","提示",{confirmButtonText:"同意",cancelButtonText:"拒绝",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.createP2P(t);case 2:return n.next=4,e.onDataChannel();case 4:e.isCall=t.self,e.reply(t.self,"1");case 6:case"end":return n.stop()}}),n)})))).catch((function(){e.reply(t.self,"2")})))})),s["a"].on("1v1answer",(function(t){e.onAnswer(t)})),s["a"].on("1v1ICE",(function(t){e.onIce(t)})),s["a"].on("1v1offer",(function(t){e.onOffer(t)})),s["a"].on("1v1hangup",(function(t){e.$message({message:"对方已断开连接！",type:"warning"}),e.peer.close(),e.peer=null,e.isToPeer=!1,e.isCall=!1}))},hangup:function(){s["a"].emit("1v1hangup",{account:this.isCall,self:this.account}),this.peer.close(),this.peer=null,this.isToPeer=!1,this.isCall=!1},apply:function(e){this.loading=!0,this.loadingText="呼叫中",alert("call before"),s["a"].emit("apply",{account:e,self:this.account}),alert("call after")},reply:function(e,t){s["a"].emit("reply",{account:e,self:this.account,type:t})},createP2P:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,this.loadingText="正在建立通话连接",e.next=4,this.createMedia(t);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),createMedia:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.boardLocalStream=this.$refs["canvas"].captureStream(),e.next=4,navigator.mediaDevices.getUserMedia({audio:!0,video:!0});case 4:this.localstream=e.sent,n=document.querySelector("#rtcA"),n.srcObject=this.localstream,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("getUserMedia: ",e.t0);case 12:this.initPeer(t),this.initPeer2();case 14:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}(),initPeer:function(e){var t=this,n=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;this.peer=new n,this.peer.addStream(this.localstream),this.peer.onicecandidate=function(n){n.candidate&&s["a"].emit("1v1ICE",{account:e.self,self:t.account,sdp:n.candidate})},this.peer.onaddstream=function(e){t.isToPeer=!0,t.loading=!1;var n=document.querySelector("#rtcB");n.srcObject=e.stream}},createOffer:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.peer.createOffer(this.offerOption);case 3:return n=e.sent,e.next=6,this.peer.setLocalDescription(n);case 6:s["a"].emit("1v1offer",{account:t.self,self:this.account,sdp:n}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("createOffer: ",e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(t){return e.apply(this,arguments)}return t}(),onOffer:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.peer.setRemoteDescription(t.sdp);case 3:return e.next=5,this.peer.createAnswer();case 5:return n=e.sent,e.next=8,this.peer.setLocalDescription(n);case 8:s["a"].emit("1v1answer",{account:t.self,self:this.account,sdp:n}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),console.log("onOffer: ",e.t0);case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(t){return e.apply(this,arguments)}return t}(),onAnswer:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.peer.setRemoteDescription(t.sdp);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("onAnswer: ",e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}(),onIce:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.peer.addIceCandidate(t.sdp);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("onAnswer: ",e.t0);case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));function t(t){return e.apply(this,arguments)}return t}(),createDataChannel:function(){try{this.channel=this.peer.createDataChannel("messagechannel"),this.handleChannel(this.channel)}catch(e){console.log("createDataChannel:",e)}},onDataChannel:function(){var e=this;this.peer.ondatachannel=function(t){e.channel=t.channel,e.handleChannel(e.channel)}},handleChannel:function(e){var t=this;e.binaryType="arraybuffer",e.onopen=function(e){console.log("channel onopen",e),t.isToPeer=!0,t.loading=!1,t.initPalette()},e.onclose=function(e){console.log("channel onclose",e)},e.onmessage=function(e){if(Array.isArray(JSON.parse(e.data))){var n,a=JSON.parse(e.data),r=Object(o["a"])(a),c=r[0],s=r.slice(1);(n=t.palette)[c].apply(n,Object(i["a"])(s))}else t.messageList.push(JSON.parse(e.data))}},initPalette:function(){alert(1),this.palette=new l["a"](this.$refs["canvas"],{drawColor:this.color,drawType:this.currHandle,lineWidth:this.lineWidth,allowCallback:this.allowCallback,moveCallback:this.moveCallback})},moveCallback:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.send(t)},allowCallback:function(e,t){console.log("cancle="+e),this.allowCancel=!e,this.allowGo=!t},send:function(e){if("text"===e[0]){var t={account:this.account,time:this.formatTime(new Date),mes:this.sendText,type:"text"};this.channel.send(JSON.stringify(t)),this.messageList.push(t),this.sendText=""}else console.log("send",e),this.channel.send(JSON.stringify(e))},sidesChange:function(){this.palette.changeWay({sides:this.sides})},colorChange:function(){this.palette.changeWay({color:this.color})},lineWidthChange:function(){this.palette.changeWay({lineWidth:this.lineWidth})},handleClick:function(e){["cancel","go","clear"].includes(e.type)?this.palette[e.type]():(this.palette.changeWay({type:e.type}),["color","lineWidth"].includes(e.type)||(this.currHandle=e.type))},start:function(){this.state="2",this.newRecognition.start()},stop:function(){this.state="1",this.newRecognition.stop()},call2:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.peerB.createOffer(this.offerOption2);case 3:return t=e.sent,e.next=6,this.onCreateOffer(t);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("createOffer: ",e.t0);case 11:this.allowCall=!0,this.allowHangup=!1;case 13:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),hangup2:function(){this.peerA.close(),this.peerB.close(),this.peerA=null,this.peerB=null,this.allowCall=!1,this.allowHangup=!0,this.palette.destroy(),this.palette=null},onCreateOffer:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.peerB.setLocalDescription(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("Offer-setLocalDescription: ",e.t0);case 8:return e.prev=8,e.next=11,this.peerA.setRemoteDescription(t);case 11:e.next=16;break;case 13:e.prev=13,e.t1=e["catch"](8),console.log("Offer-setRemoteDescription: ",e.t1);case 16:return e.prev=16,e.next=19,this.peerA.createAnswer();case 19:return n=e.sent,e.next=22,this.onCreateAnswer(n);case 22:e.next=27;break;case 24:e.prev=24,e.t2=e["catch"](16),console.log("createAnswer: ",e.t2);case 27:case"end":return e.stop()}}),e,this,[[0,5],[8,13],[16,24]])})));function t(t){return e.apply(this,arguments)}return t}(),onCreateAnswer:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.peerA.setLocalDescription(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log("answer-setLocalDescription: ",e.t0);case 8:return e.prev=8,e.next=11,this.peerB.setRemoteDescription(t);case 11:e.next=16;break;case 13:e.prev=13,e.t1=e["catch"](8),console.log("answer-setRemoteDescription: ",e.t1);case 16:case"end":return e.stop()}}),e,this,[[0,5],[8,13]])})));function t(t){return e.apply(this,arguments)}return t}(),initPeer2:function(){var e=this,t=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;this.peerA=new t,this.peerA.addStream(this.boardLocalStream),this.peerA.onicecandidate=function(t){t.candidate&&e.peerB.addIceCandidate(t.candidate)},this.peerB=new t,this.peerB.onaddstream=function(t){var n=document.querySelector("#rtcB-Board");n.srcObject=t.stream,e.initPalette()},this.peerB.onicecandidate=function(t){t.candidate&&e.peerA.addIceCandidate(t.candidate)},this.allowCall=!1},createMedia2:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.boardLocalStream=this.$refs["canvas"].captureStream(),this.initPeer2();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.initSocket(),this.account&&this.join()}},p=u,h=(n("bc38"),n("2c07")),d=Object(h["a"])(p,a,r,!1,null,"5184d07e",null);t["default"]=d.exports},b382:function(e,t,n){"use strict";function a(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return c}));var r=n("b5eb"),i=n("db29");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(e){return a(e)||Object(r["a"])(e)||Object(i["a"])(e)||o()}},b5eb:function(e,t,n){"use strict";function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n.d(t,"a",(function(){return a}))},bc38:function(e,t,n){"use strict";n("4fce")},db29:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("df3b");function r(e,t){if(e){if("string"===typeof e)return Object(a["a"])(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a["a"])(e,t):void 0}}},df3b:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))}}]);
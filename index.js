!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vueclaw")):"function"==typeof define&&define.amd?define(["vueclaw"],e):(t=t||self).VuetifyImageInput=e(t.VueClaw)}(this,(function(t){"use strict";function e(){}t=t&&t.hasOwnProperty("default")?t.default:t;var i={props:{disabled:{type:Boolean,default:!1}},data:function(){return{cancel:e,dragging:!1,error:null,failed:!1,file:null,loaded:!1,loading:!1,progress:0,result:null}},computed:{on:function(){return this.disabled?{}:{click:this.onClick,dragenter:this.onDragEnter,dragleave:this.onDragLeave,dragover:this.onDragOver,drop:this.onDrop}}},methods:{load:function(t){var i,n=this;(i=function(){n.cancel();var e=new FileReader,i=new Promise((function(i,a){e.addEventListener("progress",(function(e){var i=e.loaded;n.progress=i,n.$emit("progress",{file:t,loaded:i})})),e.addEventListener("load",(function(){var a=e.result;Object.assign(n,{loaded:!0,result:a}),n.$emit("load",{file:t,result:a}),i()})),e.addEventListener("abort",(function(){n.$emit("cancel",{file:t}),i()})),e.addEventListener("error",a)}));return e.readAsDataURL(t),Object.assign(n,{cancel:function(){1===e.readyState&&e.abort()},error:null,failed:!1,file:t,loaded:!1,loading:!0,progress:0,result:null}),i},new Promise((function(t){t(i())}))).catch((function(e){Object.assign(n,{error:e,failed:!0}),n.$emit("error",{error:e,file:t})})).finally((function(){Object.assign(n,{cancel:e,loading:!1})}))},onChange:function(t){t.preventDefault();var e=t.target.files;e&&e.length&&this.load(e[0])},onClick:function(t){t.preventDefault();var e=document.createElement("input");e.setAttribute("type","file");var i=this.onChange;e.addEventListener("change",i),e.click()},onDragEnter:function(t){t.preventDefault(),this.dragging=!0},onDragLeave:function(t){t.preventDefault(),this.dragging=!1},onDragOver:function(t){t.preventDefault()},onDrop:function(t){t.preventDefault(),this.dragging=!1;var e=t.dataTransfer.files;e&&e.length&&this.load(e[0])}},render:function(){var t=this,e=t.$scopedSlots,i=t.cancel,n=t.dragging,a=t.error,r=t.failed,o=t.file,l=t.loaded,c=t.loading,d=t.on,s=t.progress,g=t.result;return e.default({cancel:i,dragging:n,error:a,failed:r,file:o,loaded:l,loading:c,on:d,progress:s,result:g})}};var n={functional:!0,render:function(t,e){var n=e.data,a=e.listeners,r=e.parent,o=r.disabled,l=r.errorIcon,c=r.errorIconStyle,d=r.successIcon,s=r.successIconStyle,g=r.uploadIcon,u=r.uploadIconStyle,p=a.load,h=n.style;return t(i,{style:h,props:{disabled:o},scopedSlots:{default:function(e){var i=e.dragging,n=e.failed,a=e.file,r=e.loaded,p=e.loading,h=e.on,f=e.progress;return t("VCard",{style:{alignItems:"center",display:"flex",height:"100%",justifyContent:"center",width:"100%"},props:{disabled:o,outlined:!0},on:h},[function(){if(p){var e,h,y=f/a.size*100;return y?h=Math.round(y)+"%":e=!0,t("VProgressCircular",{props:{color:"primary",indeterminate:e,rotate:-90,size:64,value:y,width:4}},h)}var m,I,v;return r?(m=s,I="success",v=d):n?(m=c,I="error",v=l):(m=u,i&&(I="primary"),v=g),t("VIcon",{style:m,props:{color:I,disabled:o,large:!0}},v)}()])}},on:{load:function(t){var e=t.result;p(e)}}})}};function a(t,e,i){return Math.min(Math.max(t,e),i)}var r={checkeredBackground:function(){return["url('data:image/svg+xml;base64,"+btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')+"')","center center / 16px 16px","repeat","#fff"].join(" ")},computedMaxCroppingLeft:function(){return Math.max(0,this.scaledRotatedInternalImageWidthDifference)},computedMaxCroppingTop:function(){return Math.max(0,this.scaledRotatedInternalImageHeightDifference)},computedMaxScaling:function(){return Math.max(this.imageMaxScaling,this.computedMinScaling)},computedMinCroppingLeft:function(){return Math.min(0,this.scaledRotatedInternalImageWidthDifference)},computedMinCroppingTop:function(){return Math.min(0,this.scaledRotatedInternalImageHeightDifference)},computedMinScaling:function(){switch(this.imageMinScaling){case"cover":return Math.max(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight);case"contain":return Math.min(this.relativeRotatedInternalImageWidth,this.relativeRotatedInternalImageHeight)}return 0},croppingLeft:{get:function(){return Math.round(a(this.scaledRotatedInternalImageWidthDifference*this.dirtyOriginLeft,this.computedMinCroppingLeft,this.computedMaxCroppingLeft))},set:function(t){var e=this.scaledRotatedInternalImageWidthDifference;this.dirtyOriginLeft=e?t/e:.5}},croppingTop:{get:function(){return Math.round(a(this.scaledRotatedInternalImageHeightDifference*this.dirtyOriginTop,this.computedMinCroppingTop,this.computedMaxCroppingTop))},set:function(t){var e=this.scaledRotatedInternalImageHeightDifference;this.dirtyOriginTop=e?t/e:.5}},relativeRotatedInternalImageHeight:function(){return this.imageHeight/this.rotatedInternalImageHeight},relativeRotatedInternalImageWidth:function(){return this.imageWidth/this.rotatedInternalImageWidth},rotatedInternalImageHeight:function(){return this.rotated?this.internalImageWidth:this.internalImageHeight},rotatedInternalImageWidth:function(){return this.rotated?this.internalImageHeight:this.internalImageWidth},scaledRotatedInternalImageHeight:function(){return Math.round(this.scaling*this.rotatedInternalImageHeight)},scaledRotatedInternalImageHeightDifference:function(){return this.imageHeight-this.scaledRotatedInternalImageHeight},scaledRotatedInternalImageWidth:function(){return Math.round(this.scaling*this.rotatedInternalImageWidth)},scaledRotatedInternalImageWidthDifference:function(){return this.imageWidth-this.scaledRotatedInternalImageWidth},scaling:{get:function(){return a(this.dirtyScaling,this.computedMinScaling,this.computedMaxScaling)},set:function(t){this.dirtyScaling=t}},updateImageData:function(){var t=this,e=this,i=e.croppingLeft,n=e.croppingTop,a=e.debounce,r=e.flippedHorizontally,o=e.flippedVertically,l=e.imageBackgroundColor,c=e.imageFormat,d=e.imageHeight,s=e.imageQuality,g=e.imageWidth,u=e.internalImageData,p=e.internalImageHeight,h=e.internalImageWidth,f=e.rotated,y=e.scaling;return setTimeout((function(){var e;if(u){var a=new Image;a.src=u;var m=document.createElement("canvas"),I=m.getContext("2d");m.width=g,m.height=d,l&&(I.fillStyle=l,I.fillRect(0,0,g,d)),I.translate(i,n),I.scale(y,y),f&&(I.translate(p,0),I.rotate(Math.PI/2)),r&&(I.translate(h,0),I.scale(-1,1)),o&&(I.translate(0,p),I.scale(1,-1)),I.drawImage(a,0,0),r&&(I.translate(g,0),I.scale(-1,1)),o&&(I.translate(0,d),I.scale(1,-1)),e=m.toDataURL("image/"+c,s)}else e=null;t.imageData=e}),a)}},o="VImageInput";var l={type:Boolean,default:!1},c={type:String,default:"$clear"},d={type:Number,default:0},s={type:Boolean,default:!1},g={type:String,default:"$error"},u={type:String,default:"mdi-flip-horizontal"},p={type:String,default:"mdi-flip-vertical"},h={type:Boolean,default:!1},f={type:Boolean,default:!1},y={type:Boolean,default:!1},m={type:String,default:"png"},I={type:Number,default:256},v={type:Number,default:1},S={type:String,default:"cover"},C={type:Number,default:256},w={type:String,default:"rgba(0,0,0,0.5)"},b={type:String,default:"#fff"},M={type:String,default:"4px"},D={type:String,default:"50px"},H={type:Boolean,default:!1},x={type:String,default:"mdi-rotate-right"},k={type:String,default:"mdi-rotate-left"},O={type:String,default:"$success"},B={type:String,default:"mdi-upload"},R={clearable:l,clearIcon:c,clearIconStyle:Object,debounce:d,disabled:s,errorIcon:g,errorIconStyle:Object,flipHorizontallyIcon:u,flipHorizontallyIconStyle:Object,flipVerticallyIcon:p,flipVerticallyIconStyle:Object,fullHeight:h,fullWidth:f,hideActions:y,imageBackgroundColor:String,imageFormat:m,imageHeight:I,imageMaxScaling:v,imageMinScaling:S,imageQuality:{},imageWidth:C,name:String,overlayBackgroundColor:w,overlayBorderColor:b,overlayBorderWidth:M,overlayPadding:D,readonly:H,rotateClockwiseIcon:x,rotateClockwiseIconStyle:Object,rotateCounterClockwiseIcon:k,rotateCounterClockwiseIconStyle:Object,successIcon:O,successIconStyle:Object,uploadIcon:B,uploadIconStyle:Object,value:String,backgroundColor:{},maxScaling:{},minScaling:{},rotateCounterclockwiseIcon:{},rotateCounterclockwiseIconStyle:{},scalingSliderColor:{}};var V={name:o,components:{MyActionButton:{functional:!0,render:function(t,e){var i=e.listeners,n=e.parent,a=e.props;return t("VBtn",{class:"ma-1",props:{disabled:n.disabled,flat:!0,icon:!0},on:i},[t("VIcon",{style:a.iconStyle},a.icon)])}},MyClearButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.clearIcon,iconStyle:i.clearIconStyle},on:{click:i.clear}})}},MyFileUpload:n,MyFlipHorizontallyButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.flipHorizontallyIcon,iconStyle:i.flipHorizontallyIconStyle},on:{click:i.flipHorizontally}})}},MyFlipVerticallyButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.flipVerticallyIcon,iconStyle:i.flipVerticallyIconStyle},on:{click:i.flipVertically}})}},MyRotateClockwiseButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.rotateClockwiseIcon,iconStyle:i.rotateClockwiseIconStyle},on:{click:i.rotateClockwise}})}},MyRotateCounterClockwiseButton:{functional:!0,render:function(t,e){var i=e.parent;return t("MyActionButton",{props:{icon:i.rotateCounterClockwiseIcon,iconStyle:i.rotateCounterClockwiseIconStyle},on:{click:i.rotateCounterClockwise}})}},MyScalingSlider:{functional:!0,render:function(t,e){var i=e.parent,n=i.computedMaxScaling,a=i.computedMinScaling,r=i.disabled,o=i.scaleTo;return t("VSlider",{class:"ma-1",props:{disabled:r,hideDetails:!0,max:n,min:a,step:.001,value:i.scaling},on:{input:o}})}}},directives:{Claw:t},props:R,data:function(){return{dirtyOriginLeft:.5,dirtyOriginTop:.5,dirtyScaling:0,flippedHorizontally:!1,flippedVertically:!1,imageData:null,internalImageData:null,internalImageHeight:0,internalImageWidth:0,rotated:!1}},computed:r,watch:{imageData:function(t){this.$emit("input",t)},updateImageData:function(t,e){clearTimeout(e)},value:{handler:function(t){this.load(t)},immediate:!0}},created:function(){var t=this.$props,e=this.constructor.super.util.warn;Object.entries({imageBackgroundColor:"backgroundColor",imageMaxScaling:"maxScaling",imageMinScaling:"minScaling",rotateCounterClockwiseIcon:"rotateCounterclockwiseIcon",rotateCounterClockwiseIconStyle:"rotateCounterclockwiseIconStyle"}).forEach((function(i){var n=i[0],a=i[1];void 0!==t[a]&&e("["+o+"]: The property '"+a+"' has been renamed to '"+n+"'.")})),["scalingSliderColor"].forEach((function(i){void 0!==t[i]&&e("["+o+"]: The property '"+i+"' has been removed.")}))},methods:{clear:function(){this.internalImageData=null},flipHorizontally:function(){this.rotated?this.flippedVertically=!this.flippedVertically:this.flippedHorizontally=!this.flippedHorizontally,this.dirtyOriginLeft=1-this.dirtyOriginLeft},flipVertically:function(){this.rotated?this.flippedHorizontally=!this.flippedHorizontally:this.flippedVertically=!this.flippedVertically,this.dirtyOriginTop=1-this.dirtyOriginTop},load:function(t){var e=this;if((this.imageData||t)&&this.imageData!==t){var i=new Image;i.addEventListener("load",(function(){var n=i.naturalWidth,a=i.naturalHeight;e.internalImageData=n&&a?t:null,e.internalImageWidth=n,e.internalImageHeight=a,e.flippedHorizontally=!1,e.flippedVertically=!1,e.rotated=!1,e.scaling=0,e.dirtyOriginLeft=.5,e.dirtyOriginTop=.5})),i.src=t}},onPan:function(t){this.croppingLeft+=t.x-t.previousX,this.croppingTop+=t.y-t.previousY},rotateClockwise:function(){this.rotated?(this.rotated=!1,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically):this.rotated=!0;var t=this.dirtyOriginTop;this.dirtyOriginTop=this.dirtyOriginLeft,this.dirtyOriginLeft=1-t},rotateCounterClockwise:function(){this.rotated?this.rotated=!1:(this.rotated=!0,this.flippedHorizontally=!this.flippedHorizontally,this.flippedVertically=!this.flippedVertically);var t=this.dirtyOriginLeft;this.dirtyOriginLeft=this.dirtyOriginTop,this.dirtyOriginTop=1-t},scaleTo:function(t){this.scaling=t}},render:function(t){return t("div",{style:Object.assign({},{display:["-ms-inline-grid","inline-grid"],gridColumns:"1fr auto",gridRows:"1fr auto",gridTemplateColumns:"1fr auto",gridTemplateRows:"1fr auto"},this.fullHeight?{height:"100%"}:{},this.fullWidth?{width:"100%"}:{})},[t("div",{style:{gridColumn:1,gridRow:1,overflow:"hidden",position:"relative"}},[t("div",Object.assign({},{style:Object.assign({},{alignItems:"center",background:this.checkeredBackground,display:"flex",height:"100%",justifyContent:"center",overflow:"hidden",padding:"calc("+this.overlayPadding+" + "+this.overlayBorderWidth+")",position:"relative",width:"100%",zIndex:0},this.internalImageData||this.readonly?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.internalImageData?this.disabled||this.readonly?{}:{directives:[{name:"Claw",arg:"pan",value:this.onPan}]}:{}),[t("div",{style:{boxShadow:"0 0 4000px 4000px "+this.overlayBackgroundColor,maxHeight:"100%",maxWidth:"100%",outline:this.overlayBorderWidth+" solid "+this.overlayBorderColor,pointerEvents:"none"}},[t("div",{style:Object.assign({},{height:this.imageHeight+"px",position:"relative",width:this.imageWidth+"px",zIndex:-1},this.imageBackgroundColor?{backgroundColor:this.imageBackgroundColor}:{})},(this.internalImageData?[t("img",{style:{pointerEvents:"none",position:"absolute",transform:["translate("+this.croppingLeft+"px,"+this.croppingTop+"px)","scale("+this.scaling+")"].concat(this.rotated?["translateX("+this.internalImageHeight+"px)","rotate(90deg)"]:[],this.flippedVertically?["translateY("+this.internalImageHeight+"px)","scaleY(-1)"]:[],this.flippedHorizontally?["translateX("+this.internalImageWidth+"px)","scaleX(-1)"]:[]).join(" "),transformOrigin:"0 0"},attrs:{src:this.internalImageData}})]:[]).concat(this.internalImageData&&this.imageData?[t("input",{attrs:{name:this.name,type:"hidden",value:this.imageData}})]:[]))])])].concat(this.internalImageData||this.readonly?[]:[t("MyFileUpload",{style:{bottom:0,left:0,position:"absolute",right:0,top:0},on:{load:this.load}})])),t("div",{style:Object.assign({},{display:"flex",flexDirection:"column",gridColumn:2,gridRow:1,justifyContent:"center"},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},(this.clearable?[t("MyClearButton"),t("VSpacer")]:[]).concat(this.hideActions||this.readonly?[]:[t("MyRotateClockwiseButton"),t("MyRotateCounterClockwiseButton"),t("MyFlipHorizontallyButton"),t("MyFlipVerticallyButton")])),t("div",{style:Object.assign({},{gridColumn:1,gridRow:2},this.internalImageData?{}:{opacity:0,pointerEvents:"none",visibility:"hidden"})},this.hideActions||this.readonly?[]:[t("MyScalingSlider")])])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.component(V.name,V),V}));

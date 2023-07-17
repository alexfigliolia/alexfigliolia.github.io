import{g as S,c as C}from"./AppState.2e476ff2.js";import{a as B}from"./jquery.6646e875.js";function L(v,T){for(var u=0;u<T.length;u++){const e=T[u];if(typeof e!="string"&&!Array.isArray(e)){for(const d in e)if(d!=="default"&&!(d in v)){const l=Object.getOwnPropertyDescriptor(e,d);l&&Object.defineProperty(v,d,l.get?l:{enumerable:!0,get:()=>e[d]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var O={exports:{}};(function(v,T){(function(u,e){e(B)})(C,function(u){u=u&&u.hasOwnProperty("default")?u.default:u;var e,d=u(window);function l(t){return t[t.length-1]=="%"}function w(){var t=document.createElement("canvas");if(e=t.getContext("webgl")||t.getContext("experimental-webgl"),!e)return null;var i={};if(["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear"].forEach(function(c){var f=e.getExtension(c);f&&(i[c]=f)}),!i.OES_texture_float)return null;var a=[];function r(c,f,g){var p="OES_texture_"+c,_=p+"_linear",A=_ in i,P=[p];return A&&P.push(_),{type:f,arrayType:g,linearSupport:A,extensions:P}}a.push(r("float",e.FLOAT,Float32Array)),i.OES_texture_half_float&&a.push(r("half_float",i.OES_texture_half_float.HALF_FLOAT_OES,null));var n=e.createTexture(),o=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,o),e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);for(var s=null,h=0;h<a.length;h++)if(e.texImage2D(e.TEXTURE_2D,0,e.RGBA,32,32,0,e.RGBA,a[h].type,null),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE){s=a[h];break}return s}function y(t,i){try{return new ImageData(t,i)}catch{var a=document.createElement("canvas");return a.getContext("2d").createImageData(t,i)}}function D(t){var i=t.split(" ");if(i.length===1)switch(t){case"center":return["50%","50%"];case"top":return["50%","0"];case"bottom":return["50%","100%"];case"left":return["0","50%"];case"right":return["100%","50%"];default:return[t,"50%"]}else return i.map(function(a){switch(t){case"center":return"50%";case"top":case"left":return"0";case"right":case"bottom":return"100%";default:return a}})}function R(t,i,a){function r(f,g){var p=e.createShader(f);if(e.shaderSource(p,g),e.compileShader(p),!e.getShaderParameter(p,e.COMPILE_STATUS))throw new Error("compile error: "+e.getShaderInfoLog(p));return p}var n={};if(n.id=e.createProgram(),e.attachShader(n.id,r(e.VERTEX_SHADER,t)),e.attachShader(n.id,r(e.FRAGMENT_SHADER,i)),e.linkProgram(n.id),!e.getProgramParameter(n.id,e.LINK_STATUS))throw new Error("link error: "+e.getProgramInfoLog(n.id));n.uniforms={},n.locations={},e.useProgram(n.id),e.enableVertexAttribArray(0);for(var o,s,h=/uniform (\w+) (\w+)/g,c=t+i;(o=h.exec(c))!=null;)s=o[2],n.locations[s]=e.getUniformLocation(n.id,s);return n}function x(t,i){e.activeTexture(e.TEXTURE0+(i||0)),e.bindTexture(e.TEXTURE_2D,t)}function b(t){var i=/url\(["']?([^"']*)["']?\)/.exec(t);return i==null?null:i[1]}function U(t){return t.match(/^data:/)}var m=w(),I=y(32,32);u("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }</style>");var E=function(t,i){var a=this;this.$el=u(t),this.interactive=i.interactive,this.resolution=i.resolution,this.textureDelta=new Float32Array([1/this.resolution,1/this.resolution]),this.perturbance=i.perturbance,this.dropRadius=i.dropRadius,this.crossOrigin=i.crossOrigin,this.imageUrl=i.imageUrl;var r=document.createElement("canvas");r.width=this.$el.innerWidth(),r.height=this.$el.innerHeight(),this.canvas=r,this.$canvas=u(r),this.$canvas.css({position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:-1}),this.$el.addClass("jquery-ripples").append(r),this.context=e=r.getContext("webgl")||r.getContext("experimental-webgl"),m.extensions.forEach(function(g){e.getExtension(g)}),u(window).on("resize",function(){a.updateSize()}),this.textures=[],this.framebuffers=[],this.bufferWriteIndex=0,this.bufferReadIndex=1;for(var n=m.arrayType,o=n?new n(this.resolution*this.resolution*4):null,s=0;s<2;s++){var h=e.createTexture(),c=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,c),e.bindTexture(e.TEXTURE_2D,h),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,m.linearSupport?e.LINEAR:e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,m.linearSupport?e.LINEAR:e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,this.resolution,this.resolution,0,e.RGBA,m.type,o),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,h,0),this.textures.push(h),this.framebuffers.push(c)}this.quad=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,this.quad),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,1,1,-1,1]),e.STATIC_DRAW),this.initShaders(),this.initTexture(),this.setTransparentTexture(),this.loadImage(),e.clearColor(0,0,0,0),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),this.visible=!0,this.running=!0,this.inited=!0,this.destroyed=!1,this.setupPointerEvents();function f(){a.destroyed||(a.step(),requestAnimationFrame(f))}requestAnimationFrame(f)};E.DEFAULTS={imageUrl:null,resolution:256,dropRadius:20,perturbance:.03,interactive:!0,crossOrigin:""},E.prototype={setupPointerEvents:function(){var t=this;function i(){return t.visible&&t.running&&t.interactive}function a(r,n){i()&&t.dropAtPointer(r,t.dropRadius*(n?1.5:1),n?.14:.01)}this.$el.on("mousemove.ripples",function(r){a(r)}).on("touchmove.ripples, touchstart.ripples",function(r){for(var n=r.originalEvent.changedTouches,o=0;o<n.length;o++)a(n[o])}).on("mousedown.ripples",function(r){a(r,!0)})},loadImage:function(){var t=this;e=this.context;var i=this.imageUrl||b(this.originalCssBackgroundImage)||b(this.$el.css("backgroundImage"));if(i!=this.imageSource){if(this.imageSource=i,!this.imageSource){this.setTransparentTexture();return}var a=new Image;a.onload=function(){e=t.context;function r(o){return(o&o-1)==0}var n=r(a.width)&&r(a.height)?e.REPEAT:e.CLAMP_TO_EDGE;e.bindTexture(e.TEXTURE_2D,t.backgroundTexture),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,n),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,a),t.backgroundWidth=a.width,t.backgroundHeight=a.height,t.hideCssBackground()},a.onerror=function(){e=t.context,t.setTransparentTexture()},a.crossOrigin=U(this.imageSource)?null:this.crossOrigin,a.src=this.imageSource}},step:function(){e=this.context,this.visible&&(this.computeTextureBoundaries(),this.running&&this.update(),this.render())},drawQuad:function(){e.bindBuffer(e.ARRAY_BUFFER,this.quad),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),e.drawArrays(e.TRIANGLE_FAN,0,4)},render:function(){e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,this.canvas.width,this.canvas.height),e.enable(e.BLEND),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.useProgram(this.renderProgram.id),x(this.backgroundTexture,0),x(this.textures[0],1),e.uniform1f(this.renderProgram.locations.perturbance,this.perturbance),e.uniform2fv(this.renderProgram.locations.topLeft,this.renderProgram.uniforms.topLeft),e.uniform2fv(this.renderProgram.locations.bottomRight,this.renderProgram.uniforms.bottomRight),e.uniform2fv(this.renderProgram.locations.containerRatio,this.renderProgram.uniforms.containerRatio),e.uniform1i(this.renderProgram.locations.samplerBackground,0),e.uniform1i(this.renderProgram.locations.samplerRipples,1),this.drawQuad(),e.disable(e.BLEND)},update:function(){e.viewport(0,0,this.resolution,this.resolution),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffers[this.bufferWriteIndex]),x(this.textures[this.bufferReadIndex]),e.useProgram(this.updateProgram.id),this.drawQuad(),this.swapBufferIndices()},swapBufferIndices:function(){this.bufferWriteIndex=1-this.bufferWriteIndex,this.bufferReadIndex=1-this.bufferReadIndex},computeTextureBoundaries:function(){var t=this.$el.css("background-size"),i=this.$el.css("background-attachment"),a=D(this.$el.css("background-position")),r;if(i=="fixed"?(r={left:window.pageXOffset,top:window.pageYOffset},r.width=d.width(),r.height=d.height()):(r=this.$el.offset(),r.width=this.$el.innerWidth(),r.height=this.$el.innerHeight()),t=="cover")var n=Math.max(r.width/this.backgroundWidth,r.height/this.backgroundHeight),o=this.backgroundWidth*n,s=this.backgroundHeight*n;else if(t=="contain")var n=Math.min(r.width/this.backgroundWidth,r.height/this.backgroundHeight),o=this.backgroundWidth*n,s=this.backgroundHeight*n;else{t=t.split(" ");var o=t[0]||"",s=t[1]||o;l(o)?o=r.width*parseFloat(o)/100:o!="auto"&&(o=parseFloat(o)),l(s)?s=r.height*parseFloat(s)/100:s!="auto"&&(s=parseFloat(s)),o=="auto"&&s=="auto"?(o=this.backgroundWidth,s=this.backgroundHeight):(o=="auto"&&(o=this.backgroundWidth*(s/this.backgroundHeight)),s=="auto"&&(s=this.backgroundHeight*(o/this.backgroundWidth)))}var h=a[0],c=a[1];l(h)?h=r.left+(r.width-o)*parseFloat(h)/100:h=r.left+parseFloat(h),l(c)?c=r.top+(r.height-s)*parseFloat(c)/100:c=r.top+parseFloat(c);var f=this.$el.offset();this.renderProgram.uniforms.topLeft=new Float32Array([(f.left-h)/o,(f.top-c)/s]),this.renderProgram.uniforms.bottomRight=new Float32Array([this.renderProgram.uniforms.topLeft[0]+this.$el.innerWidth()/o,this.renderProgram.uniforms.topLeft[1]+this.$el.innerHeight()/s]);var g=Math.max(this.canvas.width,this.canvas.height);this.renderProgram.uniforms.containerRatio=new Float32Array([this.canvas.width/g,this.canvas.height/g])},initShaders:function(){var t=["attribute vec2 vertex;","varying vec2 coord;","void main() {","coord = vertex * 0.5 + 0.5;","gl_Position = vec4(vertex, 0.0, 1.0);","}"].join(`
`);this.dropProgram=R(t,["precision highp float;","const float PI = 3.141592653589793;","uniform sampler2D texture;","uniform vec2 center;","uniform float radius;","uniform float strength;","varying vec2 coord;","void main() {","vec4 info = texture2D(texture, coord);","float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);","drop = 0.5 - cos(drop * PI) * 0.5;","info.r += drop * strength;","gl_FragColor = info;","}"].join(`
`)),this.updateProgram=R(t,["precision highp float;","uniform sampler2D texture;","uniform vec2 delta;","varying vec2 coord;","void main() {","vec4 info = texture2D(texture, coord);","vec2 dx = vec2(delta.x, 0.0);","vec2 dy = vec2(0.0, delta.y);","float average = (","texture2D(texture, coord - dx).r +","texture2D(texture, coord - dy).r +","texture2D(texture, coord + dx).r +","texture2D(texture, coord + dy).r",") * 0.25;","info.g += (average - info.r) * 2.0;","info.g *= 0.995;","info.r += info.g;","gl_FragColor = info;","}"].join(`
`)),e.uniform2fv(this.updateProgram.locations.delta,this.textureDelta),this.renderProgram=R(["precision highp float;","attribute vec2 vertex;","uniform vec2 topLeft;","uniform vec2 bottomRight;","uniform vec2 containerRatio;","varying vec2 ripplesCoord;","varying vec2 backgroundCoord;","void main() {","backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);","backgroundCoord.y = 1.0 - backgroundCoord.y;","ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;","gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);","}"].join(`
`),["precision highp float;","uniform sampler2D samplerBackground;","uniform sampler2D samplerRipples;","uniform vec2 delta;","uniform float perturbance;","varying vec2 ripplesCoord;","varying vec2 backgroundCoord;","void main() {","float height = texture2D(samplerRipples, ripplesCoord).r;","float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;","float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;","vec3 dx = vec3(delta.x, heightX - height, 0.0);","vec3 dy = vec3(0.0, heightY - height, delta.y);","vec2 offset = -normalize(cross(dy, dx)).xz;","float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);","gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;","}"].join(`
`)),e.uniform2fv(this.renderProgram.locations.delta,this.textureDelta)},initTexture:function(){this.backgroundTexture=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.backgroundTexture),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR)},setTransparentTexture:function(){e.bindTexture(e.TEXTURE_2D,this.backgroundTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,I)},hideCssBackground:function(){var t=this.$el[0].style.backgroundImage;t!="none"&&(this.originalInlineCss=t,this.originalCssBackgroundImage=this.$el.css("backgroundImage"),this.$el.css("backgroundImage","none"))},restoreCssBackground:function(){this.$el.css("backgroundImage",this.originalInlineCss||"")},dropAtPointer:function(t,i,a){var r=parseInt(this.$el.css("border-left-width"))||0,n=parseInt(this.$el.css("border-top-width"))||0;this.drop(t.pageX-this.$el.offset().left-r,t.pageY-this.$el.offset().top-n,i,a)},drop:function(t,i,a,r){e=this.context;var n=this.$el.innerWidth(),o=this.$el.innerHeight(),s=Math.max(n,o);a=a/s;var h=new Float32Array([(2*t-n)/s,(o-2*i)/s]);e.viewport(0,0,this.resolution,this.resolution),e.bindFramebuffer(e.FRAMEBUFFER,this.framebuffers[this.bufferWriteIndex]),x(this.textures[this.bufferReadIndex]),e.useProgram(this.dropProgram.id),e.uniform2fv(this.dropProgram.locations.center,h),e.uniform1f(this.dropProgram.locations.radius,a),e.uniform1f(this.dropProgram.locations.strength,r),this.drawQuad(),this.swapBufferIndices()},updateSize:function(){var t=this.$el.innerWidth(),i=this.$el.innerHeight();(t!=this.canvas.width||i!=this.canvas.height)&&(this.canvas.width=t,this.canvas.height=i)},destroy:function(){this.$el.off(".ripples").removeClass("jquery-ripples").removeData("ripples"),this.$canvas.remove(),this.restoreCssBackground(),this.destroyed=!0},show:function(){this.visible=!0,this.$canvas.show(),this.hideCssBackground()},hide:function(){this.visible=!1,this.$canvas.hide(),this.restoreCssBackground()},pause:function(){this.running=!1},play:function(){this.running=!0},set:function(t,i){switch(t){case"dropRadius":case"perturbance":case"interactive":case"crossOrigin":this[t]=i;break;case"imageUrl":this.imageUrl=i,this.loadImage();break}}};var k=u.fn.ripples;u.fn.ripples=function(t){if(!m){console.log("Error: Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures.");return}var i=arguments.length>1?Array.prototype.slice.call(arguments,1):void 0;return this.each(function(){var a=u(this),r=a.data("ripples"),n=u.extend({},E.DEFAULTS,a.data(),typeof t=="object"&&t);!r&&typeof t=="string"||(r?typeof t=="string"&&E.prototype[t].apply(r,i):a.data("ripples",r=new E(this,n)))})},u.fn.ripples.Constructor=E,u.fn.ripples.noConflict=function(){return u.fn.ripples=k,this}})})();var F=O.exports;const X=S(F),N=L({__proto__:null,default:X},[F]);export{N as j};
//# sourceMappingURL=jquery.ripples.5405de81.js.map

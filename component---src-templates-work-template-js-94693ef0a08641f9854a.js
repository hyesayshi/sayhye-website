(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8OVL":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return w}));var r=a("q1tI"),i=a.n(r),n=a("vrFN"),d=function(){var e=Object(r.useState)([0,0]),t=e[0],a=e[1];return Object(r.useLayoutEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t},o=a("DZdY"),s=a("9eSz"),l=a.n(s),c=a("AeFk"),u=a("doQp"),f=a.n(u),g=Object(o.a)("div",{target:"ez2new53",label:"BoxWrapper"})("position:relative;",(function(e){return Object(c.b)("z-index:",e.zIndex,";transition:",e.animatable&&"transform 0.3s;","scale(",e.scale,");","")}),";"),p=Object(o.a)("div",{target:"ez2new52",label:"Box"})("box-sizing:content-box;position:absolute;overflow:hidden;transition:transform 0.3s;cursor:move;",(function(e){return Object(c.b)("width:",e.w,"px;height:",e.h,"px;border-radius:",.03*e.maxSize,"px;border:",.005*e.maxSize,"px solid ",e.cardBorder,";background-color:",e.cardBackground?e.cardBackground:e.cardBorder,";color:",e.cardText?e.cardText:null,";box-shadow:0 0 6px rgba(0, 0, 0, 0.5);transform:translate(-50%, -50%) rotate(",e.angle,"deg) scale(",e.scale,");","")}),";"),h=Object(o.a)("div",{target:"ez2new51",label:"Post"})("margin:3%;padding:3%;height:calc(100% - 2.8rem);overflow:hidden;display:flex;flex-direction:column;justify-content:flex-start;font-family:Manrope,sans-serif;",(function(e){return Object(c.b)("font-size:",.06*e.maxSize,"px;","")}),"line-height:1.2;header{margin-bottom:",(function(e){return.04*e.maxSize}),";}h1,h2{font-weight:700;}p{font-size:",(function(e){return.04*e.maxSize}),"px;font-weight:400;}ul{margin:3% 0;}li{margin-right:4px;display:inline-block;line-height:1.5;}"),m=Object(o.a)("li",{target:"ez2new50",label:"TagItem"})((function(e){var t=e.maxSize,a=e.cardText;return Object(c.b)("padding:0 ",.03*t,"px;border-radius:",.05*t,"px;border:",.004*t,"px solid ",a,";font-size:",.04*t,"px;","")}),";"),b=function(e){var t=e.node,a=!t||!t.childImageSharp,i=!t,n=e.index,d=e.numCards,o=e.maxZIndex,s=e.updateMaxZIndex,u=e.windowWidth,b=e.windowHeight,S=e.cardBorder,w=e.cardBackground,y=e.cardText,x=e.post,v=Object(r.useState)(null),O=v[0],j=v[1],E=Object(r.useState)(null),I=E[0],z=E[1],L=Object(r.useState)(null),R=L[0],k=L[1],T=Object(r.useState)({w:4,h:3}),H=T[0],V=T[1],C=Object(r.useState)(0),W=C[0],B=C[1];Object(r.useEffect)((function(){var e,r;r=(e=i?1.7:a?H.w/H.h:t.childImageSharp.fluid.aspectRatio)<.6?u>b?.9*b:.8*b:.85*Math.min(u,b),i&&(r*=.8);var n=r,d=r;e>1?d=n*(1/e):e<1?n=d*e:1===e&&(n=.9*r,d=.9*r),j(r),z(n),k(d)}),[u,b,t,H.w,H.h,i,a]);var M=Object(r.useState)(null),P=M[0],N=M[1];Object(r.useEffect)((function(){var e=Math.min(6*d,20),t=-e+2*e*(n-1)/Math.max(d-1,1);N(t)}),[n,d]);var q=Object(r.useState)({x:null,y:null}),F=q[0],Y=q[1],Z=Object(r.useState)(0),_=Z[0],G=Z[1];Object(r.useEffect)((function(){var e={x:window.innerWidth/2,y:window.innerHeight/2};Y(e)}),[]),Object(r.useEffect)((function(){if(u&&b){var e=Math.min(.25*O,u/(2*d));Y({x:.5*u-e*(d-1)*.5+e*(n-1),y:b/2}),G(P)}}),[u,b,n,P,O,d]);var U=Object(r.useState)(0),D=U[0],J=U[1];Object(r.useEffect)((function(){J(n)}),[n]);var A=Object(r.useState)(.8),Q=A[0],X=A[1],K=Object(r.useState)(!0),$=K[0],ee=K[1];return F.x&&F.y&&Object(c.c)(f.a,{position:F,positionOffset:{x:0,y:e.scrollY},onStart:function(){ee(!1),s(),J(o),G(0),X(1)},onDrag:function(e,t){Y({x:t.x,y:t.y})},onStop:function(){ee(!0),G(P),X(.8)}},Object(c.c)(g,{animatable:$,angle:_,scale:Q,zIndex:D},Object(c.c)(p,{index:n,w:I,h:R,maxSize:O,angle:_,scale:Q,cardBorder:S,cardText:y,cardBackground:w},t&&t.childImageSharp&&Object(c.c)(l.a,{draggable:!1,fluid:t.childImageSharp.fluid,alt:t.name.split("-").join(" ")}),t&&!t.childImageSharp&&"gif"===t.extension&&Object(c.c)("img",{src:t.publicURL,onLoad:function(e){var t=e.target;V({w:t.naturalWidth,h:t.naturalHeight}),B(1)},style:{width:"100%",opacity:W,transition:"opacity 0.2s"},draggable:!1,alt:t.name.split("-").join(" ")}),t&&!t.childImageSharp&&"mp4"===t.extension&&Object(c.c)("video",{src:t.publicURL,onLoadedMetadata:function(e){var t=e.target;V({w:t.videoWidth,h:t.videoHeight}),B(1)},style:{width:"100%"},draggable:!1,autoPlay:!0,loop:!0,muted:!0}),x&&i&&Object(c.c)(h,{maxSize:O},Object(c.c)("header",null,Object(c.c)("h1",null,x.frontmatter.title),Object(c.c)("h2",null,new Date(x.frontmatter.date).getFullYear())),Object(c.c)("p",{dangerouslySetInnerHTML:{__html:x.html}}),Object(c.c)("ul",null,x.frontmatter.tags.sort().map((function(e){return Object(c.c)(m,{key:e,maxSize:O,cardText:y},e.toUpperCase())})))))))},S=function(e){var t=e.post,a=t.frontmatter,i=a.cardBorder,n=a.cardBackground,o=a.cardText,s=e.nodes,l=Object(r.useState)(s.length+2),u=l[0],f=l[1],g=d(),p=g[0],h=g[1],m=Object(r.useState)(null),S=m[0],w=m[1];return Object(r.useEffect)((function(){var e=window.scrollY||window.pageYOffset||document.body.scrollTop+(document.documentElement&&document.documentElement.scrollTop||0);w(e)}),[S]),Object(c.c)("div",{style:{position:"absolute",top:0,left:0}},Object(c.c)(b,{windowWidth:p,windowHeight:h,scrollY:S,index:1,numCards:s.length+1,maxZIndex:u,updateMaxZIndex:function(){return f((function(e){return e+1}))},cardBorder:i||"black",cardBackground:n||"black",cardText:o||"white",post:t}),s.map((function(e,a){return Object(c.c)(b,{key:e.id,node:e,windowWidth:p,windowHeight:h,scrollY:S,index:a+2,numCards:s.length+1,maxZIndex:u,updateMaxZIndex:function(){return f((function(e){return e+1}))},cardBorder:i||"black",post:t})})))},w=(t.default=function(e){e.location;var t=e.data,a=t.markdownRemark,r=t.allFile.nodes;return Object(c.c)(i.a.Fragment,null,Object(c.c)(n.a,{title:a.frontmatter.title+" | SAYHYE.NET",isPost:!0}),Object(c.c)(S,{post:a,nodes:r}))},"1882055543")},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),d=r(a("VbXa")),o=r(a("8OQS")),s=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=u(e),a=g(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,w=S&&window.IntersectionObserver,y=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function v(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function j(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function E(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},z=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?E(e,!0):"")+E(e)})).join("")+"<img "+l+d+o+a+r+t+n+i+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,d=e.ariaHidden,o=l.default.createElement(R,(0,s.default)({ref:t,src:a},n,{ariaHidden:d}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),R=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,d=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,s.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:d,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&w&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||S&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,d.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:S}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,d=e.imgStyle,o=void 0===d?{}:d,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,S=e.durationFadeIn,w=e.Tag,y=e.itemProp,v=e.loading,E=e.draggable,I=h||m;if(!I)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,s.default)({opacity:k?1:0,transition:T?"opacity "+S+"ms":"none"},o),V="boolean"==typeof b?"lightgray":b,C={transitionDelay:S+"ms"},W=(0,s.default)({opacity:this.state.imgLoaded?0:1},T&&C,o,f),B={title:t,alt:this.state.isVisible?"":a,style:W,className:g,itemProp:y},M=this.state.isHydrated?p(I):I[0];if(h)return l.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden",maxWidth:M.maxWidth?M.maxWidth+"px":null,maxHeight:M.maxHeight?M.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(w,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),V&&l.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:V,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&C)}),M.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:B,imageVariants:I,generateSources:j}),M.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:B,imageVariants:I,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,x(I),l.default.createElement(R,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:v},M,{imageVariants:I}))}}));if(m){var P=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete P.display,l.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:P,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},V&&l.default.createElement(w,{"aria-hidden":!0,title:t,style:(0,s.default)({backgroundColor:V,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},T&&C)}),M.base64&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:B,imageVariants:I,generateSources:j}),M.tracedSVG&&l.default.createElement(L,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:B,imageVariants:I,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,x(I),l.default.createElement(R,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:v,draggable:E})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:z((0,s.default)({alt:a,title:t,loading:v},M,{imageVariants:I}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var T=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),H=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function V(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:T,sizes:H,fixed:V(c.default.oneOfType([T,c.default.arrayOf(T)])),fluid:V(c.default.oneOfType([H,c.default.arrayOf(H)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=k;t.default=C}}]);
//# sourceMappingURL=component---src-templates-work-template-js-94693ef0a08641f9854a.js.map
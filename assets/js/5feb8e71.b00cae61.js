"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[319],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5262:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={sidebar_position:3},s="Amcrest",p={unversionedId:"configuration/amcrest",id:"configuration/amcrest",title:"Amcrest",description:"Options",source:"@site/docs/configuration/amcrest.md",sourceDirName:"configuration",slug:"/configuration/amcrest",permalink:"/configuration/amcrest",editUrl:"https://github.com/keshavdv/unifi-cam-proxy/tree/main/docs/docs/configuration/amcrest.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Frigate",permalink:"/configuration/frigate"},next:{title:"Dahua/Lorex",permalink:"/configuration/dahua"}},u=[{value:"Options",id:"options",children:[],level:3},{value:"Amcrest IP8M-T2599E",id:"amcrest-ip8m-t2599e",children:[],level:3}],l={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"amcrest"},"Amcrest"),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"optional arguments:\n  --ffmpeg-args FFMPEG_ARGS, -f FFMPEG_ARGS\n                        Transcoding args for `ffmpeg -i <src> <args> <dst>`\n  --rtsp-transport {tcp,udp,http,udp_multicast}\n                        RTSP transport protocol used by stream\n  --username USERNAME, -u USERNAME\n                        Camera username\n  --password PASSWORD, -p PASSWORD\n                        Camera password\n  --channel CHANNEL, -c CHANNEL\n                        Camera channel\n  --snapshot-channel SNAPSHOT_CHANNEL\n                        Snapshot channel\n  --main-stream MAIN_STREAM\n                        Main Stream subtype index\n  --sub-stream SUB_STREAM\n                        Sub Stream subtype index\n  --motion-index MOTION_INDEX\n                        VideoMotion event index\n")),(0,i.kt)("h3",{id:"amcrest-ip8m-t2599e"},"Amcrest IP8M-T2599E"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Supports full time recording"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Supports motion events"),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Supports smart detection"),(0,i.kt)("li",{parentName:"ul"},"Notes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Camera configuration:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Video codec must be H.264 (H.265/HEVC is not supported)."),(0,i.kt)("li",{parentName:"ul"},"Audio codec should be AAC. If not, adjust the ffmpeg args to re-encode to AAC."),(0,i.kt)("li",{parentName:"ul"},"Ensure the sub stream is enabled."),(0,i.kt)("li",{parentName:"ul"},"If desired, ensure motion detection is enabled with the desired anti-dither and detection area."))),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"-bsf:v")," parameter is needed to make live video work. The first ",(0,i.kt)("inlineCode",{parentName:"li"},"tick_rate")," value should be ",(0,i.kt)("inlineCode",{parentName:"li"},"fps * 2000"),". See ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/keshavdv/unifi-cam-proxy/issues/31#issuecomment-841914363"},"this comment"),".")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"unifi-cam-proxy -H <NVR IP> -i <camera IP> -c client.pem -t <Adoption token> \\\n    amcrest \\\n    -u <username> \\\n    -p <password> \\\n    --motion-index 0 \\\n    --snapshot-channel 1 \\\n    --ffmpeg-args='-c:a copy -c:v copy -bsf:v \"h264_metadata=tick_rate=30000/1001\"'\n")))}m.isMDXComponent=!0}}]);
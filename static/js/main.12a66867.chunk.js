(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),s=n(3),o=n.n(s),r=(n(15),n(17),n(1));n(19);function p(e){var t=e.number,n=e.image;return t%2===0?a.a.createElement("div",{className:"title black-tile"},n&&a.a.createElement("div",{style:{backgroundImage:"url(".concat(n,")")},className:"chess-piece"}," ")):a.a.createElement("div",{className:"title white-tile"},n&&a.a.createElement("div",{style:{backgroundImage:"url(".concat(n,")")},className:"chess-piece"}," "))}n(21);var y,f,c=n(4),u=n(5),x=["a","b","c","d","e","f","g","h"],m=["1","2","3","4","5","6","7","8"],g=62.5;function O(e,t){return e.x===t.x&&e.y===t.y}!function(e){e[e.PAWN=0]="PAWN",e[e.BISHOP=1]="BISHOP",e[e.KNIGHT=2]="KNIGHT",e[e.ROOK=3]="ROOK",e[e.QUEEN=4]="QUEEN",e[e.KING=5]="KING"}(y||(y={})),function(e){e[e.OPPONENT=0]="OPPONENT",e[e.OUR=1]="OUR"}(f||(f={}));var l=[{image:"assets/rook_b.png",position:{x:0,y:7},type:y.ROOK,team:f.OPPONENT},{image:"assets/knight_b.png",position:{x:1,y:7},type:y.KNIGHT,team:f.OPPONENT},{image:"assets/bishop_b.png",position:{x:2,y:7},type:y.BISHOP,team:f.OPPONENT},{image:"assets/queen_b.png",position:{x:3,y:7},type:y.QUEEN,team:f.OPPONENT},{image:"assets/king_b.png",position:{x:4,y:7},type:y.KING,team:f.OPPONENT},{image:"assets/bishop_b.png",position:{x:5,y:7},type:y.BISHOP,team:f.OPPONENT},{image:"assets/knight_b.png",position:{x:6,y:7},type:y.KNIGHT,team:f.OPPONENT},{image:"assets/rook_b.png",position:{x:7,y:7},type:y.ROOK,team:f.OPPONENT},{image:"assets/pawn_b.png",position:{x:0,y:6},type:y.PAWN,team:f.OPPONENT},{image:"assets/pawn_b.png",position:{x:1,y:6},type:y.PAWN,team:f.OPPONENT},{image:"assets/pawn_b.png",position:{x:2,y:6},type:y.PAWN,team:f.OPPONENT},{image:"assets/pawn_b.png",position:{x:3,y:6},type:y.PAWN,team:f.OPPONENT},{image:"assets/pawn_b.png",position:{x:4,y:6},type:y.PAWN,team:f.OPPONENT},{image:"assets/pawn_b.png",position:{x:5,y:6},type:y.PAWN,team:f.OPPONENT},{image:"assets/pawn_b.png",position:{x:6,y:6},type:y.PAWN,team:f.OPPONENT},{image:"assets/pawn_b.png",position:{x:7,y:6},type:y.PAWN,team:f.OPPONENT},{image:"assets/rook_w.png",position:{x:0,y:0},type:y.ROOK,team:f.OUR},{image:"assets/knight_w.png",position:{x:1,y:0},type:y.KNIGHT,team:f.OUR},{image:"assets/bishop_w.png",position:{x:2,y:0},type:y.BISHOP,team:f.OUR},{image:"assets/queen_w.png",position:{x:3,y:0},type:y.QUEEN,team:f.OUR},{image:"assets/king_w.png",position:{x:4,y:0},type:y.KING,team:f.OUR},{image:"assets/bishop_w.png",position:{x:5,y:0},type:y.BISHOP,team:f.OUR},{image:"assets/knight_w.png",position:{x:6,y:0},type:y.KNIGHT,team:f.OUR},{image:"assets/rook_w.png",position:{x:7,y:0},type:y.ROOK,team:f.OUR},{image:"assets/pawn_w.png",position:{x:0,y:1},type:y.PAWN,team:f.OUR},{image:"assets/pawn_w.png",position:{x:1,y:1},type:y.PAWN,team:f.OUR},{image:"assets/pawn_w.png",position:{x:2,y:1},type:y.PAWN,team:f.OUR},{image:"assets/pawn_w.png",position:{x:3,y:1},type:y.PAWN,team:f.OUR},{image:"assets/pawn_w.png",position:{x:4,y:1},type:y.PAWN,team:f.OUR},{image:"assets/pawn_w.png",position:{x:5,y:1},type:y.PAWN,team:f.OUR},{image:"assets/pawn_w.png",position:{x:6,y:1},type:y.PAWN,team:f.OUR},{image:"assets/pawn_w.png",position:{x:7,y:1},type:y.PAWN,team:f.OUR}],N=function(e,t){return!!t.find(function(t){return O(t.position,e)})},P=function(e,t,n){return!!t.find(function(t){return O(t.position,e)&&t.team!==n})},b=function(e,t,n){return!N(e,t)||P(e,t,n)},v=function(){function e(){Object(c.a)(this,e)}return Object(u.a)(e,[{key:"isEnPassantMove",value:function(e,t,n,i,a){var s=i===f.OUR?1:-1;if(n===y.PAWN&&((t.x-e.x===-1||t.x-e.x===1)&&t.y-e.y===s&&a.find(function(e){return e.position.x===t.x&&e.position.y===t.y-s&&e.enPassant})))return!0;return!1}},{key:"isValidMove",value:function(e,t,n,i,a){var s=!1;switch(n){case y.PAWN:s=function(e,t,n,i){var a=n===f.OUR?1:6,s=n===f.OUR?1:-1;if(e.x===t.x&&e.y===a&&t.y-e.y===2*s){if(!N(t,i)&&!N({x:t.x,y:t.y-s},i))return!0}else if(e.x===t.x&&t.y-e.y===s){if(!N(t,i))return!0}else if(t.x-e.x===-1&&t.y-e.y===s){if(P(t,i,n))return!0}else if(t.x-e.x===1&&t.y-e.y===s&&P(t,i,n))return!0;return!1}(e,t,i,a);break;case y.KNIGHT:s=function(e,t,n,i){for(var a=-1;a<2;a+=2)for(var s=-1;s<2;s+=2){if(t.y-e.y===2*a&&t.x-e.x===s&&b(t,i,n))return!0;if(t.x-e.x===2*a&&t.y-e.y===s&&b(t,i,n))return!0}return!1}(e,t,i,a);break;case y.BISHOP:s=function(e,t,n,i){for(var a=1;a<8;a++){if(t.x>e.x&&t.y>e.y){var s={x:e.x+a,y:e.y+a};if(O(s,t)){if(b(s,i,n))return!0}else if(N(s,i))break}if(t.x>e.x&&t.y<e.y){var o={x:e.x+a,y:e.y-a};if(O(o,t)){if(b(o,i,n))return!0}else if(N(o,i))break}if(t.x<e.x&&t.y<e.y){var r={x:e.x-a,y:e.y-a};if(O(r,t)){if(b(r,i,n))return!0}else if(N(r,i))break}if(t.x<e.x&&t.y>e.y){var p={x:e.x-a,y:e.y+a};if(O(p,t)){if(b(p,i,n))return!0}else if(N(p,i))break}}return!1}(e,t,i,a);break;case y.ROOK:s=function(e,t,n,i){if(e.x===t.x)for(var a=1;a<8;a++){var s=t.y<e.y?-1:1,o={x:e.x,y:e.y+a*s};if(O(o,t)){if(b(o,i,n))return!0}else if(N(o,i))break}if(e.y===t.y)for(var r=1;r<8;r++){var p=t.x<e.x?-1:1,y={x:e.x+r*p,y:e.y};if(O(y,t)){if(b(y,i,n))return!0}else if(N(y,i))break}return!1}(e,t,i,a);break;case y.QUEEN:s=function(e,t,n,i){for(var a=1;a<8;a++){var s=t.x<e.x?-1:t.x>e.x?1:0,o=t.y<e.y?-1:t.y>e.y?1:0,r={x:e.x+a*s,y:e.y+a*o};if(O(r,t)){if(b(r,i,n))return!0}else if(N(r,i))break}return!1}(e,t,i,a);break;case y.KING:s=function(e,t,n,i){for(var a=1;a<2;a++){var s=t.x<e.x?-1:t.x>e.x?1:0,o=t.y<e.y?-1:t.y>e.y?1:0,r={x:e.x+a*s,y:e.y+a*o};if(O(r,t)){if(b(r,i,n))return!0}else if(N(r,i))break}return!1}(e,t,i,a)}return s}}]),e}();function w(){var e=Object(i.useState)(null),t=Object(r.a)(e,2),n=t[0],s=t[1],o=Object(i.useState)({x:-1,y:-1}),c=Object(r.a)(o,2),u=c[0],N=c[1],P=Object(i.useState)(l),b=Object(r.a)(P,2),w=b[0],E=b[1],h=Object(i.useRef)(null),_=new v;for(var k=[],R=function(e){for(var t=function(t){var n=e+t+2,i=w.find(function(n){return O(n.position,{x:t,y:e})}),s=i?i.image:void 0;k.push(a.a.createElement(p,{key:"".concat(e,", ").concat(t),image:s,number:n}))},n=0;n<x.length;n++)t(n)},T=m.length-1;T>=0;T--)R(T);return a.a.createElement("div",{onMouseUp:function(e){return function(e){var t=h.current;if(n&&t){var i=Math.floor((e.clientX-t.offsetLeft)/g),a=Math.abs(Math.ceil((e.clientY-t.offsetTop-500)/g)),o=w.find(function(e){return O(e.position,u)});if(o){var r=_.isValidMove(u,{x:i,y:a},o.type,o.team,w),p=_.isEnPassantMove(u,{x:i,y:a},o.type,o.team,w),c=o.team===f.OUR?1:-1;if(p){var x=w.reduce(function(e,t){return O(t.position,u)?(t.enPassant=!1,t.position.x=i,t.position.y=a,e.push(t)):O(t.position,{x:i,y:a-c})||(t.type===y.PAWN&&(t.enPassant=!1),e.push(t)),e},[]);E(x)}else if(r){var m=w.reduce(function(e,t){return O(t.position,u)?(t.enPassant=2===Math.abs(u.y-a)&&t.type===y.PAWN,t.position.x=i,t.position.y=a,e.push(t)):O(t.position,{x:i,y:a})||(t.type===y.PAWN&&(t.enPassant=!1),e.push(t)),e},[]);E(m)}else n.style.position="relative",n.style.removeProperty("top"),n.style.removeProperty("left")}s(null)}}(e)},onMouseMove:function(e){return function(e){var t=h.current;if(n&&t){var i=t.offsetLeft,a=t.offsetTop,s=t.offsetLeft+t.clientWidth-45,o=t.offsetTop+t.clientHeight-45,r=e.clientX-20,p=e.clientY-20;n.style.position="absolute",n.style.left="".concat(r<i?i:r>s?s:r,"px"),n.style.top="".concat(p<a?a:p>o?o:p,"px")}}(e)},onMouseDown:function(e){return function(e){var t=e.target,n=h.current;if(t.classList.contains("chess-piece")&&n){var i=Math.floor((e.clientX-n.offsetLeft)/g),a=Math.abs(Math.ceil((e.clientY-n.offsetTop-500)/g));N({x:i,y:a});var o=e.clientX-20,r=e.clientY-20;t.style.position="absolute",t.style.left="".concat(o,"px"),t.style.top="".concat(r,"px"),s(t)}}(e)},id:"chessboard",ref:h},k)}var E=function(){return a.a.createElement("div",{id:"app"},a.a.createElement(w,null))},h=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,24)).then(function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null))),h()},6:function(e,t,n){e.exports=n(23)}},[[6,3,2]]]);
//# sourceMappingURL=main.12a66867.chunk.js.map
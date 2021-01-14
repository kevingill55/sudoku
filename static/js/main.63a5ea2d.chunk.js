(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{92:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(1),o=r.n(c),i=r(11),a=r.n(i),u=r(106),l=r(107),b=r(110),s=r(109),j=r(6),d=r(43),f=function(e,t,r){var n=[];r.forEach((function(e,t){var r=[];e.forEach((function(e,n){var c={row:t,col:n,error:!1,fixed:!1,number:""};"number"===typeof e&&(c.fixed=!0,c.number=e),r.push(c)})),n.push(r)})),e(n),t(!0)},O=function(e,t){if(t.includes(e)){for(var r=0,n=[],c=0;c<t.length;c+=1)t[c]===e?r++:n.push(t[c]);for(;r>1;)n.push(e),r--;return n}return t},x=function(e,t,r,n){var c=0;return t.forEach((function(t){t.some((function(t){return t===e&&(c++,!0)}))})),9===c&&(r.forEach((function(t){t.some((function(t){return t===e&&(c++,!0)}))})),18===c&&(n.forEach((function(t){t.some((function(t){return t===e&&(c++,!0)}))})),27===c))},h=function(e,t,r,n,c,o,i,a,u){var l=O(e,c[t]),b=O(e,o[r]),s=O(e,i[n]);(c[t]=l,o[r]=b,i[n]=s,x(e,c,o,i))||(a.includes(e)||u([].concat(Object(d.a)(a),[e])))},m=function(e,t,r,n,c){e([1,2,3,4,5,6,7,8,9]),t(0),r(0),n(0),c("")},g=function(e,t,r,n){var c=[[],[],[],[],[],[],[],[],[]],o=[[],[],[],[],[],[],[],[],[]],i=[[],[],[],[],[],[],[],[],[]];n.forEach((function(e,t){e.forEach((function(e,r){if("number"===typeof e){var n=v(t,r);i[n].includes(e)||i[n].push(e),c[t].includes(e)||c[t].push(e),o[r].includes(e)||o[r].push(e)}}))})),e(c),t(o),r(i)},v=function(e,t){return e<3?t<3?0:t<6?1:2:e>=3&&e<6?t<3?3:t<6?4:5:e>=6&&e<9?t<3?6:t<6?7:8:void 0},w=function(e,t,r,n,c){return function(o,i){t(o),r(i),n(v(o,i)),c(e[o][i].number)}},p=function(e,t,r,n,c,o,i,a,u,l,b){return function(){r(!1),f(t,r,e),g(c,o,i,e),m(n,a,u,l,b)}},k=function(e,t,n,c,o,i,a,u,l,b,s){return function(j){n(!1);var d=r(47).SudokuGenerator.generate(1)[0].getSheet(j);t(d),f(e,n,d),g(o,i,a,d),m(c,u,l,b,s)}},y=function(e,t,r,n,c,o,i,a,u,l,b){return function(s){if(!e[r][c].fixed)if("Backspace"!==s){var j=Number(s);if(function(e,t){return!!/^[1-9]$/.test(t)&&e!==t}(n,j)){var f={number:j,error:!1};(i[r].includes(j)||a[c].includes(j)||u[o].includes(j))&&(f.error=!0),"number"===typeof n&&h(n,r,c,o,i,a,u,t,b),Object.assign(e[r][c],f),function(e,t,r,n,c,o,i,a,u){c[t].push(e),o[r].push(e),i[n].push(e),x(e,c,o,i)&&u(Object(d.a)(a.filter((function(t){return t!==e}))))}(j,r,c,o,i,a,u,t,b),l(j)}}else"number"===typeof n&&(Object.assign(e[r][c],{number:"",error:!1}),h(n,r,c,o,i,a,u,t,b),l(""))}},S=r(47).SudokuGenerator.generate(1)[0].getSheet(0),C=[[],[],[],[],[],[],[],[],[]],z=Object(c.createContext)(),E=function(e){var t=e.children,r=Object(c.useState)(C),o=Object(j.a)(r,2),i=o[0],a=o[1],u=Object(c.useState)(S),l=Object(j.a)(u,2),b=l[0],s=l[1],d=Object(c.useState)(""),O=Object(j.a)(d,2),x=O[0],h=O[1],m=Object(c.useState)(0),v=Object(j.a)(m,2),E=v[0],R=v[1],D=Object(c.useState)(0),M=Object(j.a)(D,2),N=M[0],B=M[1],F=Object(c.useState)(0),G=Object(j.a)(F,2),I=G[0],K=G[1],W=Object(c.useState)(C),q=Object(j.a)(W,2),J=q[0],P=q[1],V=Object(c.useState)(C),A=Object(j.a)(V,2),H=A[0],L=A[1],Y=Object(c.useState)(C),$=Object(j.a)(Y,2),Q=$[0],T=$[1],U=Object(c.useState)([1,2,3,4,5,6,7,8,9]),X=Object(j.a)(U,2),Z=X[0],_=X[1],ee=Object(c.useState)(!1),te=Object(j.a)(ee,2),re=te[0],ne=te[1];Object(c.useEffect)((function(){f(a,ne,b),g(P,L,T,b)}),[b]);var ce={board:i,activeValue:x,activeRow:E,activeCol:N,activeBox:I,sudokuRowStore:J,sudokuColumnStore:H,sudokuBoxStore:Q,sudokuKey:Z,onNewBoard:k(a,s,ne,_,P,L,T,R,B,K,h),onBoardReset:p(b,a,ne,_,P,L,T,R,B,K,h),onSquareSelection:w(i,R,B,K,h),onSudokuKeyDown:y(i,Z,E,x,N,I,J,H,Q,h,_)};return Object(n.jsx)(z.Provider,{value:ce,children:re&&t})},R=function(e){var t,r=e.row,o=e.col,i=e.border,a=Object(c.useContext)(z),u=a.board,b=a.activeRow,s=a.activeCol,d=a.activeValue,f=a.onSudokuKeyDown,O=a.onSquareSelection,x=Object(c.useState)(!1),h=Object(j.a)(x,2),m=h[0],g=h[1],v=Object(c.useState)({fontWeight:"light"}),w=Object(j.a)(v,2),p=w[0],k=w[1];return Object(c.useEffect)((function(){!function(e,t,r,n,c){var o={fontWeight:"300",fontSize:"3rem",color:"black"};e[t][r].fixed&&(o.background="#F2F2F2"),"number"===typeof n&&e[t][r].number===n&&(o.fontWeight="700"),e[t][r].error&&(o.color="#FF4040"),c(o)}(u,r,o,d,k),g(b===r&&s===o)}),[u,r,o,d,b,s]),Object(n.jsx)(l.a,{fill:!0,justify:"center",align:"center",focusIndicator:!1,style:p,background:m?"lavender":"none",onClick:function(){return O(r,o)},hoverIndicator:{color:"lavender"},border:!!i&&{side:"right"},children:Object(n.jsx)("input",{type:"text",onKeyDown:function(e){return f(e.key)},onChange:function(){},value:null===(t=u[r][o])||void 0===t?void 0:t.number,style:{border:"none",outline:"none",boxSizing:"border-box",background:"transparent",caretColor:"transparent",cursor:"pointer",fontSize:"inherit",fontWeight:"inherit",fontFamily:"inherit",color:"inherit",width:"100%",height:"100%",textAlign:"center"}})})},D=function(e){return 1===e?0:2===e?3:6},M=function(e){var t=e.boxRow,r=e.boxCol,c=D(t);return Object(n.jsxs)(l.a,{justify:"between",fill:!0,children:[Object(n.jsx)(N,{col:r,row:c,border:!0}),Object(n.jsx)(N,{col:r,row:c+1,border:!0}),Object(n.jsx)(N,{col:r,row:c+2,border:!1})]})},N=function(e){var t=e.col,r=e.row,c=e.border,o=D(t);return Object(n.jsxs)(l.a,{fill:!0,justify:"between",direction:"row",border:!!c&&{side:"bottom"},children:[Object(n.jsx)(R,{col:o,row:r,border:!0,value:"9"}),Object(n.jsx)(R,{col:o+1,row:r,border:!0,value:"8"}),Object(n.jsx)(R,{col:o+2,row:r,border:!1,value:"7"})]})},B=function(e){var t=e.boxRow,r=e.border;return Object(n.jsxs)(l.a,{direction:"row",justify:"between",fill:!0,border:!!r&&{side:"bottom",color:"black",size:"3px"},children:[Object(n.jsx)(l.a,{fill:!0,border:{side:"right",color:"black",size:"3px"},children:Object(n.jsx)(M,{boxRow:t,boxCol:1})}),Object(n.jsx)(l.a,{fill:!0,border:{side:"right",color:"black",size:"3px"},children:Object(n.jsx)(M,{boxRow:t,boxCol:2})}),Object(n.jsx)(l.a,{fill:!0,children:Object(n.jsx)(M,{boxRow:t,boxCol:3})})]})},F=function(){return Object(n.jsxs)(l.a,{width:"large",height:"large",justify:"between",border:{color:"black",size:"4px"},children:[Object(n.jsx)(B,{boxRow:1,border:!0}),Object(n.jsx)(B,{boxRow:2,border:!0}),Object(n.jsx)(B,{boxRow:3,border:!1})]})},G=function(e){var t=e.label,r=e.onClick;return Object(n.jsx)(l.a,{width:"small",pad:{vertical:"medium"},onClick:r,hoverIndicator:{color:"light-3"},background:"lavender",align:"center",justify:"center",elevation:"medium",children:Object(n.jsx)(s.a,{weight:600,size:"xlarge",children:t})})},I=r(108),K=r(104),W=function(e){var t=e.setFinishModal,r=e.setNewGameModal;return Object(n.jsx)(I.a,{children:Object(n.jsxs)(l.a,{gap:"small",pad:{horizontal:"large",vertical:"medium"},align:"center",children:[Object(n.jsx)(s.a,{children:"Well done \ud83e\udd1d"}),Object(n.jsx)(s.a,{weight:600,children:"Play again?"}),Object(n.jsx)(l.a,{direction:"row",justify:"center",gap:"small",pad:"small",children:Object(n.jsx)(K.a,{primary:!0,label:"Yes!",color:"lavender",size:"large",onClick:function(){t(!1),r(!0)}})})]})})},q=r(105),J=function(e){var t=e.label,r=e.difficulty,o=e.currentDifficulty,i=e.setDifficulty,a=Object(c.useState)(!1),u=Object(j.a)(a,2),b=u[0],d=u[1];return Object(c.useEffect)((function(){d(o===r)}),[r,o]),Object(n.jsx)(l.a,{fill:"horizontal",background:b?"lavender":"none",onClick:function(){return i(r)},hoverIndicator:{color:"light-5"},align:"center",justify:"center",pad:"medium",children:Object(n.jsx)(s.a,{size:"large",children:t})})},P=["Easy","Medium","Hard"],V=function(e){var t=e.setNewGameModal,r=Object(c.useContext)(z).onNewBoard,o=Object(c.useState)(0),i=Object(j.a)(o,2),a=i[0],u=i[1];return Object(n.jsx)(I.a,{children:Object(n.jsxs)(l.a,{align:"center",children:[Object(n.jsx)(K.a,{alignSelf:"end",focusIndicator:!1,icon:Object(n.jsx)(q.a,{color:"black"}),onClick:function(){return t(!1)},size:"small"}),Object(n.jsxs)(l.a,{pad:{horizontal:"xlarge",vertical:"medium"},children:[P.map((function(e,t){return Object(n.jsx)(J,{label:e,difficulty:t,currentDifficulty:a,setDifficulty:u},e)})),Object(n.jsx)(l.a,{direction:"row",justify:"center",pad:{top:"large"},children:Object(n.jsx)(l.a,{fill:"horizontal",background:"lavender",onClick:function(){t(!1),r(a)},hoverIndicator:{color:"light-5"},align:"center",justify:"center;",pad:{horizontal:"medium",vertical:"small"},children:Object(n.jsx)(s.a,{weight:600,size:"large",children:"Go!"})})})]})]})})},A=function(){var e=Object(c.useContext)(z),t=e.sudokuKey,r=e.onBoardReset,o=Object(c.useState)(!1),i=Object(j.a)(o,2),a=i[0],u=i[1],b=Object(c.useState)(!0),s=Object(j.a)(b,2),d=s[0],f=s[1];return Object(c.useEffect)((function(){0===t.length?u(!0):u(!1)}),[t]),Object(n.jsxs)(l.a,{pad:{vertical:"large"},children:[Object(n.jsxs)(l.a,{direction:"row",gap:"large",children:[Object(n.jsx)(G,{onClick:r,label:"Reset"}),Object(n.jsx)(G,{onClick:function(){return f(!0)},label:"New Game"})]}),a&&Object(n.jsx)(W,{setFinishModal:u,setNewGameModal:f}),d&&Object(n.jsx)(V,{setNewGameModal:f})]})},H=function(e){var t=e.number,r=Object(c.useContext)(z).sudokuKey,o=Object(c.useState)(!0),i=Object(j.a)(o,2),a=i[0],u=i[1];return Object(c.useEffect)((function(){r.includes(t)?u(!0):u(!1)}),[r,t]),Object(n.jsx)(l.a,{width:"3rem",height:"3rem",children:a&&Object(n.jsx)(l.a,{border:{color:"black"},fill:!0,round:!0,background:"lavender",align:"center",justify:"center",children:Object(n.jsx)(s.a,{color:"black",children:t})})})},L=function(){return Object(n.jsxs)(l.a,{direction:"row",width:"large",justify:"between",pad:{bottom:"medium",horizontal:"large"},children:[Object(n.jsx)(H,{number:1}),Object(n.jsx)(H,{number:2}),Object(n.jsx)(H,{number:3}),Object(n.jsx)(H,{number:4}),Object(n.jsx)(H,{number:5}),Object(n.jsx)(H,{number:6}),Object(n.jsx)(H,{number:7}),Object(n.jsx)(H,{number:8}),Object(n.jsx)(H,{number:9})]})},Y=r(57),$=r(56),Q=Object($.deepMerge)(Y.grommet,{global:{colors:{myColor:"#dcc2ee"},font:{color:"black",family:"Nunito"}},button:{size:{large:{border:{radius:"0px"}}},border:{radius:"0px"}}}),T=function(){var e=(new Date).toLocaleDateString();return Object(n.jsx)(u.a,{full:!0,theme:Q,children:Object(n.jsxs)(l.a,{align:"center",pad:"medium",children:[Object(n.jsxs)(l.a,{align:"center",gap:"xsmall",pad:{vertical:"large"},children:[Object(n.jsx)(b.a,{margin:"none",children:"Sudoku"}),Object(n.jsx)(s.a,{size:"large",children:e})]}),Object(n.jsxs)(E,{children:[Object(n.jsx)(L,{}),Object(n.jsx)(F,{}),Object(n.jsx)(A,{})]})]})})};a.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(T,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.63a5ea2d.chunk.js.map
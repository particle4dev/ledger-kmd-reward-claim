(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){"use strict";var n=a(55),r=a(11);t.a=function(e,t,a){e.setState(function(e){return Object(r.a)({},e,{actions:Object(r.a)({},e.actions,Object(n.a)({},t,Object(r.a)({},e.actions[t],{state:a})))})})}},13:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"e",function(){return c}),a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i});var n="RLQH7v4iJREbUHQJ6x6s2eUNJnYyzD2Foq",r=5,c=2e4,s="https://insight.hyperdex.app/insight-api-komodo/",i={messagePrefix:"\x18Komodo Signed Message:\n",bip32:{public:76067358,private:76066276},pubKeyHash:60,scriptHash:85,wif:188}},156:function(e,t,a){"use strict";(function(e){var n=a(22),r=a(23),c=a(25),s=a(24),i=a(26),o=a(0),u=a.n(o),l=a(157),d=a(158),m=a(172),p=a(171),f=a(168),b=a(170),h=(a(411),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state=a.initialState,a.resetState=function(){return a.setState(a.initialState)},a.handleRewardData=function(e){var t=e.accounts,n=e.tiptime;a.setState({accounts:t,tiptime:n})},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"App"},u.a.createElement(d.a,null,u.a.createElement("div",{className:"buttons"},u.a.createElement(m.a,{handleRewardData:this.handleRewardData},u.a.createElement("strong",null,"Check Rewards")),u.a.createElement("button",{className:"button is-light",onClick:this.resetState},"Reset"))),u.a.createElement("section",{className:"main"},0===this.state.accounts.length?u.a.createElement("img",{className:"ledger-graphic",src:"/ledger.svg",alt:"Ledger Nano S"}):u.a.createElement(p.a,this.state)),u.a.createElement(f.a,null),u.a.createElement(b.a,null,u.a.createElement("p",null,u.a.createElement("strong",null,"Ledger KMD Reward Claim")," by ",u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/atomiclabs"},"Atomic Labs"),". The ",u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/atomiclabs/komodo-ledger-reward-claim"},"source code")," is licensed under ",u.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/atomiclabs/komodo-ledger-reward-claim/blob/master/LICENSE"},"MIT"),".")))}},{key:"initialState",get:function(){return{accounts:[],tiptime:null}}}]),t}(u.a.Component));t.a=Object(l.hot)(e)(h)}).call(this,a(184)(e))},158:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(159);a(186);t.a=function(e){var t=e.children;return r.a.createElement("nav",{className:"Header navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement(c.a,{className:"KmdIcon"})),r.a.createElement("h1",{className:"navbar-item"},r.a.createElement("strong",null,"Ledger KMD Reward Claim"))),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},t)))))}},168:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(8),s=a(22),i=a(23),o=a(25),u=a(24),l=a(26),d=a(0),m=a.n(d),p=a(169),f=a(60),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={u2fSupported:null},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=this,e.next=3,Object(p.isSupported)();case 3:e.t1=e.sent,e.t2={u2fSupported:e.t1},e.t0.setState.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return m.a.createElement(f.a,{title:"Warning: U2F Not Supported in This Browser",show:!1===this.state.u2fSupported},m.a.createElement("p",null,"The U2F API is required for the web browser to communicate with the Ledger device."),m.a.createElement("p",null,"Try using Chrome or Opera instead."),m.a.createElement("p",null,"You can view a list of U2F supporting browsers at ",m.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://caniuse.com/#feat=u2f"},"caniuse.com/#feat=u2f"),"."))}}]),t}(m.a.Component);t.a=b},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(409);t.a=function(e){var t=e.children;return r.a.createElement("footer",{className:"Footer"},r.a.createElement("div",{className:"content has-text-centered"},t))}},171:function(e,t,a){"use strict";var n=a(22),r=a(23),c=a(25),s=a(24),i=a(26),o=a(0),u=a.n(o),l=a(11),d=a(165),m=a(166),p=a.n(m),f=function(e){return p()(Object(d.toBitcoin)(e))},b=a(58),h=a(167),v=function(e){var t=e.locktime,a=e.height;return!(a>=7777777||t<5e8||!a)&&(t*=1e3)+(a>=1e6?26784e5:31536e6)},g=function(e){var t=v(e);return t?Object(h.distanceInWordsToNow)(t,{addSuffix:!0}):"N/A"},E=a(61),w=function(e){var t=e.utxos,a=e.tiptime,n=["Address","Value","Locktime","Rewards","Rewards Stop Accruing"];return u.a.createElement("table",{className:"table is-striped"},u.a.createElement("thead",null,u.a.createElement("tr",null,n.map(function(e){return u.a.createElement("th",{key:e},e)}))),u.a.createElement("tfoot",null,u.a.createElement("tr",null,n.map(function(e){return u.a.createElement("th",{key:e},e)}))),u.a.createElement("tbody",null,t.map(function(e){return u.a.createElement("tr",{key:e.id,className:"utxo"},u.a.createElement("th",null,e.address),u.a.createElement("td",null,f(e.satoshis)," KMD"),u.a.createElement("td",null,u.a.createElement(E.a,{value:e.locktime})),u.a.createElement("td",null,f(Object(b.a)(Object(l.a)({tiptime:a},e)))," KMD"),u.a.createElement("td",null,g(e)))})))},O=a(37),x=a(2),j=a.n(x),k=a(8),y=a(3),N=a(59),S=a(29),C=a(27),A=a(56),R=a(12),T=a(13),K=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state=a.initialState,a.resetState=function(){return a.setState(a.initialState)},a.getUnusedAddressIndex=function(){return a.props.account.addresses.filter(function(e){return!e.isChange}).length},a.getUnusedAddress=function(){return Object(A.a)(a.props.account.externalNode.derive(a.getUnusedAddressIndex()).publicKey)},a.getOutputs=function(){var e=a.props.account,t=e.balance,n=e.claimableAmount,r=e.serviceFee,c=[{address:a.getUnusedAddress(),value:t+n}];return r>0&&c.push({address:T.c,value:r}),c},a.claimRewards=Object(k.a)(j.a.mark(function e(){var t,n,r,c,s,i,o,u,d;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props.account,n=t.accountIndex,r=t.utxos,a.setState(function(e){return Object(l.a)({},a.initialState,{isClaimingRewards:!0})}),e.prev=2,c="connect",Object(R.a)(Object(y.a)(Object(y.a)(a)),c,"loading"),e.next=7,S.a.isAvailable();case 7:if(e.sent){e.next=10;break}throw new Error("Ledger device is unavailable!");case 10:return Object(R.a)(Object(y.a)(Object(y.a)(a)),c,!0),c="confirmAddress",Object(R.a)(Object(y.a)(Object(y.a)(a)),c,"loading"),s=a.getUnusedAddress(),i="44'/141'/".concat(n,"'/0/").concat(a.getUnusedAddressIndex()),!0,e.next=18,S.a.getAddress(i,!0);case 18:if((o=e.sent)===s){e.next=21;break}throw new Error('Ledger derived address "'.concat(o,'" doesn\'t match browser derived address "').concat(s,'"'));case 21:return Object(R.a)(Object(y.a)(Object(y.a)(a)),c,!0),c="approveTransaction",Object(R.a)(Object(y.a)(Object(y.a)(a)),c,"loading"),u=a.getOutputs(),e.next=27,S.a.createTransaction(r,u);case 27:return d=e.sent,Object(R.a)(Object(y.a)(Object(y.a)(a)),c,!0),c="broadcastTransaction",Object(R.a)(Object(y.a)(Object(y.a)(a)),c,"loading"),e.next=33,C.a.broadcast(d);case 33:e.sent,Object(R.a)(Object(y.a)(Object(y.a)(a)),c,!0),a.setState(Object(l.a)({},a.initialState)),e.next=42;break;case 38:e.prev=38,e.t0=e.catch(2),Object(R.a)(Object(y.a)(Object(y.a)(a)),c,!1),a.setState({error:e.t0.message});case 42:case"end":return e.stop()}},e,this,[[2,38]])})),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isClaimingRewards,a=e.actions,n=e.error,r=this.props.account.claimableAmount>0,c=this.getOutputs(),s=Object(O.a)(c,2),i=s[0],o=s[1];return u.a.createElement(u.a.Fragment,null,u.a.createElement("button",{className:"button is-primary",disabled:!r,onClick:this.claimRewards},this.props.children),u.a.createElement(N.a,{title:"Claiming Rewards",actions:a,error:n,handleClose:this.resetState,show:t},u.a.createElement("p",null,"You should receive a total of ",u.a.createElement("strong",null,f(i.value)," KMD")," to the new unused address: ",u.a.createElement("strong",null,i.address),u.a.createElement("br",null),o?u.a.createElement(u.a.Fragment,null,"There will also be a ",T.d,"% service fee of ",u.a.createElement("strong",null,f(o.value)," KMD")," to: ",u.a.createElement("strong",null,o.address)):null)))}},{key:"initialState",get:function(){return{isClaimingRewards:!1,error:!1,actions:{connect:{icon:"fab fa-usb",description:u.a.createElement("div",null,"Connect and unlock your Ledger, then open the Komodo app on your device."),state:null},confirmAddress:{icon:"fas fa-search-dollar",description:u.a.createElement("div",null,"Confirm the address on your device matches the new unused address shown above."),state:null},approveTransaction:{icon:"fas fa-key",description:u.a.createElement("div",null,"Approve the transaction on your device after carefully checking the values and addresses match those shown above."),state:null},broadcastTransaction:{icon:"fas fa-broadcast-tower",description:u.a.createElement("div",null,"Broadcasting the reward claim transaction to the network."),state:null}}}}}]),t}(u.a.Component),D=(a(404),a(406),function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.account,a=e.tiptime,n=t.accountIndex,r=t.utxos,c=t.balance,s=t.rewards,i=t.claimableAmount,o=t.serviceFee,l=i>0;return u.a.createElement("div",{className:"Account column is-full"},u.a.createElement("div",{className:"box"},u.a.createElement("div",{className:"content"},u.a.createElement("h2",null,"Account ",n+1,u.a.createElement("div",{className:"balance"},f(c)," KMD"),u.a.createElement("small",null,"+ ",f(Math.max(0,i))," KMD Claimable Rewards")),u.a.createElement("h4",null,"UTXOs"),u.a.createElement(w,{utxos:r,tiptime:a}),l&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h4",null,"Breakdown"),u.a.createElement("table",{className:"breakdown"},u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,f(s)," KMD"),u.a.createElement("td",null,"Rewards accrued")),u.a.createElement("tr",null,u.a.createElement("td",null,f(o)," KMD"),u.a.createElement("td",null,T.d,"% service fee")),u.a.createElement("tr",null,u.a.createElement("td",null,f(T.e)," KMD"),u.a.createElement("td",null,"Network transaction fee")),u.a.createElement("tr",null,u.a.createElement("td",null,u.a.createElement("strong",null,f(i)," KMD")),u.a.createElement("td",null,"Total claimable amount"))))),u.a.createElement(K,{account:t},"Claim Rewards"))))}}]),t}(u.a.Component));t.a=function(e){var t=e.accounts,a=e.tiptime;return u.a.createElement("div",{className:"Accounts"},u.a.createElement("div",{className:"container"},u.a.createElement("div",{className:"columns is-multiline"},t.map(function(e){return u.a.createElement(D,{key:e.accountIndex,account:e,tiptime:a})}))))}},172:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(37),s=a(8),i=a(11),o=a(22),u=a(23),l=a(25),d=a(24),m=a(26),p=a(3),f=a(0),b=a.n(f),h=a(29),v=a(86),g=a(27),E=a(56),w=a(57),O=a.n(w),x=function(){var e=Object(s.a)(r.a.mark(function e(t){var a,n,c,s,i,o,u,l,d,m,p,f,b,h;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a=10,n=20,c=[],s=0,i=0;case 5:if(!(s<n)){e.next=38;break}for(o=[],u=0;u<a;u++)l=Object(E.a)(t.derive(i).publicKey),o.push(g.a.getAddress(l)),c.push({address:l,addressIndex:i}),i++;return d=!0,m=!1,p=void 0,e.prev=11,e.next=14,Promise.all(o);case 14:e.t0=Symbol.iterator,f=e.sent[e.t0]();case 16:if(d=(b=f.next()).done){e.next=22;break}(h=b.value).totalReceived>0||h.unconfirmedBalance>0?s=0:s++;case 19:d=!0,e.next=16;break;case 22:e.next=28;break;case 24:e.prev=24,e.t1=e.catch(11),m=!0,p=e.t1;case 28:e.prev=28,e.prev=29,d||null==f.return||f.return();case 31:if(e.prev=31,!m){e.next=34;break}throw p;case 34:return e.finish(31);case 35:return e.finish(28);case 36:e.next=5;break;case 38:return e.abrupt("return",c.slice(0,c.length-s));case 39:case"end":return e.stop()}},e,this,[[11,24,28,36],[29,,31,35]])}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(s.a)(r.a.mark(function e(t){var a,n,s,o,u,l,d,m,p,f,b;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="44'/141'/".concat(t,"'"),e.next=3,h.a.getXpub(a);case 3:return n=e.sent,s=O.a.bip32.fromBase58(n),o=s.derive(0),u=s.derive(1),e.next=9,Promise.all([x(o),x(u)]);case 9:return l=e.sent,d=Object(c.a)(l,2),m=d[0],p=d[1],f=function(e){var n=e.isChange;return function(e){return Object(i.a)({},e,{account:t,isChange:n,derivationPath:"".concat(a,"/").concat(n?1:0,"/").concat(e.addressIndex)})}},b=Object(v.a)(m.map(f({isChange:!1}))).concat(Object(v.a)(p.map(f({isChange:!0})))),e.abrupt("return",{externalNode:o,internalNode:u,addresses:b});case 16:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.getUtxos(t.map(function(e){return e.address}));case 2:return a=e.sent,e.next=5,Promise.all(a.map(function(){var e=Object(s.a)(r.a.mark(function e(a){var n,s,o,u,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.find(function(e){return e.address===a.address}),e.next=3,Promise.all([g.a.getRawTransaction(a.txid),g.a.getTransaction(a.txid)]);case 3:return s=e.sent,o=Object(c.a)(s,2),u=o[0].rawtx,l=o[1].locktime,e.abrupt("return",Object(i.a)({id:"".concat(a.txid,":").concat(a.vout)},n,a,{locktime:l,rawtx:u}));case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(r.a.mark(function e(){var t,a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a=0;case 2:return e.next=5,j(a);case 5:if(0!==(n=e.sent).addresses.length){e.next=8;break}return e.abrupt("break",16);case 8:return e.next=10,k(n.addresses);case 10:n.utxos=e.sent,n.accountIndex=a,t.push(n),a++,e.next=2;break;case 16:return e.abrupt("return",t);case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),N=a(58),S=a(12),C=a(13),A=a(59),R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,u=new Array(n),m=0;m<n;m++)u[m]=arguments[m];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(u)))).state=a.initialState,a.resetState=function(){return a.setState(a.initialState)},a.calculateRewardData=function(e){var t=e.accounts,a=e.tiptime;return t.map(function(e){return e.balance=e.utxos.reduce(function(e,t){return e+t.satoshis},0),e.rewards=e.utxos.reduce(function(e,t){return e+Object(N.a)(Object(i.a)({tiptime:a},t))},0),e.serviceFee=Math.floor(e.rewards/100*C.d),e.claimableAmount=e.rewards-e.serviceFee-C.e,e})},a.scanAddresses=Object(s.a)(r.a.mark(function e(){var t,n,s,o,u;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.props.handleRewardData({accounts:[],tiptime:[]}),a.setState(Object(i.a)({},a.initialState,{isCheckingRewards:!0})),e.prev=2,t="connect",Object(S.a)(Object(p.a)(Object(p.a)(a)),t,"loading"),e.next=7,h.a.isAvailable();case 7:if(e.sent){e.next=10;break}throw new Error("Ledger device is unavailable!");case 10:return Object(S.a)(Object(p.a)(Object(p.a)(a)),t,!0),t="approve",Object(S.a)(Object(p.a)(Object(p.a)(a)),t,"loading"),e.next=15,Promise.all([y(),g.a.getTipTime()]);case 15:n=e.sent,s=Object(c.a)(n,2),o=s[0],u=s[1],o=a.calculateRewardData({accounts:o,tiptime:u}),Object(S.a)(Object(p.a)(Object(p.a)(a)),t,!0),a.props.handleRewardData({accounts:o,tiptime:u}),a.setState(Object(i.a)({},a.initialState)),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(2),Object(S.a)(Object(p.a)(Object(p.a)(a)),t,!1),a.setState({error:e.t0.message});case 29:case"end":return e.stop()}},e,this,[[2,25]])})),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isCheckingRewards,a=e.actions,n=e.error;return b.a.createElement(b.a.Fragment,null,b.a.createElement("button",{className:"button is-primary",onClick:this.scanAddresses},this.props.children),b.a.createElement(A.a,{title:"Scanning Blockchain for Rewards",actions:a,error:n,handleClose:this.resetState,show:t},b.a.createElement("p",null,"Exporting public keys from your Ledger device, scanning the blockchain for funds, and calculating any claimable rewards. Please approve any public key export requests on your device.")))}},{key:"initialState",get:function(){return{isCheckingRewards:!1,error:!1,actions:{connect:{icon:"fab fa-usb",description:b.a.createElement("div",null,"Connect and unlock your Ledger, then open the Komodo app on your device."),state:null},approve:{icon:"fas fa-microchip",description:b.a.createElement("div",null,"Approve all public key export requests on your device. ",b.a.createElement("strong",null,"There will be multiple requests"),"."),state:null}}}}}]),t}(b.a.Component);t.a=R},174:function(e,t,a){e.exports=a(175)},175:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(155),s=a.n(c),i=(a(180),a(182),a(156));s.a.render(r.a.createElement(i.a,null),document.getElementById("root"))},182:function(e,t,a){},186:function(e,t,a){},197:function(e,t){},199:function(e,t){},235:function(e,t){},239:function(e,t){},27:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(8),s=a(13),i=function(){var e=Object(c.a)(r.a.mark(function e(t,a){var n,c,i;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={},a&&(n.body=JSON.stringify(a),n.headers=new Headers,n.headers.append("Content-Type","application/json"),n.headers.append("Content-Length",n.body.length),n.method="POST"),e.next=4,fetch("".concat(s.a).concat(t),n);case 4:if(c=e.sent,!c.headers.get("Content-Type").includes("application/json")){e.next=12;break}return e.next=9,c.json();case 9:e.t0=e.sent,e.next=15;break;case 12:return e.next=14,c.text();case 14:e.t0=e.sent;case 15:if(i=e.t0,c.ok){e.next=18;break}throw new Error(i);case 18:return e.abrupt("return",i);case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),o=function(){return i("status?q=getBestBlockHash")},u=function(e){return i("block/".concat(e))},l=function(){var e=Object(c.a)(r.a.mark(function e(){var t,a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o();case 2:return t=e.sent,a=t.bestblockhash,e.next=6,u(a);case 6:return n=e.sent,e.abrupt("return",n.time);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),d={get:i,getAddress:function(e){return i("addr/".concat(e,"/?noTxList=1"))},getUtxos:function(e){return i("addrs/utxo",{addrs:e.join(",")})},getTransaction:function(e){return i("tx/".concat(e))},getRawTransaction:function(e){return i("rawtx/".concat(e))},getBestBlockHash:o,getBlock:u,getTipTime:l,broadcast:function(e){return i("tx/send",{rawtx:e})}};t.a=d},29:function(e,t,a){"use strict";var n=a(2),r=a.n(n),c=a(8),s=a(160),i=a.n(s),o=a(161),u=a.n(o),l=a(162),d=a.n(l),m=a(163),p=a.n(m),f=a(164),b=a.n(f),h=function(){var e=Object(c.a)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.create();case 2:return t=e.sent,(a=new u.a(t)).close=function(){return t.close()},e.abrupt("return",a);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(c.a)(r.a.mark(function e(){var t;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return t=e.sent,e.prev=3,e.next=6,t.getWalletPublicKey("m/44'/0'/0'/0/0");case 6:return e.next=8,t.close();case 8:return e.abrupt("return",!0);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",!1);case 14:case"end":return e.stop()}},e,this,[[3,11]])}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(c.a)(r.a.mark(function e(t,a){var n,c,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return n=e.sent,e.next=5,n.getWalletPublicKey(t,a);case 5:return c=e.sent,s=c.bitcoinAddress,e.next=9,n.close();case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(c.a)(r.a.mark(function e(t,a){var n,s,i,o,u,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return n=e.sent,e.next=5,Promise.all(t.map(function(){var e=Object(c.a)(r.a.mark(function e(t){var a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.splitTransaction(t.rawtx);case 2:return a=e.sent,e.abrupt("return",[a,t.vout]);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));case 5:return s=e.sent,i=t.map(function(e){return e.derivationPath}),void 0,o=d()(a),void 0,void 0,void 0,void 0,u=["sapling"],void 0,e.next=17,n.createPaymentTransactionNew(s,i,void 0,o,void 0,void 0,void 0,void 0,u,void 0);case 17:return l=e.sent,e.next=20,n.close();case 20:return e.abrupt("return",l);case 21:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(c.a)(r.a.mark(function e(t){var a,n,c,s,i,o,u,l;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:return a=e.sent,e.next=5,a.getWalletPublicKey(t);case 5:return n=e.sent,c=n.publicKey,s=n.chainCode,i=p.a.fromString(t).toPathArray(),o=i.length,u=(2147483648|i.pop())>>>0,l=b()({depth:o,childNumber:u,publicKey:c,chainCode:s}),e.next=14,a.close();case 14:return e.abrupt("return",l);case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),O={getDevice:h,isAvailable:v,getAddress:g,createTransaction:E,getXpub:w};t.a=O},297:function(e,t,a){},299:function(e,t,a){},404:function(e,t,a){},406:function(e,t,a){},409:function(e,t,a){},411:function(e,t,a){},56:function(e,t,a){"use strict";var n=a(13),r=a(57),c=a.n(r);t.a=function(e){return c.a.payments.p2pkh({pubkey:e,network:n.b}).address}},58:function(e,t,a){"use strict";t.a=function(e){var t=e.tiptime,a=e.locktime,n=e.height,r=e.satoshis,c=Math.floor((t-a)/60);if(n>=7777777||a<5e8||r<1e9||c<60||!n)return 0;var s=n>=1e6?44640:525600,i=Math.min(c,s);i-=59;var o=Math.floor(r/10512e3)*i;if(o<0)throw new Error("Reward should never be negative");return o}},59:function(e,t,a){"use strict";var n=a(173),r=a(0),c=a.n(r),s=a(60),i=a(61);a(299);t.a=function(e){var t=e.children,a=e.actions,r=void 0===a?[]:a,o=e.error,u=Object(n.a)(e,["children","actions","error"]);return c.a.createElement("div",{className:"ActionListModal"},c.a.createElement(s.a,Object.assign({isCloseable:o},u),t,c.a.createElement("div",{className:"panel"},Object.keys(r).map(function(e){var t=r[e],a=t.icon,n=t.description,s=t.state;return c.a.createElement("div",{key:e,className:"panel-block ".concat("loading"===s?"is-active":"")},c.a.createElement("span",{className:"left-icon icon has-text-grey"},c.a.createElement("i",{className:a})),n,c.a.createElement("div",{className:"right-icon"},"boolean"===typeof s?c.a.createElement(i.a,{value:s}):"loading"===s?c.a.createElement("span",{className:"icon has-text-grey"},c.a.createElement("i",{className:"fas fa-circle-notch fa-spin","aria-hidden":"true"})):null))})),o?c.a.createElement("div",{className:"notification is-danger"},c.a.createElement("strong",null,"Error"),c.a.createElement("p",null,o)):null))}},60:function(e,t,a){"use strict";var n=a(0),r=a.n(n);a(297);t.a=function(e){var t=e.children,a=e.title,n=e.show,c=e.isCloseable,s=e.handleClose;return r.a.createElement("div",{className:"Modal modal ".concat(n?"is-active":"")},r.a.createElement("div",{onClick:function(){return c&&s&&s()}},r.a.createElement("div",{className:"modal-background"}),r.a.createElement("button",{className:"modal-close is-large ".concat(c?"":"is-invisible")})),r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"card"},r.a.createElement("header",{className:"card-header"},r.a.createElement("p",{className:"card-header-title"},a)),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},t)))))}},61:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.value;return r.a.createElement("span",{className:"icon has-text-".concat(t?"success":"danger")},r.a.createElement("i",{className:"fas fa-".concat(t?"check":"times","-circle")}))}}},[[174,2,1]]]);
//# sourceMappingURL=main.2075cccc.chunk.js.map
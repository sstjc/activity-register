var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}// export default
var Child=function(a){var b=a.test,c=a.test2;return React.createElement("div",null,"I am a Child component ",b," ",c)},Input_item=function(a){var b=a.name,c=a.label;return React.createElement("div",null,React.createElement("label",{for:b},React.createElement("b",null,c)),React.createElement("input",{type:"text",placeholder:"\u8ACB\u8F38\u5165",name:b,required:!0}))},RollCallForm=function(a){function b(){var a,c,d,e;_classCallCheck(this,b);for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];return e=(c=(d=_possibleConstructorReturn(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(g))),d),d.state={member_id_checked:!0,remember_checked:!0,member_id:"",name:"",phone:"",showMessage:!1},d.onClick=function(){d.setState({member_id_checked:!d.state.member_id_checked})},d.input_item_by_checkbox=function(){return d.state.member_id_checked?React.createElement(Input_item,{name:"member_id",label:"\u4FE1\u5F92\u7DE8\u865F"}):[React.createElement(Input_item,{name:"name",label:"\u59D3\u540D"}),React.createElement(Input_item,{name:"phone",label:"\u96FB\u8A71\u865F\u78BC"})]},d.loginSubmit=function(){$.ajax({type:"POST",url:"https://ngghkzcdl5.execute-api.us-east-1.amazonaws.com/dev/rollcall/",data:{id:1},success:success,dataType:dataType}).success(function(){alert("second success")}).error(function(){alert("error")}).complete(function(){alert("complete")}),fetch("https://ngghkzcdl5.execute-api.us-east-1.amazonaws.com/dev/rollcall/",{body:JSON.stringify({id:1}),method:"POST",mode:"no-cors"}).then(function(a){return a.text()}).then(function(a){console.log(a),console.log(JSON.parse(a)),console.log("success"),d.toggleMessage()}// (error) => {
//     // 失敗訊息，給出舊表單頁面
//     this.toggleMessage()
//     console.log('fail', error)
// }
).catch(function(a){d.toggleMessage(),console.log("fail",a)});// const { member_id, name, phone, remember_checked } = this.state
// if (remember_checked) {
//     localStorage.member_id = member_id
//     localStorage.name = name
//     localStorage.name = phone
//     localStorage.checkbox = remember_checked
// }
// here call the API to signup/login
},d.toggleMessage=function(){d.setState({showMessage:!d.state.showMessage})},c),_possibleConstructorReturn(d,e)}// componentDidMount() {
//     if (localStorage.checkbox) {
//         this.setState({
//             remember_checked: true,
//             member_id: localStorage.member_id,
//             name: localStorage.name,
//             phone: localStorage.phone,
//         })
//     }
// }
// onChangeValue = event => {
//     this.setState({
//         [event.target.name]: event.target.value
//     })
// }
// onChangeCheckbox = event => {
//     this.setState({
//         remember_checked: event.target.checked
//     })
// }
return _inherits(b,a),_createClass(b,[{key:"render",value:function h(){var a=this.state,b=a.member_id_checked,c=a.remember_checked,d=a.member_id,e=a.name,f=a.phone,g=null;return this.state.showMessage&&(g=React.createElement(Message,{toggleMessage:this.toggleMessage})),React.createElement("div",null,React.createElement("form",{action:"#"},React.createElement("div",{class:"container"},React.createElement("div",{class:"form-title"},React.createElement("h1",{class:"text-center"},"\u677E\u5C71\u6559\u6703\u9632\u75AB\u9EDE\u540D\u7CFB\u7D71"),React.createElement("div",{class:"check_id"},React.createElement("input",{class:"mr-1 big-checkbox",type:"checkbox",checked:this.state.member_id_checked,onClick:this.onClick.bind(this)}),"\u662F\u5426\u6709\u4FE1\u5F92\u7DE8\u865F")),React.createElement("div",{class:"input-item"},this.input_item_by_checkbox()),React.createElement("div",{class:"clearfix form-submit"},React.createElement("button",{type:"submit",class:"btn btn-success",onClick:this.loginSubmit},"\u5831\u5230")))),g)}}]),b}(React.Component);
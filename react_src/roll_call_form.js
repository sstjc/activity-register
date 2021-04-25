// export default
const Child = ({test, test2}) => (<div>I am a Child component {test} {test2}</div>)

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      
      // 初始化輸入框的 state 值為空
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    // onChange 事件處理函示
    handleChange(event) {
      // event.target 是當前的 DOM elment
      // 從 event.target.value 取得 user 剛輸入的值
      // 將 user 輸入的值更新回 state
      this.setState({value: event.target.value});
    }
  
    // form onSubmit 事件處理函式
    handleSubmit(event) {
      alert('Submit ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      // 將 value 設定為 this.state.value
      // 並監聽 onChange 來更新 state
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      // 從 event object 拿到 target
      const target = event.target;
      
      // 從 target.type 可以知道欄位的 type
      // 分別再從 target.checked 得到選取的狀態
      // 或從 target.value 取出輸入的欄位值
      const value = target.type === 'checkbox' ? target.checked : target.value;
      
      // 從 target.name 得到該欄位設定的 name
      const name = target.name;
  
      // 分別更新不同 name 欄位的 state
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
        <form>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
  );
  


class RollCallForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            member_id_checked: true,
            remember_checked: true,
            member_id: '',
            name: '',
            phone: '',
            value: '',
            showMessage: false,
          };

        this.idHandleChange = this.idHandleChange.bind(this);
        this.nameHandleChange = this.nameHandleChange.bind(this);
        this.phoneHandleChange = this.phoneHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    onClick = e => {
        // 提供給是否有編號
        this.setState({ member_id_checked: !this.state.member_id_checked });
    };

    // onChange 事件處理函示
    idHandleChange(event) {
        // event.target 是當前的 DOM elment
        // 從 event.target.value 取得 user 剛輸入的值
        // 將 user 輸入的值更新回 state
        this.setState({member_id: event.target.value});
    }
    nameHandleChange(event) {
        this.setState({name: event.target.value});
    }
    phoneHandleChange(event) {
        this.setState({phone: event.target.value});
    }
    handleSubmit(event) {
        alert('Submit ' + this.state.member_id);
        event.preventDefault();
      }

    input_item_by_checkbox = () => {
            if(this.state.member_id_checked){
                return (
                <div>
                    <label>信徒編號</label>
                    <input type="text" onChange={this.idHandleChange} value={this.state.member_id} />      
                </div>
                )
            }else{
                return [
                <div>
                    <label>姓名</label>
                    <input type="text" onChange={this.nameHandleChange} value={this.state.name} required />      
                </div>,
                <div>
                    <label>電話號碼</label>
                    <input type="text" onChange={this.phoneHandleChange} value={this.state.phone} required />      
                </div>
            ]
        }
    }
 
    submitForm = (e) => {
        e.preventDefault();
        console.log('form gogogo')
        let target_url = "https://ngghkzcdl5.execute-api.us-east-1.amazonaws.com/dev/rollcall/"

        $.ajax({
            type: 'POST',
            crossDomain: true,
            url: target_url,
            data: {
                'id': this.state.member_id,
                'vistor_name': this.state.name,
                'vistor_phone': this.state.phone,
            },
            // dataType: 'json',
            success: (data) => {
                alert(data);

            },
            error: (error) => {
                alert(error);
            },
          }) 
          
        // todo 改用jquery
        // fetch(target_url, {
        //     body: JSON.stringify({
        //         'id': 1,
        //     }),
        //     method: 'POST',
        //     mode: 'no-cors',
        // })
        // .then((res) => {
        //     return res.text()
        // })
        // .then(
        //     (result) => {
        //         // 成功訊息
        //         console.log(result)
        //         console.log(JSON.parse(result))
        //         console.log('success')
        //         this.toggleMessage()
        //     },
        //     (error) => {
        //         // 失敗訊息，給出舊表單頁面
        //         this.toggleMessage()
        //         console.log('fail', error)
        //     }
        // )
        // .catch((error) => {
        //     this.toggleMessage()
        //     console.log('fail', error)
        // })
    }

    toggleMessage = () => {
        this.setState({showMessage:!this.state.showMessage});
    }


    render() { 
      const { member_id_checked, remember_checked, member_id, name, phone, } = this.state
      
      let this_message = null;
      if (this.state.showMessage) {
        this_message = <Message toggleMessage={this.toggleMessage} />
      }

      return (
            <div>
                <form action="#">
                    <div class="container">
                        <div class="form-title">
                            <h1 class='text-center'>松山教會防疫點名系統</h1>
                            <div class='check_id'>
                                    <input class='mr-1 big-checkbox' type="checkbox" checked={this.state.member_id_checked} onClick={this.onClick.bind(this)} />
                                    是否有信徒編號
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            {/* <div class="input-item">
                                {this.input_item_by_checkbox()}
                            </div> */}

                            <div class="clearfix form-submit">
                                <input type="text" value={this.state.member_id} onChange={this.idHandleChange} />
                                <input type="submit" value="Submit" />
                                {/* <button type="submit" class="btn btn-success" >報到</button> */}
                            </div>
                        </form>
                    </div>
                </form>
                {this_message}
                <MyForm/>
                <Reservation/>
            </div>
      );
    }
}
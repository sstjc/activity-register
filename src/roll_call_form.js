// export default
const Child = ({test, test2}) => (<div>I am a Child component {test} {test2}</div>)

const Input_item = ({name, label}) => (
    <div>
        <label for={name}><b>{label}</b></label>
        <input type="text" placeholder="請輸入" name={name} required />      
    </div>
  )


class RollCallForm extends React.Component {  
    state = {
        member_id_checked: true,
        remember_checked: true,
        member_id: '',
        name: '',
        phone: '',
        showMessage: false,
      };
    
    onClick = e => {
        // 提供給是否有編號
        this.setState({ member_id_checked: !this.state.member_id_checked });
    };

    input_item_by_checkbox = () => {
            if(this.state.member_id_checked){
                return <Input_item name="member_id" label="信徒編號"/>
            }else{
                return [
                <Input_item name="name" label="姓名"/>, 
                <Input_item name="phone" label="電話號碼"/>
            ]
        }
    }

    // componentDidMount() {
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
 
    loginSubmit = (id) => {
        // const { member_id, name, phone, remember_checked } = this.state
        // if (remember_checked) {
        //     localStorage.member_id = member_id
        //     localStorage.name = name
        //     localStorage.name = phone
        //     localStorage.checkbox = remember_checked
        // }
        // here call the API to signup/login
        let target_url = "https://ngghkzcdl5.execute-api.us-east-1.amazonaws.com/dev/rollcall/"

        $.ajax({
            type: 'POST',
            crossDomain: true,
            url: target_url,
            data: {
                'id': 1,
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
                        <div class="input-item">
                            {this.input_item_by_checkbox()}
                        </div>
                        {/* <div>                                
                            <input type="checkbox" checked={remember_checked} name="lsRememberMe" onChange={this.onChangeCheckbox} />
                            <label>Remember me</label>
                        </div> */}
                        <div class="clearfix form-submit">
                            {/* <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">報到</button> */}
                            <button type="submit" class="btn btn-success" onClick={this.loginSubmit}>報到</button>
                        </div>
                    </div>
                </form>
                {this_message}
            </div>
      );
    }
}
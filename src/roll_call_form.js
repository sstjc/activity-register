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

      };
    
    onClick = e => {
        // 提供給是否有編號
        this.setState({ member_id_checked: !this.state.member_id_checked });
    };

    input_item_by_checkbox = () => {
            if(this.state.member_id_checked){
                return <Input_item name="member_id" label="編號"/>
            }else{
                return [
                <Input_item name="name" label="姓名"/>, 
                <Input_item name="phone" label="電話號碼"/>
            ]
        }
    }

    componentDidMount() {
        if (localStorage.checkbox && localStorage.email !== "") {
            this.setState({
                remember_checked: true,
                member_id: localStorage.member_id,
                name: localStorage.name,
                phone: localStorage.phone,
            })
        }
    }
 
    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
 
    onChangeCheckbox = event => {
        this.setState({
            remember_checked: event.target.checked
        })
    }
 
    loginSubmit = () => {
        const { member_id, name, phone, remember_checked } = this.state
        if (remember_checked && email !== "") {
            localStorage.member_id = member_id
            localStorage.name = name
            localStorage.name = phone
            localStorage.checkbox = remember_checked
        }
        // here call the API to signup/login
    }
    render() { 
      const { member_id_checked, remember_checked, member_id, name, phone, } = this.state
      return (
            <div>
                <form action="#">
                    <div class="container">
                    <h1>松山教會防疫點名系統</h1>
                    <div class='mb-3'>是否有信徒編號: 
                         <input class='ml-1' type="checkbox" checked={this.state.member_id_checked} onClick={this.onClick.bind(this)} />
                    </div>
                    <div class="input-item">
                        {this.input_item_by_checkbox()}
                    </div>
                    <div>                                
                        <input type="checkbox" checked={remember_checked} name="lsRememberMe" onChange={this.onChangeCheckbox} />
                        <label>Remember me</label>
                    </div>
                    <div class="clearfix">
                        {/* <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">報到</button> */}
                        <button type="submit" class="btn btn-primary" onClick={this.loginSubmit}>報到</button>

                    </div>
                    </div>
                </form>
            </div>
      );
    }
}
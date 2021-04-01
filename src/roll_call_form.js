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
        checked: true
      };
    
    onClick = e => {
        this.setState({ checked: !this.state.checked });
    };

    input_item_by_checkbox = () => {
            if(this.state.checked){
                return <Input_item name="member_id" label="編號"/>
            }else{
                return [
                <Input_item name="name" label="姓名"/>, 
                <Input_item name="phone" label="電話號碼"/>
            ]
        }
    }
    render() {  
      return (
            <div>
                <form action="#">
                    <div class="container">
                    <h1>松山教會防疫點名系統</h1>
                    <div class='mb-3'>是否有信徒編號: 
                        <input type="checkbox" checked={this.state.checked} onClick={this.onClick.bind(this)} />
                    </div>
                    <div class="input-item">
                        {this.input_item_by_checkbox()}
                    </div>
                    <div class="clearfix">
                        <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">報到</button>
                    </div>
                    </div>
                </form>
            </div>
      );
    }
}
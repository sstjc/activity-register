'use strict';

class RollCallForm extends React.Component {  
    render() {  
      return (
            <div>
                <form action="#">
                    <div class="container">
                    <h1>Roll Call</h1>
                    <div>是否有信徒編號: <input type="checkbox" name="check_member" /></div>

                    <div>
                        <label for="member_id"><b>編號</b></label>
                        <input type="text" placeholder="請輸入" name="member_id" required />      
                    </div>
                    <div>
                        <label for="name"><b>姓名</b></label>
                        <input type="text" placeholder="請輸入" name="name" required />      
                    </div>
                    <div>
                        <label for="phone"><b>電話號碼</b></label>
                        <input type="text" placeholder="請輸入" name="phone" required />      
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

  
class Message extends React.Component {  
    render() {  
      return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">報到成功</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Jimmy 報到成功
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">關閉</button>
            </div>
            </div>
        </div>
        </div>
      );
    }
  }
  

class App extends React.Component {
  render() {
    return (
        <div>
            <RollCallForm />
            <Message />
        </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
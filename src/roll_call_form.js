// export default 
class RollCallForm extends React.Component {  
    render() {  
      return (
            <div>
                <form action="#">``
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
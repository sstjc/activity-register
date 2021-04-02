// export default 
class Message extends React.Component {  
  close_message() {
    if (localStorage.checkbox && localStorage.email !== "") {
        this.setState({
            remember_checked: true,
            member_id: localStorage.member_id,
            name: localStorage.name,
            phone: localStorage.phone,
        })
    }
}
    render() {  
      const style = {
        display: 'block',
      };
      return (
        <div class="modal" style={style}>
          <div class="modal-dialog" role="document">
              <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">訊息通知</h5>
              </div>
              <div class="modal-body">
                  Jimmy 報到成功
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-primary"  onClick={this.props.toggleMessage.bind(this)}>關閉</button>
              </div>
              </div>
          </div>
        </div>
      );
    }
  }
// export default 
class Message extends React.Component {  
    render() {  
      return (
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">訊息通知</h5>
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
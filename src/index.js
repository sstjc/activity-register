$(() => {
  let clean_data = () => {
    $("#member_id input").val('')
    $("#name input").val('')
    $("#phone input").val('')
  }

  let get_meeting_data = () => {
    $.ajax({
      type: "GET",
      url: "http://127.0.0.1:8000/api/v1/meetings/",
      success: (res_data) => {
        render_meeting_radio(res_data.meeting_data)
      },
      error: (res_data) => {
        alert('未知錯誤，報到失敗')
      },
    });
  }
  get_meeting_data()

  let render_meeting_radio = (datas) => {
    let meeting_row = document.querySelector('.meeting_row')
    if(datas.length > 0){
      for (let data of datas) {
        //插入最後一個子項
        meeting_row.insertAdjacentHTML('beforeend', meeting_html(data))
      }
    }else{
      meeting_row.insertAdjacentHTML('beforeend', no_meeting_html())
    }

  }
  let meeting_html = (data) => {
    let disabled_status = ''
    let limit_message = ''
    if(data.limit_number){
      if(data.rollcall_number > 0){
        limit_message = `剩餘名額 ${data.rollcall_number} 位`
      }else{
        limit_message = `額滿，無法登記`
        disabled_status = 'disabled'
      } 
    }else{
      limit_message = `無名額限制`
    }
    return `
      <div class="form-check">
      <input class="form-check-input" type="radio" name="meetingRadios" value="option1" ${disabled_status}>
      <label class="form-check-label">
      ${data.meeting_time}，${limit_message}
      </label>
      <input class="btn btn-info" value="報名名單" />
    </div> 
  `
  }

  let no_meeting_html = () => {
    return '<div>* 目前沒有可預約的聚會</div>'
  }


  // $("input[type='checkbox']").click(() => {
  //   $.each($("form#rollcallForm div.input-list div"), (index, value) => {
  //     // toggle hidden_form
  //     value.classList.toggle("hidden_form");

  //     // toggle required
  //     let this_input = value.children[1]
  //     this_input.required = ! this_input.required

  //     clean_data()
  //   })
  // })

  // 登入腳本
  $('#rollcallForm').submit((e) => {
    e.preventDefault();

    let member_id = $("#member_id input").val();
    let name = $("#name input").val();
    let phone = $("#phone input").val();
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/rollcall",
      // url: "https://ngghkzcdl5.execute-api.us-east-1.amazonaws.com/dev/rollcall/",
      data: {
        id: member_id,
        vistor_name: name,
        vistor_phone: phone,
      },
      success: (res_data) => {
        alert(res_data)
        clean_data()
      },
      error: (res_data) => {
        alert('未知錯誤，報到失敗')
      },
    });
  });

});

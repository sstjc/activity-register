$(() => {
  let base_domain = 'http://127.0.0.1:8000/api/v1'

  let get_meeting_data = () => {
    $.ajax({
      type: "GET",
      url: `${base_domain}/meetings/`,
      success: (res_data) => {
        console.log(res_data)
        render_meeting_radio(res_data.meeting_data)
      },
      error: (res_data) => {
        console.log('unknown error')
      },
    });
  }
  get_meeting_data()

  let render_meeting_radio = (datas) => {
    let meeting_row = document.querySelector('.meeting_row')
    if(datas.length > 0){
      if(datas.find((item) => item.is_full === false)){
        let enroll = document.querySelector('.enroll')
        let basic_data = document.querySelector('.basic_data')
       //添加登入按鈕
        enroll.insertAdjacentHTML('beforeend', enroll_html())
        //添加基本資料表單
        basic_data.insertAdjacentHTML('beforeend', basic_data_html())
      }
      
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
    let required_status = ''
    if(data.limit_number){
      let remaining_number = data.limit_number - data.rollcall_number
      if(remaining_number > 0){
        limit_message = `剩餘名額 ${remaining_number} 位`
        required_status = 'required="required"'
      }else{
        limit_message = `額滿，無法登記`
        disabled_status = 'disabled'
      } 
    }else{
      limit_message = `無名額限制`
    }
    return `
      <div class="form-check">
      <input class="form-check-input" type="radio" name="meetingRadios" value="${data.id}" ${disabled_status} ${required_status}>
      <label class="form-check-label">
      ${data.display_meeting_time}，${limit_message}，
      </label>
      <a class="btn btn-info" href="/rollcall_list.html?id=${data.id}">查看登記名單</a>
    </div> 
  `
  }

  let no_meeting_html = () => {
    return '<div>* 目前沒有可預約的聚會</div>'
  }


  let basic_data_html = () => {
    return `
    <div id='name'>
          <label><b>姓名</b></label>
          <input type="text" placeholder="請輸入" required="required">
        </div>
        <div id='phone'>
          <label><b>電話</b></label>
          <input type="text" placeholder="請輸入" required="required">
    </div>
    `
  }

  let enroll_html = () => {
    return '<input id="submit" type="submit" class="btn btn-success" value="登記" />'
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
    let meeting_id =$('input[name=meetingRadios]:checked', '#rollcallForm').val()
    
    $.ajax({
      type: "POST",
      url: `${base_domain}/rollcall/`,
      data: {
        member_id: member_id,
        name: name,
        phone: phone,
        meet: meeting_id,
        meeting: meeting_id,
        meeting_id: meeting_id,
      },
      success: (res_data) => {
        console.log(res_data)
        if(res_data.isfull){
          alert(`登記失敗，此時段的聚會已額滿`)
        }else{
          alert(`成功，${res_data.name} 已登記 ${res_data.meeting_time} 的聚會`)
        }
        location.reload();

      },
      error: (res_data) => {
        alert('未知錯誤，報到失敗')
      },
    });
  });

});

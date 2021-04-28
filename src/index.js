$(() => {
  let clean_data = () => {
    $("#member_id input").val('')
    $("#name input").val('')
    $("#phone input").val('')
  }

  $("input[type='checkbox']").click(() => {
    $.each($("form#rollcallForm div.input-list div"), (index, value) => {
      // toggle hidden_form
      value.classList.toggle("hidden_form");
      
      // toggle required
      let this_input = value.children[1]
      this_input.required = ! this_input.required

      clean_data()
    })
  })

  // 登入腳本
  $('#rollcallForm').submit((e) => {
    e.preventDefault();

    let member_id = $("#member_id input").val();
    let name = $("#name input").val();
    let phone = $("#phone input").val();
    $.ajax({
        type:"POST",
        // url: "http://localhost:5000/rollcall",
        url: "https://ngghkzcdl5.execute-api.us-east-1.amazonaws.com/dev/rollcall/",
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
        // complete: (res_data) => {
        //   alert('complete')
        // },
    });
  });

});

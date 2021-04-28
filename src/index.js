$(() => {
  $("input[type='checkbox']").click(() => {
    $.each($("form#rollcallForm div.input-list div"), (index, value) => {
      value.classList.toggle("hidden_form");
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
        url: "http://localhost:5000/rollcall",
        data: {
          id: member_id,
          name: name,
          phone: phone,
        },
        success: (res_data) => {
          alert(res_data)
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

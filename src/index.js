$(() => {
  let myFunction = () => {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

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
          // alert('success')
        },
        error: (res_data) => {
          alert('error')
        },
        complete: (res_data) => {
          alert('complete')
      },
    });
  });

});

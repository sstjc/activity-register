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
          url:"/this_url/",
          data: {
            member_id: member_id,
            name: name,
            phone: phone,
          },
          success: () => {
            alert('success')
          },
          error: () => {
            alert('error')
          },
          complete: () => {
            alert('complete')
        },
      });
  });

});

$(() => {
    let base_domain = 'http://127.0.0.1:8000/api/v1'
    let url_string = window.location.href
    let url = new URL(url_string);
    let id = url.searchParams.get("id");

    let get_meeting_data = (this_meeting_id) => {
        $.ajax({
            type: "GET",
            url: `${base_domain}/rollcall/?meeting_id=${this_meeting_id}`,
            success: (res_data) => {
                render_rollcall_table(res_data)
            },
            error: (res_data) => {
                console.log('unknown error')
            },
        });
    }

    if (id) {
        get_meeting_data(id)
    } else {

    }

    let render_rollcall_table = (res_data) => {
        let datas = res_data.visitor_data
        let rollcall_tbody = document.querySelector('.rollcall_tbody')
        if (datas.length > 0) {
            let order_no = 0
            for (let data of datas) {
                //插入最後一個子項
                order_no += 1
                rollcall_tbody.insertAdjacentHTML('beforeend', rollcall_tbody_html(data, order_no))
                document.querySelector('.meeting_title').textContent = `已報名${res_data.display_meeting_time}聚會列表`
            }
        } else {
            rollcall_tbody.insertAdjacentHTML('beforeend', no_rollcall_tbody_html())
        }

    }
    let rollcall_tbody_html = (data, order_no) => {
        return `
      <tr>
            <td>${order_no}</td>
            <td>${data.display_name}</td>
            <td>${data.display_rollcall_time}</td>
       </tr>
    `
    }

    let no_rollcall_tbody_html = () => {
        return `
         <tr>
            <td colspan=3>目前無報名資料</td>
        </tr>
    `
    }


});

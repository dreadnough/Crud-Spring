$(document).ready(function() {
    showUsers();
});


function showUsers() {
    $.getJSON('/users', {
            ajax: 'true'
        },
        function (data) {
            var html = '';
            var len = data.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    html += '<tr><td align="center">' + data[i].id + '</td>' +
                        '<td align="center">' + data[i].name + '</td>' +
                        '<td align="center">' + data[i].email + '</td>' +
                        '<td align="center">' + data[i].roles + '</td>' +
                        '<td align="center">' + data[i].blogs + '</td>' +
                        '<td align="center">' + data[i].password + '</td>' +
                                           '</tr>';
                }
                $('#listUsers').html(html);
            }
        }
    );
}

function writeCloseStudentId(id) {
    document.getElementById('close_deal_id').value = id;
}

function closeDealModalWindow(id) {
    $('#' + id).modal('hide');
}

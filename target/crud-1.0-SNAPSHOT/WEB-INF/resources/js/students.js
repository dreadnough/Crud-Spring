$(document).ready(function() {
    showStudents();
});


function showStudents() {
    $.getJSON('/students', {
            ajax: 'true'
        },
        function (data) {
            var html = '';
            var len = data.length;
            if (len > 0) {
                for (var i = 0; i < len; i++) {
                    html += '<tr><td align="center">' + data[i].id + '</td>' +
                        '<td align="center">' + data[i].firstName + '</td>' +
                        '<td align="center">' + data[i].surName + '</td>' +
                        '<td align="center">' + data[i].mMark + '</td>' +
                        '<td align="center">' +
                        '<div class="btn-group">' +
                        '<button data-toggle="dropdown" class="btn btn-default dropdown-toggle">Action<span class="caret"></span></button>' +
                        '<ul class="dropdown-menu">' +
                        '<li><a href="#" data-toggle="modal" data-target="#feedback_mod_wind" onclick="writeFeedbackId(' + data[i].id + ')">Feedback</a></li>' +
                        '<li><a href="#">Conflict</a></li>' +
                        '<li><a href="#" data-toggle="modal" data-target="#close_deal_mod_wind" onclick="writeCloseDealId(' + data[i].id + ')">Close</a></li>' +
                        '</ul>' +
                        '</div>' +
                        '</td></tr>';
                }
                $('#listStudents').html(html);
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

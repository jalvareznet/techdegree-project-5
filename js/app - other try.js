// // THIS ONE IS WORKING

// $(document).ready(function(){

// 	$.ajax({
// 		url: 'https://randomuser.me/api/?results=12',
// 		dataType: 'json',
// 		success: function(data) {
// 		console.log(data);
// 		console.log(data.results);
// 		console.log(data.results[0].name);

// 		var employeesHTML = '<ul class="employees">';
		
// 		for (var i = 0; i < data.results.length; i += 1) {

// 			employeesHTML += '<div class="employee">';
// 			employeesHTML += '<li class="picture">';
// 			employeesHTML += '<img src=' + data.results[i].picture.medium + '></li>';
// 			employeesHTML += '<div class="data">';
// 			employeesHTML += '<li class="name">';
// 			employeesHTML += '<p>' + data.results[i].name.first.toUpperCase() + ' ' + data.results[i].name.last.toUpperCase() + '</p></li>';
// 			employeesHTML += '<li class="email">';
// 			employeesHTML += '<p>' + data.results[i].email + '</p></li>';
// 			employeesHTML += '<li class="location">';
// 			employeesHTML += '<p>' + data.results[i].location.state[0].toUpperCase() + data.results[i].location.state.substr(1, 99) + '</p></li>';
// 			employeesHTML += '</div></div>';
// 		}
// 		employeesHTML += '</ul>';
// 		$('#employeeintro').html(employeesHTML);
// 	}
// });

// }); //end ready

// // THIS ONE IS NOT WORKING

$(document).ready(function () {

    $.ajax({
        url: 'https://randomuser.me/api/?results=12',
        dataType: 'json',
        success: function (data) {
          
            var employeesHTML = '<ul class="employees">';

            $.each(data.results, function (index, employee) {

            employeesHTML += `<div class="employee">
                <li class="picture">
                <img src="${employee.picture.medium}"></li>
                <div class="data">
                <li class="name">
                <p>${employee.name.first.toUpperCase()} ${employee.name.last.toUpperCase()}</p></li>
                <li class="email">
                <p>${employee.email}</p></li>
                <li class="location">
                <p>${employee.location.state[0].toUpperCase()} ${employee.location.state.substr(1, 99)}</p></li>
                </div></div>`
            });
            employeesHTML += '</ul>';
            $('#employeeintro').html(employeesHTML);
        }
    });

});

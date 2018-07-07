
//request the data
    $.ajax({
        url: 'https://randomuser.me/api/?results=12&nat=us',
        dataType: 'json',
        success: function (data) {
          
            var employeesHTML = '<ul class="employees">';

            //loop for each employee
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
                <p>${employee.location.state[0].toUpperCase()}${employee.location.state.substr(1, 99)}</p></li>
                </div></div>`	
            });
            employeesHTML += '</ul>';
            //insert the html
            $('#employeeintro').html(employeesHTML);

            //creating variables for the modal.

            const $modal = $('#myModal');
            const $btnDiv = $('.employee');
            const $spanClose = $('.close');

            console.log(data.results);

            $($btnDiv).click(function(){

            let selectIndex = $($btnDiv).index(this);

            //creating the HTML for the modal

             let modalContentHTML = `<div class="employee-modal">
                 <li class="picture-modal">
                 <img src=${data.results[selectIndex].picture.large}></li>
                 <div class="data-modal">
                 <li class="name-modal">
                 <p>${data.results[selectIndex].name.first.toUpperCase()} ${data.results[selectIndex].name.last.toUpperCase()}</p></li>
                 <li class="email-modal">
                 <p>${data.results[selectIndex].email}</p></li>
                 <li class="location-modal">
                 <p>${data.results[selectIndex].location.state[0].toUpperCase()}${data.results[selectIndex].location.state.substr(1, 99)}</p></li>
                 <br></div>
                 <div class="data-modal-2">
                 <li class="phone">
                 <p>${data.results[selectIndex].phone}</p></li>
                 <div class="adress">
                 <p>${data.results[selectIndex].location.street}, ${data.results[selectIndex].location.city}, ${data.results[selectIndex].location.postcode}</p>
                 <div class="birthday">
                 <p>Birthday: ${data.results[selectIndex].dob.date.substr(0, 10)}</p>
                 </div></div></div></div>
                 `;

                 //inserting the html

                $('.interior-modal').html(modalContentHTML);            
            });

            //show the modal

            $($btnDiv).on('click', function(){
                $($modal).show();
            });

            // hide the modal

            $($spanClose).on('click', function(){
                $($modal).hide();
            });
        }
	});








///////////////////////////////////////////////////////
//
// File: index.js
// This is application file for login page to accept login credentials
//
// Last Updated: 29-11-2018
// Reformat, Indentation, Inline Comments
//
/////////////////////////////////////////////////////


window.onload = function () {
    $(".login_join_div").show();

}
var username = "demo";
var password = "enablex";

// Verifies login credentials before moving to Conference page

document.getElementById('login_form').addEventListener('submit', function (event) {
    event.preventDefault();


    var name = document.querySelector('#nameText'), room = document.querySelector('#roomName'), agree = document.querySelector('[name="agree"]'), errors = [];
    if (name.value.trim() === '') {
        errors.push('Enter your name.');
    }
    if (room.value.trim() === '') {
        errors.push('Enter your Room Id.')
    }

    if (!agree.checked ) {
        errors.push('Accept terms of use and privacy policy.')
    }

    if (errors.length > 0) {
        var mappederrors = errors.map(function (item) {
            return item + "</br>";
        });
        var allerrors = mappederrors.join('').toString();
        $.toast({
            heading: 'Error',
            text: allerrors,
            showHideTransition: 'fade',
            icon: 'error',
            position: 'top-right',
            showHideTransition: 'slide'
        });

        return false;
    }


    joinRoom(document.getElementById('roomName').value, function (data) {
        console.log('data:' , data)
        if (!jQuery.isEmptyObject(data)) {

            var user_ref = document.getElementById('nameText').value;

            // window.location.href = "confo.html?roomId=" + data.room_id + "&usertype=participant&user_ref=" + user_ref;
            window.location.href = "confo/" + data.room_id + "/participant/" + user_ref;
        } else {
            alert('No room found');
        }
    });
});

var loadingElem = document.querySelector('.loading');
document.getElementById('create_room').addEventListener('click', function (event) {
    loadingElem.classList.add('yes');
    createRoom(function (result) {
        document.getElementById("roomName").value = result;
        document.getElementById("create_room_div").style.display = "none";
        document.getElementById("message").innerHTML = "We have prefilled the form with room-id. Share it with someone you want to talk to";
    });
});


var createRoom = function (callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response =  JSON.parse(this.responseText);
            if(response.error){
                $.toast({
                    heading: 'Error',
                    text: response.error,
                    showHideTransition: 'fade',
                    icon: 'error',
                    position: 'top-right'
                });

            }
            else {
                callback(response.room.room_id);
                loadingElem.classList.remove('yes');
            }
        }
    };
    xhttp.open("POST", "../api/createRoom", true);
    xhttp.setRequestHeader("X-CSRFToken", csrftoken);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send();
};



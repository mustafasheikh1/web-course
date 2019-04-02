$(document).ready(function () {
    $('#submit').click(validator);
});

function validator() {
    var flag = {
        fName: true,
        lName: true,
        uName: true,
        password: true,
        email: true
    };

    var fBody = {
        fName: $('#fName').val(),
        lName: $('#lName').val(),
        uName: $('#uName').val(),
        password: $('#password').val(),
        email: $('#email').val().toLowerCase()
    }

    //List of regExp 
    var emailExp = /^(([^<>()\[\]\\.,;:\s@“]+(\.[^<>()\[\]\\.,;:\s@“]+)*)|(“.+“))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var firstLetterCaps = /^[A-Z]/;
    // At least one LOWERCASE character:
    var lowerCasePattern = /^(?=.*[a-z]).+$/;

    // At least one UPPERCASE character:
    var upperCasePattern = /^(?=.*[A-Z]).+$/;

    // At least one NUMBER:
    var numberPattern = /^(?=.*[\d]).+$/;

    // At least one SPECIAL character:
    var specialCharacterPatter = /([-+=_!@#$%^&*.,;:'\"<>/?`~\[\]\(\)\{\}\\\|\s])/;

    // At least 8 characters in the screen:
    var characterCountPattern = /^.{8,}/;


    //First Name Testing
    if (!firstLetterCaps.test(fBody.fName)) {
        $('#fNameErr').show();
        flag.fName = false;
    } else {
        $('#fNameErr').hide();
        flag.fName = true;
    }

    //Last Name Testing
    if (!firstLetterCaps.test(fBody.lName)) {
        $('#lNameErr').show();
        flag.lName = false;
    } else {
        $('#lNameErr').hide();
        flag.lName = true;
    }

    //Username Testing
    if (fBody.uName.match(/[A-Z]/g) == null || !lowerCasePattern.test(fBody.uName) || !specialCharacterPatter.test(fBody.uName)) {
        $('#uNameErr').show();
        flag.uName = false;
    } else {
        if(fBody.uName.match(/[A-Z]/g).length != 1){
            $('#uNameErr').show();
            flag.uName = false;
        }else{
            $('#uNameErr').hide(); 
            flag.uName = true;
        }
        
    }

    //Password Testing
    if (!numberPattern.test(fBody.password) || !lowerCasePattern.test(fBody.password) || !specialCharacterPatter.test(fBody.password)) {
        $('#passwordErr').show();
        flag.password = false;
    } else {
        $('#passwordErr').hide();
        flag.password = true;
    }


    //Email Testing
    if (!emailExp.test(fBody.email)) {
        $('#emailErr').show();
        flag.email = false;
    } else {
        $('#emailErr').hide();
        flag.email = true;
    }

    // console.log(flag.fName);
    // console.log(flag.lName);
    // console.log(flag.uName);
    // console.log(flag.password);
    // console.log(flag.email);


    //Alert API Calling and reseting
    if(flag.fName && flag.lName && flag.uName && flag.password && flag.email){
        $("#formBody").trigger("reset");
        alert("Thank you for submitting data");
        //For api call
        submitForm(fBody);
    }

};

function submitForm(fBody){
    //Do THE (POST) API CALL HERE and send the fBody to backend
    console.log(fBody);
}


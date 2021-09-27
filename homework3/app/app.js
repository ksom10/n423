var Students = [];
function initSite(){
    if(localStorage){
    // console.log("I have it");
    // localStorage.setItem("Remember", JSON.stringify({ name: "Todd" }));
    // console.log(localStorage.getItem("Students"));
    }else {
        // console.log("Crap I don't have it.");
    }
}

function initListener() {
    $("#submit").click(function(e){
        //e.preventDefault();

        //make inputs required
        $("#fName").attr('required', true);
        $("#lName").attr('required', true);
        $("#age").attr('required', true);
        $("#phone").attr('required', true);
        $("#email").attr('required', true);
        $("#classes").attr('required', true);


        let first = $("#fName").val();
        let last = $("#lName").val();
        let age = $("#age").val();
        let phone = $("#phone").val();
        let email = $("#email").val();
        let classes = $("#classes").val();
        let classArr = classes.split(" , ");
        Obj = {fName: first, lName: last, age: age, phone: phone, email: email, classes: classArr,};
        Students.push(Obj);
        localStorage.setItem("Students", JSON.stringify(Students));
        console.log(localStorage.getItem("Students"));

        


        //clear forms
        $("#fName").val("");
        $("#lName").val("");
        $("#age").val("");
        $("#phone").val("");
        $("#email").val("");
        $("#classes").val("");

    });

    $("#show").click(function(e){
        //prevents onClick from duplicating info
        $("#display").html("");
        //e.preventDefault();
        let show = JSON.parse(localStorage.getItem("Students"));
        console.log(show);
        $.each(show, function (inx, student){
            $("#display").css("display", "flex")
            $("#display").append(`
            <div class="studentCont" style="display: block;">
            <p>First Name: ${student.fName}</p>
            <p>Last Name: ${student.lName}</p>
            <p>Age: ${student.age}</p>
            <p>Phone: ${student.phone}</p>
            <p>Classes: ${student.classes}</p>
            </div>
            `);
        });
       
    });
}

$(document).ready(function () {
    initListener();
});
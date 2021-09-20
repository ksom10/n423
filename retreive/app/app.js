/* function getData(){
    $.getJSON("../data/data.json", function (data){
        console.log(data);
        

        $.each(data.Students, function(idx, student){
            $("#content").append(`<div>
            <p>Name: ${student.studentName}</p>
            <p>GPA: ${student.studentGPA}</p>
            <p>${student.studentAddress.streetNumber}<br />
            ${student.studentAddress.city}
            ${student.studentAddress.state}
            ${student.studentAddress.zipcode}</p>
            </div>
            `)
            console.log(student.studentName);
            console.log(student.studentGPA);
            console.log(student.studentAddress.streetNumber);
            console.log(student.studentAddress.city);
            console.log(student.studentAddress.state);
            console.log(student.studentAddress.zipcode);
        })

    }).fail(function(e){
        console.log("hello", e);
    });
} */

function addEventListener() {
    $("#submit").click(function (e) {
        e.preventDefault();
        let cityZipName = $("#cityZip").val();
        let days = $("#daysNumber").val();

        getWeather(cityZipName, days);
    });
}

function getWeather(cityZip, days){
    $.get(
        `http://api.weatherapi.com/v1/current.json?key=b229c39d3bcb4ce2baf202930211309&q=${cityZip}&days=${days}&aqi=no`,
        function(data) {
            console.log(data);
            $("#containerTwo").css("display", "flex")
            $("#wImg").html(`<img src="${data.current.condition.icon}" />`).css("display", "flex")
            $("#wInfo").html(`<h1>${data.location.name},  ${data.location.region}, ${data.location.country}</h1>`).css("display", "flex")
            $("#wTime").html(`<h3>As of ${data.location.localtime}</h3>`).css("display", "flex")
             $("#wData").html(`<h2>${data.current.temp_f}°F</h2>`).css("display", "flex")
             $("#exInfo").css("display", "flex")
            $("#wMore").html(`<h3>Feels Like:</h3> <p>${data.current.feelslike_f}°F</p>`).css("display", "flex")
            $("#wHumid").html(`<h3>Humidity:</h3> <p>${data.current.humidity}°F</p>`).css("display", "flex")
            $("#wWind").html(`<h3>Wind:</h3> <p>${data.current.wind_mph} mph</p>`).css("display", "flex")

            }
    ).fail(function (e){
        console.log(e);
    });

}

 $(document).ready(function(){
//     getData();
    addEventListener();
    //getWeather();
   
 })
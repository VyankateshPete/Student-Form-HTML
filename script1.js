var formData = document.getElementById("studentForm");
var infotable = document.getElementById("infotable");

let newObject = window.localStorage.getItem("myObject");
console.log(JSON.parse(newObject));
console.log(newObject.search("dob"));
var a = console.log(newObject.indexOf("dob"));
console.log(newObject[36]);
// var a = newObject.email;
// console.log(a);

function addInfo() {
  const studentData = document.getElementById("form")
  // const studentData = new FormData(formData);
  console.log(studentData);
  // const studentData = new FormData(formData);
  var firstName = document.getElementById("firstname").value;
  var middleName = document.getElementById("middlename").value;
  var lastName = document.getElementById("lastname").value;
  var dateofBirth = document.getElementById("dob").value;
  var countryCode = document.getElementById("code").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;

  let content = infotable.innerHTML;
  content +=
    "<tr><td>" +
    tempObj.firstName +
    "</td>" +
    "<td>" +
    middleName +
    "</td>" +
    "<td>" +
    lastName +
    "</td>" +
    "<td>" +
    dateofBirth +
    "</td>" +
    "<td>" +
    "+" +
    countryCode +
    mobile +
    "</td>" +
    "<td>" +
    email +
    "</td>" +
    "</tr>";
  infotable.innerHTML = content;

  const myObject = {
    name: firstName + " " + middleName + " " + lastName,
    dob: dateofBirth,
    mobile: "+" + countryCode + mobile,
    email: email,
  };

  window.localStorage.setItem("myObject", JSON.stringify(myObject));

  let newObject = window.localStorage.getItem("myObject");
  console.log(JSON.parse(newObject));

  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("code").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";

  // console.log(studentData);
  // console.log("studentData");
}



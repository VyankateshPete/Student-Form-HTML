const infotable = document.getElementById("tableBody");
var arrData = [];
var localArrData = JSON.parse(localStorage.getItem("arrData") || "[]");
var count = localArrData.length;
var updateCount;
var updateData;
tablePrint();

function addInfo() {
  var firstName = document.getElementById("firstname").value;
  var middleName = document.getElementById("middlename").value;
  var lastName = document.getElementById("lastname").value;
  var dateofBirth = document.getElementById("dob").value;
  var countryCode = document.getElementById("code").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  // console.log(firstName);
  count = count + 1;
  // console.log(count);
  objectCreation(
    count,
    firstName,
    middleName,
    lastName,
    dateofBirth,
    countryCode,
    mobile,
    email
  );
  inputClear();
  tablePrint();
  reindex();
}

function objectCreation(
  count,
  firstName,
  middleName,
  lastName,
  dateofBirth,
  countryCode,
  mobile,
  email
) {
  const myObject = {
    count: count,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    dob: dateofBirth,
    mobile: "+" + countryCode + mobile,
    email: email,
  };
  arrData = localArrData;
  arrData.push(myObject);
  window.localStorage.setItem("arrData", JSON.stringify(arrData));
}

function tablePrint() {
  infotable.innerHTML = "";
  var i = 0;
  tempData = localArrData;
  for (i; i < count; i++) {
    tempObj = tempData[i];
    const content = infotable.innerHTML;
    var tempContent = content;
    for (let x in tempObj) {
      if (x == "email") {
        tempContent +=
          "<td>" +
          tempObj[x] +
          "</td><td><button onclick='updateForm(this," + i + ")' type='button' id='updatebtn' class='btn btn-outline-info d-block'> Update </button></td><td><button onclick='deleteForm(this," + i + ")' type='button' id='deletebtn' class='btn btn-outline-danger d-block'> Delete </button></td></tr>";
      } else {
        tempContent += "<td>" + tempObj[x] + "</td>";
      }
    }
    infotable.innerHTML = tempContent;
  }
}

function deleteForm(Obj, count) {
  const tempObj = Obj.parentNode.parentNode;
  const countNode = tempObj.childNodes[0];
  // const index = countNode.childNodes[0];

  console.log(count);
  //console.log(localArrData[index]);
  localArrData.splice(count, 1);
  window.localStorage.setItem("arrData", JSON.stringify(arrData));
  reindex();
  tablePrint();
}

function updateForm(Obj, count) {
  updateCount = count;
  console.log(updateCount);
  const tempObj = localArrData[count];
  document.getElementById("firstname").value = tempObj.firstName;
  document.getElementById("middlename").value = tempObj.middleName;
  document.getElementById("lastname").value = tempObj.lastName;
  document.getElementById("dob").value = tempObj.dob;
  let mobile = tempObj.mobile;
  let code = mobile
  let length = mobile.length
  code = Number(code.substr(1,2));
  let number = mobile.substr(3,length);
  // console.log(code);
  // console.log(mobile);
  document.getElementById("code").value = code;
  document.getElementById("mobile").value = number;
  document.getElementById("email").value = tempObj.email;
  
  //console.log(localArrData[index]);
  // localArrData.splice(count, 1);
  // window.localStorage.setItem("arrData", JSON.stringify(arrData));
  // reindex();
  // tablePrint();
}

function submitUpdate(){
  var firstName = document.getElementById("firstname").value;
  var middleName = document.getElementById("middlename").value;
  var lastName = document.getElementById("lastname").value;
  var dateofBirth = document.getElementById("dob").value;
  var countryCode = document.getElementById("code").value;
  var mobile = document.getElementById("mobile").value;
  var email = document.getElementById("email").value;
  const myObject = {
    count: updateCount + 1,
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    dob: dateofBirth,
    mobile: "+" + countryCode + mobile,
    email: email,
  };
  localArrData[updateCount] = myObject;
  arrData = localArrData;
  window.localStorage.setItem("arrData", JSON.stringify(arrData));
  inputClear();
  tablePrint();

}

function inputClear() {
  document.getElementById("firstname").value = "";
  document.getElementById("middlename").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("code").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("email").value = "";
}

function removeInfo() {
  window.localStorage.clear();
  location.reload();
}

function reindex() {
  mixedIndex = localArrData;
  // console.log(mixedIndex);
  var j = 0;
  var ijk = 1;
  for (j; j <= mixedIndex.length - 1; ++j) {
    mixedObj = mixedIndex[j];
    //console.log(mixedObj)
    for (let y in mixedObj) {
      mixedObj.count = ijk;
      ijk++;
      break;
    }
    // console.log(mixedObj);
    mixedIndex[j] = mixedObj;
  }
  // arrData = mixedIndex;
  // window.localStorage.setItem("arrData", JSON.stringify(arrData));
  // tablePrint();
}

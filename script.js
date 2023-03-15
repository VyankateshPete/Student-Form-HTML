const infotable = document.getElementById("tableBody");
var arrData = [];
var localArrData = JSON.parse(localStorage.getItem("arrData") || "[]");
var count = localArrData.length;
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
          "</td><td><button onclick='deleteForm(this," +
          i +
          ")' type='button' id='deletebtn' class='btn btn-outline-danger d-block'> Delete </button></td></tr>";
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

// ტელეფონის ნომრის ფორმატი
$(document).ready(function(){
  $(":input").inputmask();

  $("#phone").inputmask({
mask: '+999 999 99 99 99',
placeholder: ' ',
showMaskOnHover: false,
showMaskOnFocus: false,
onBeforePaste: function (pastedValue, opts) {
  let processedValue = pastedValue;
  return processedValue;
}
});
});

window.onload = function() {
  localStorage.setItem("name", $('#inputName').val());
  localStorage.setItem("email", $('#inputEmail').val());   
}




// ცვლადები

const inputName = document.getElementById("inputName");
const inputLastName = document.getElementById("inputLastName");
const aboutMyself = document.getElementById("aboutMyself");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const position = document.getElementById("position");
const employer = document.getElementById("employer");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const jobDescription = document.getElementById("jobDescription");

const inputNameCopy = document.getElementById("inputNameCopy");
const inputLastNameCopy = document.getElementById("inputLastNameCopy");
const aboutMyselfCopy = document.getElementById("aboutMyselfCopy");
const emailCopy = document.getElementById("emailCopy");
const phoneCopy = document.getElementById("phoneCopy");
const positionCopy = document.getElementById("positionCopy");
const employerCopy = document.getElementById("employerCopy");
const startDateCopy = document.getElementById("startDateCopy");
const endDateCopy = document.getElementById("endDateCopy");
const jobDescriptionCopy = document.getElementById("jobDescriptionCopy");



// ინფორმაცია გადადის და არ იშლება რეფრეშის შემთხვევაში


// სახელი
inputName.addEventListener("keyup", function() {
  localStorage.setItem("firstName", inputName.value);
  inputNameCopy.textContent = inputName.value;
});

window.addEventListener("load", function() {
  const savedName = localStorage.getItem("firstName");
  if (savedName) {
    inputName.value = savedName;
    inputNameCopy.textContent = savedName;
  }
});

// გვარი
inputLastName.addEventListener("keyup", function() {
  localStorage.setItem("lastName", inputLastName.value);
  inputLastNameCopy.textContent = inputLastName.value;
});

window.addEventListener("load", function() {
  const savedLastName = localStorage.getItem("lastName");
  if (savedLastName) {
    inputLastName.value = savedLastName;
    inputLastNameCopy.textContent = savedLastName;
  }
});

// ჩემ შესახებ
aboutMyself.addEventListener("keyup", function() {
  localStorage.setItem("about", aboutMyself.value);
  aboutMyselfCopy.textContent = aboutMyself.value;
});

window.addEventListener("load", function() {
  const savedAbout = localStorage.getItem("about");
  if (savedAbout) {
    aboutMyself.value = savedAbout;
    aboutMyselfCopy.textContent = savedAbout;
  }
});
// ფოსტა
email.addEventListener("keyup", function() {
  localStorage.setItem("mail", email.value);
  emailCopy.textContent = email.value;
});

window.addEventListener("load", function() {
  const savedMail = localStorage.getItem("mail");
  if (savedMail) {
    email.value = savedMail;
    emailCopy.textContent = savedMail;
  }
});
// ტელეფონი
phone.addEventListener("keyup", function() {
  localStorage.setItem("phoneNumber", phone.value);
  phoneCopy.textContent = phone.value;
});

window.addEventListener("load", function() {
  const savePhone = localStorage.getItem("phoneNumber");
  if (savePhone) {
    phone.value = savePhone;
    phoneCopy.textContent = savePhone;
  }
});
// თანამდებობა
position.addEventListener("keyup", function() {
  localStorage.setItem("myPosition", position.value);
  positionCopy.textContent = position.value;
});

window.addEventListener("load", function() {
  const savePosition = localStorage.getItem("myPosition");
  if (savePosition) {
    position.value = savePosition;
    positionCopy.textContent = savePosition + '.';
  }
});
// დამსაქმებელი
employer.addEventListener("keyup", function() {
  localStorage.setItem("employerM", employer.value);
  employerCopy.textContent = employer.value;
});

window.addEventListener("load", function() {
  const saveEmployer = localStorage.getItem("employerM");
  if (saveEmployer) {
    employer.value = saveEmployer;
    employerCopy.textContent = saveEmployer;
  }
});
// დაწყება
startDate.addEventListener("change", function() {
  const inputValue = this.value;
  localStorage.setItem("startDateM", inputValue);
  startDateCopy.textContent = inputValue;
});

window.addEventListener("load", function() {
  const saveStartDate = localStorage.getItem("startDateM");
  if (saveStartDate) {
    startDate.value = saveStartDate;
    startDateCopy.textContent = saveStartDate + '  -';
  }
});
// დამთავრება
endDate.addEventListener("change", function() {
  const inputValue1 = this.value;
  localStorage.setItem("endDateM", inputValue1);
  endDateCopy.textContent = inputValue1;
});

window.addEventListener("load", function() {
  const saveEndDate = localStorage.getItem("endDateM");
  if (saveEndDate) {
    endDate.value = saveEndDate;
    endDateCopy.textContent = saveEndDate;
  }
});
// სამუშაოს აღწერა
jobDescription.addEventListener("keyup", function() {
  localStorage.setItem("description", jobDescription.value);
  jobDescriptionCopy.textContent = jobDescription.value;
});

window.addEventListener("load", function() {
  const savedjobDescription = localStorage.getItem("description");
  if (savedjobDescription) {
    jobDescription.value = savedjobDescription;
    jobDescriptionCopy.textContent = savedjobDescription;
  }
});

// გასუფთავება LocalStorage
const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function() {
  localStorage.clear();
  inputName.value = "";
  inputNameCopy.textContent = "";
  inputLastName.value = "";
  aboutMyself.value = "";
  email.value = "";
  phone.value = "";
  position.value = "";
  employer.value = "";
  startDate.value = "";
  endDate.value = "";
  jobDescription.value = "";
  inputLastNameCopy.textContent = "";
  aboutMyselfCopy.textContent = "";
  emailCopy.textContent = "";
  emailCopy.textContent = "";
  phoneCopy.textContent = "";
  positionCopy.textContent = "";
  employerCopy.textContent = "";
  startDateCopy.textContent = "";
  endDateCopy.textContent = "";
  jobDescriptionCopy.textContent = "";
});



// ფოტოს დამახსოვრება
// function getBase64Image(img) {
//   var canvas = document.createElement("canvas");
//   canvas.width = img.width;
//   canvas.height = img.height;
//   var ctx = canvas.getContext("2d");
//   ctx.drawImage(img, 0, 0);
//   var dataURL = canvas.toDataURL("image/png");
//   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }


// var imageInput = document.getElementById("imageInput");
// imageInput.addEventListener("change", function() {
//   var file = this.files[0];
//   var reader = new FileReader();
//   reader.onload = function(e) {
//     var img = new Image();
//     img.src = e.target.result;
   
//     sessionStorage.setItem("imageData", getBase64Image(img));
//   };
//   reader.readAsDataURL(file);
// });


// var imageData = sessionStorage.getItem("imageData");
// if (imageData) {
//   var img = new Image();
//   img.src = "data:image/png;base64," + imageData;
  
// }




//  ფოტოს ატვირთვა

const image_input = document.querySelector('#image_input');
let uploaded_image = "";

image_input.addEventListener("change", function(){
const reader = new FileReader();
reader.addEventListener("load", () => {
  uploaded_image = reader.result;
  document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
});
reader.readAsDataURL(this.files[0]);
})

// ფოტოს ასატვირთი ღილაკი
let imageUploader = document.getElementById('imageUploader');
$(imageUploader).on('click', function(){
$('input').trigger('click'); 
});



// ფორმის ვალიდაცია

const form = document.getElementById('form');

const errorElement = document.getElementById('error');

const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');



const errorElementName = document.getElementById('errorName');
const errorElementLastName = document.getElementById('errorLastName');



form.addEventListener('submit', (e) => {
  let messages = [];

  function checkGeorgian(input) {
    let alphabetGeo = /^[ა-ბ-გ-დ-ე-ვ-ზ-თ-ი-კ-ლ-მ-ნ-ო-პ-ჟ-რ-ტ-უ-ფ-ქ-ღ-ყ-შ-ჩ-ც-ძ-წ-ჭ-ხ-ჯ-ჰ]+$/;
    if (input.value.match(alphabetGeo)) {
      return true;
    } else {
      return false;
    }
  }    

  if (!checkGeorgian(inputName)) {
    messages.push('ჩაწერეთ ქართული ასოები!');
    errorElementName.innerText = 'ჩაწერეთ ქართული ასოები!';
  } else {
    errorElementName.innerText = '';
  }

  if (!checkGeorgian(inputLastName)) {
    messages.push('ჩაწერეთ ქართული ასოები!');
    errorElementLastName.innerText = 'ჩაწერეთ ქართული ასოები!';
  } else {
    errorElementLastName.innerText = '';
  }

  if (messages.length > 0) {
    e.preventDefault();
  } else {
    modal.style.display = 'block';
    e.preventDefault();
  }
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});




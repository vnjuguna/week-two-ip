alert("Script has Loaded");
var birthDateInput = prompt("Enter your birthday(YYYY-MM-DD) : "); 
var genderInput = prompt ("Enter your gender M/F :").toUpperCase();

var birthDateDetails = new Date(birthDateInput); 
var birthDay = birthDateDetails.getDay();

var daysOfWeek = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday','Friday', 'Saturday']; 
var femaleNames = ["Akosua", "Adwoa", "Abenaa","Akua", "Yaa", "Afua", "Ama"]; 
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];

var fullGender;

if (genderInput === "M" || genderInput === "F") {

  if (genderInput === "M") {

    fullGender = "Male";
    outPut = 'Your Akan name is '+ maleNames[birthDay]+ ' because you are a '+ fullGender + ' born on a ' +daysOfWeek[birthDay] + "!" ;
    console.log (outPut);
  }

  else {
 
  fullGender = "Female";
  outPut = 'Your Akan name is '+ femaleNames[birthDay] + ' because you are a '+ fullGender + ' born on a '+ daysOfWeek[birthDay] + "!" ;
  console.log (outPut);

 }
 
}

else {

console.log ("Invalid gender. Reply with M for Male and F for Female");

}



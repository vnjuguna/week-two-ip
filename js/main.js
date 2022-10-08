function akanNames() {
  /*List showing days of the week and name*/
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //ARRAY OF FEMALE AKAN NAMES
  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //ARRAY OF MALE AKAN NAMES

  /*User Prompts*/
  var dateInput = prompt("Enter date of birth - format YYYY-MM-DD:");//prompts the user for input



  /*Date Manipulation Variables*/
  var birthDate = new Date(dateInput); //uses the variable date input from the useer to create a calendar date
  var actualday = birthDate.getDay();
  var birthMonth = birthDate.getMonth();//Picks the month for the date object
  var birthYear = birthDate.getFullYear();//picks the final year from the date object


  /*Using the day to access the Akan Name List*/
  var genderFemale = femaleNames[actualday];
  var genderMale = maleNames[actualday];


  /*Captures the wrong date input*/


  if (actualday >= 0 && actualday < 7 && birthMonth >= 0 && birthMonth < 12 && birthYear >= 1000) {

    var gender = prompt("Enter your Gender either M or F").toUpperCase();

    /*Captures the Wrong Gender Input*/
    if (gender === "M" || gender === "F") {
      if (gender === "M") {
        document.getElementById("myOutput").innerHTML=("Your Akan name is " + genderMale);
      }
      else {
        document.getElementById("myOutput").innerHTML=("Your Akan name is " + genderFemale);
      }
    }

    else {

      alert("Invalid Gender");
    }
  }

  else {

    alert("Wrong Date Format, please use YYYY-MM-DD\nExample 2022-10-07");
  }




}

// alert("Hello Class");



// marksheet
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var rollNo = prompt("Enter Roll Number");
var isl = +prompt("Islamiat Number");
var eng = +prompt("English Number");
var urdu = +prompt("Urdu Number");
var math = +prompt("Math Number");
var js = +prompt("Javascript Number");
var obtainedMarks = isl + eng + urdu + math + js;
var percentage = (obtainedMarks*100)/500;

document.write("First Name: " + firstName + "<br><br>");
document.write("Last Name: " + lastName + "<br><br>");
document.write("Roll Number: " + rollNo + "<br><br>");
document.write("Islamiat: " + isl + "<br><br>");
document.write("English: " + eng + "<br><br>");
document.write("Urdu: " + urdu + "<br><br>");
document.write("Math: " + math + "<br><br>");
document.write("Javascript: " + js + "<br><br>");
document.write("Obtained Marks: " + obtainedMarks + "<br><br>");
document.write("Percentage: " + percentage + "<br><br>");
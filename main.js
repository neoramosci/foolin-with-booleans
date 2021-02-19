/********************
 * YOUR CODE BELOW! *
 ********************/
// question  1 
function moreThan5(num){
  return num >= 5;
}
// question  2
function isNewTopScore(num1,num2){
  return num1 > num2 ;
}
// question  3
function isInDanger(num){
 return num >= 60 && num <=71;
} 

// question  4
function isCoasting(num){
  return num >= 72 && num <= 83;
}

// question  5
function isSucceeding(num){
  return num >= 84 && num <= 92;
}

// question  6
function isFailing(num){
  return num < 60
}

// question 7 
function isAcing(num){
return num > 92;
}

// question 8
function isStudent(str){
  return str === 'student'; 
}

// question 9
function isTeacher(str){
  return str === 'teacher';
}

// question 10
function isAdmin(str){
  return str === 'admin';
}

// question 11 
function isElementary(str){
  return str === 'elementary';
}


//question 12 
function areDifferentPeople(str1,str2){
return str1 !== str2;
}

//question 13
function isMiddleSchoolTeacher(str,num){
  return str === 'teacher' && num >= 6 && num <=8;
}

//question 14
function notAnElementarySchoolAdministrator(str1,str2){
return str2 !== 'elementary' || role !== 'admin';
}






/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}

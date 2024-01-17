const yearAtUniversityElement = document.getElementById("year");
let yearAtUniversity;

let todayDate = new Date();

const enrollmentYear = 2023;
let monthNow = todayDate.getMonth();
let yearNow = todayDate.getFullYear();

let currentYearAtUniversity = yearNow - enrollmentYear;

// set text
if (monthNow <= 5) {
    if (currentYearAtUniversity === 0) {
        yearAtUniversity = "first";
    } else if (currentYearAtUniversity === 1) {
        yearAtUniversity = "first";
    } else if (currentYearAtUniversity === 2) {
        yearAtUniversity = "second";
    } else if (currentYearAtUniversity === 3) {
        yearAtUniversity = "third";
    } else if (currentYearAtUniversity === 4) {
        yearAtUniversity = "fourth";
    }
} else if (monthNow >= 5) {
    if (currentYearAtUniversity === 0) {
        yearAtUniversity = "first";
    } else if (currentYearAtUniversity === 1) {
        yearAtUniversity = "second";
    } else if (currentYearAtUniversity === 2) {
        yearAtUniversity = "third";
    } else if (currentYearAtUniversity === 3) {
        yearAtUniversity = "fourth";
    } else if (currentYearAtUniversity === 4) {
        yearAtUniversity = "fourth";
    }
}

yearAtUniversityElement.innerHTML = yearAtUniversity;
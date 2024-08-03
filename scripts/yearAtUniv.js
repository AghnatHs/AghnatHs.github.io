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
        yearAtUniversity = "First";
    } else if (currentYearAtUniversity === 1) {
        yearAtUniversity = "First";
    } else if (currentYearAtUniversity === 2) {
        yearAtUniversity = "Second";
    } else if (currentYearAtUniversity === 3) {
        yearAtUniversity = "Third";
    } else if (currentYearAtUniversity === 4) {
        yearAtUniversity = "Fourth";
    }
} else if (monthNow >= 5) {
    if (currentYearAtUniversity === 0) {
        yearAtUniversity = "First";
    } else if (currentYearAtUniversity === 1) {
        yearAtUniversity = "Second";
    } else if (currentYearAtUniversity === 2) {
        yearAtUniversity = "Third";
    } else if (currentYearAtUniversity === 3) {
        yearAtUniversity = "Fourth";
    } else if (currentYearAtUniversity === 4) {
        yearAtUniversity = "Fourth";
    }
}

yearAtUniversityElement.innerHTML = yearAtUniversity;
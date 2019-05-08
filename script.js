// Week view

let weekViewElement = document.getElementById("weekView");
weekViewElement.style.textAlign = "center";

let monthViewElement = document.getElementById("monthView");
monthViewElement.style.textAlign = "center";

// today's date
let today = moment();

// this is the first day of the week
let currentWeek = today.clone().subtract(today.day(), "days")

let selectedWeek = currentWeek;


let events = [
    {
    title: "my important meeting",
    begin: moment(),
    end: moment().add(1, "hours")
    },
    {
    title: "my more important meeting",
    begin: moment().add(1, "days"),
    end: moment().add(1, "days").add(2, "hours") 
    }
];
console.log(events);

function renderEvents(day, dayDivElement) {
   for(let event of events) {
       if (event.begin.dayOfYear() === day.dayOfYear()) {
        dayDivElement.textContent += event.title;
       } 
   } 
}



function loadWeekView(firstDay) {
    weekViewElement.innerHTML = "";
    for (let i = 1; i < 8; i++) {
        let dayDivElement = document.createElement("div");

        // clone 
        let day = firstDay.clone();
        day.add(i, "days");
        
        if (day.dayOfYear() === today.dayOfYear() && today.year() === day.year()) {
            dayDivElement.style.color = "white";
            dayDivElement.style.backgroundColor = "orange";
            dayDivElement.textContent = today.format('dddd LLL');
            
        } else {    
            dayDivElement.textContent = day.format('dddd LL');
        }

        renderEvents(day, dayDivElement);


        dayDivElement.classList.add("day");
        weekViewElement.appendChild(dayDivElement);

    }
}

loadWeekView(currentWeek);

document.getElementById("weekViewBtn").onclick = loadWeekView;

//loadWeekView(previousWeek); 

function loadPreviousWeek() {
    selectedWeek = selectedWeek.clone().subtract(7, "days");
    loadWeekView(selectedWeek);
}




function loadNextWeek() {
    selectedWeek = selectedWeek.clone().add(7, "days");
    loadWeekView(selectedWeek);
}
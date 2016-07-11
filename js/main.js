var DAYS_IN_BLOCK = 41;
var MINIMAL_DATE = 1;

$(document).ready(function () {

    var now = new Date(); // current day
    var year = now.getFullYear(); //current year
    var month = now.getMonth()+1; //current month
    var date = now.getDate(); //current day
    var day = now.getDay(); //current dau  in  week
    var dayName = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    var days_in_month = daysInMonth(month,year);
    var days_in_prev_month = daysInMonth(month-1,year);
    var days_in_next_month = daysInMonth(month+1,year);
    var first_day = new Date(year, month-1, 1);
    var last_day = new Date(year, month, 0);

    var first_day_number_in_week = first_day.getDay();

    var cal = document.getElementsByClassName('calendar')[0];

    for ( i = 0 ; i < 7; i++) {
        var div = document.createElement('div');
        div.className = "calendar__day-in_week";
        div.innerHTML = dayName[i];
        cal.appendChild(div);
    }

    var startIteration = first_day_number_in_week - day+1;
    
    var data_day;

    for (var i = startIteration ; i < DAYS_IN_BLOCK - startIteration - 1; i++ ) {
        var div = document.createElement('div');
        if ( i < MINIMAL_DATE) {
            div.className = "calendar__day previus";
            data_day =  days_in_prev_month + i;
            div.innerHTML = data_day;
        } else if ( i >= 1 & i <= days_in_month ) {
            div.className = "calendar__day";
            data_day = i;
            div.innerHTML = data_day;
        } else {
            div.className = "calendar__day previus";
            data_day = i - days_in_month;
            div.innerHTML = data_day;
        }
        div.setAttribute("data-day",data_day);
        div.onclick = function () {
            var date_number = $(this).data('day');
            console.log(date_number);
        };
        cal.appendChild(div);
    }

    //controll  buttons
    var buttonPrev = document.createElement('button');
    buttonPrev.class="button prevMonth";
    buttonPrev.innerHTML = "<<";
    cal.appendChild(buttonPrev);

    var buttonNext = document.createElement('button');
    buttonNext.class="button nextMonth";
    buttonNext.innerHTML = ">>";
    cal.appendChild(buttonNext);

    buttonPrev.onclick = function () {
       console.log(month);
    };

    buttonNext.onclick = function () {
       console.log(days_in_next_month);
    };
});


function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

// วันที่ตั้งค่าเริ่มต้น (ต้องเปลี่ยนแปลงตามวันที่ต้องการ)
var startDate = new Date(2023, 5, 1); //     1 มิถุนายน 2565       // 1 มกราคม 2565 (2023, 0, 1)

function updateTimer() {
    var currentDate = new Date();
    var timeDiff = Math.abs(currentDate.getTime() - startDate.getTime());
    var days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    var months = Math.floor(days / 30);
    var years = Math.floor(months / 12);

    var since_days = days % 30;
    var since_months = months % 12;
    var since_years = years % 1;

    var yearsElement = document.getElementById("years");
    var monthElement = document.getElementById("months");
    var daysElement = document.getElementById("days");

    var timerElement = document.getElementById("timer");
    //   timerElement.innerHTML = days + " วัน " + months + " เดือน " + years + " ปี " + hours + " ชั่วโมง " + minutes + " นาที";
    yearsElement.innerHTML = since_years;
    monthElement.innerHTML = since_months;
    daysElement.innerHTML = since_days;
}

setInterval(updateTimer, 600); // อัปเดตเวลาทุกๆ 1 นาที (60,000 มิลลิวินาที)
function addName() {
    let name = prompt("Lütfen İsminizi Giriniz");
    if (name == null || name == "") {
        alert("İsim Girmediniz.");
    }
    document.getElementById('myName').innerHTML = name;

}

function findDay() {
    let mydate = new Date();
    let h = mydate.getHours();
    let m = mydate.getMinutes();
    let s = mydate.getMinutes();
    let whatday = mydate.getDay();
    let day 

    switch (whatday) {
        case 1:
            day = "Pazartesi";
            break;
        case 2:
            day ="Salı";
            break;
        case 3:
            day = "Çarşamba";
            break;
        case 4:
            day = "Perşembe";
            break;
        case 5:
            day = "Cuma";
            break;
        case 6:
            day = "Cumartesi";
            break;
        case 7:
            day = "Pazar";
            break;
        default:
            day = "Girilen Gün ile İlgili Hata Oluştu..."                        
}

if ( h < 10) {
    h = "0" + h;
}

if ( m < 10) {
    m = "0" + m;
}

if ( s < 10) {
    s = "0" + s;
}

let time = h + ":" + m + ":" + s + " " + day;
  document.getElementById("myClock").innerHTML = time;
  setTimeout(findDay, 1000);
}

addName()
findDay()
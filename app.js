// Task-01
// function userAktifliyi(username) {
//     console.log(`${username} artıq aktivdir`);
// }

// userAktifliyi("Mədinə");
// userAktifliyi("Nərgiz");
// userAktifliyi("Mələk");


// task-02
// function enBoyuyu(a, b, c) {
//     const enBoyukEded = Math.max(a, b, c);
//     console.log(`Ən böyük ədəd: ${enBoyukEded}`);
// }

// enBoyuyu(15, 21, 7);
// enBoyuyu(90, 87, 32);
// enBoyuyu(-2, 0, -8);


// Task-03
// function rubllariHesabla(rublHesabi, dollarHesabi, dollardanRubla) {
//     const rublaCevirmek = dollarHesabi * dollardanRubla;
//     const umumiRubl = rublHesabi + rublaCevirmek;
//     console.log(`Bütün depozitlər üzrə məlumat: ${umumiRubl} rubl.`);
// }

// rubllariHesabla(1200, 20, 75);


// Task-04
// function enKiciyi(a, b) {
//     const enKiçikEded = Math.min(a, b);
//     console.log(`Ən kiçik ədəd: ${enKiçikEded}`);
// }

// enKiciyi(15, 7);
// enKiciyi(90, 32);
// enKiciyi(-2, -8);


// Task-05
// function calculate(n1, o, n2) {
//     let mesaj = ""
//     if(o === "+"){
//         mesaj = `${n1} + ${n2} = ${n1+n2} <br/>`
//     }
//     else if(o === "-"){
//         mesaj = `${n1} - ${n2} = ${n1-n2} <br/>`
//     }
//     else if(o === "*"){
//         mesaj = `${n1} * ${n2} = ${n1*n2} <br/>`
//     }
//     else if(o === "/"){
//         mesaj = `${n1} / ${n2} = ${n1/n2} <br/>`
//     }
//     else{
//         mesaj = "duzgun deyeri daxil edin + <br/>"
//     }
//     return mesaj;
// }
// document.write(calculate(10, "+", 50))
// document.write(calculate(34, "-", 22))
// document.write(calculate(27, "*", 2))
// document.write(calculate(140, "/", 20))
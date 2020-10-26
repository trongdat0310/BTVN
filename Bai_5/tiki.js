let ngaysinh = document.getElementById("ngaysinh")
let thangsinh = document.getElementById("thangsinh")
let namsinh = document.getElementById("namsinh")
ngaysinh.innerHTML = "Ngày";
thangsinh.innerHTML = "Tháng";
namsinh.innerHTML = "Năm";
for (let a = 1930; a <= 2020; a++) {
    namsinh.innerHTML += `<option value="${a}">${a}</option>`;
}
for (let b = 1; b <= 12; b++) {
    thangsinh.innerHTML += `<option value="${b}">${b}</option>`;
}
if (thangsinh == 1 || 3 || 5 || 7 || 8 || 10 || 12 ){
    for (let i = 1; i <= 31; i++) {
        ngaysinh.innerHTML += `<option value="${i}">${i}</option>`;
    }
}else if (thangsinh == 2){
    if ( namsinh % 4 == 0){
        for (let i = 1; i <= 29; i++) {
            ngaysinh.innerHTML += `<option value="${i}">${i}</option>`;
        }
    }else{
        for (let i = 1; i <= 28; i++) {
            ngaysinh.innerHTML += `<option value="${i}">${i}</option>`;
        }
    }
}else{
    for (let i = 1; i <= 30; i++) {
        ngaysinh.innerHTML += `<option value="${i}">${i}</option>`;
    }
}


console.log(ngaysinh);

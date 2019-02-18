
var dosen = [
    {"nama" : "izun", "jurusan":"informatika", "tim":"web-back-end"},
    {"nama" : "zenos", "jurusan":"sistem informasi", "tim":"web-front-end"}
];

var list = ''
    for(var i = 0; i<dosen.length;i++){
    list = `${list} nama = ${dosen[i].nama}, jurusan = ${dosen[i].jurusan}, tim = ${dosen[i].tim}<br>`;
}
document.getElementById("tes").innerHTML = list;

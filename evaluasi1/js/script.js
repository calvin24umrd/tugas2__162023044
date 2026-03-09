// MENU MAKANAN

function hitungTotal(){

let bakso=parseInt(document.getElementById("bakso").value)||0;
let soto=parseInt(document.getElementById("soto").value)||0;
let mie=parseInt(document.getElementById("mie").value)||0;

let total=(bakso*12000)+(soto*10000)+(mie*15000);

let diskon=0;

if(total>50000){
diskon=total*0.1;
}

let bayar=total-diskon;

document.getElementById("total").value=total;
document.getElementById("diskon").value=diskon;
document.getElementById("bayar").value=bayar;

}

function resetMenu(){

document.getElementById("bakso").value=0;
document.getElementById("soto").value=0;
document.getElementById("mie").value=0;

document.getElementById("total").value=0;
document.getElementById("diskon").value=0;
document.getElementById("bayar").value=0;

}


// NAVIGASI

function showMenu(){

document.getElementById("menuPage").style.display="flex";
document.getElementById("calcPage").style.display="none";
document.getElementById("lifePathPage").style.display="none";

}

function showCalculator(){

document.getElementById("menuPage").style.display="none";
document.getElementById("calcPage").style.display="block";
document.getElementById("lifePathPage").style.display="none";

}

function showLifePath(){

document.getElementById("menuPage").style.display="none";
document.getElementById("calcPage").style.display="none";
document.getElementById("lifePathPage").style.display="block";

}


// KALKULATOR

function hitungCalc(){

let a=document.getElementById("a").value;
let b=document.getElementById("b").value;
let op=document.getElementById("operator").value;

if(a==""||b==""){
alert("Input harus diisi");
return;
}

a=parseFloat(a);
b=parseFloat(b);

let hasil=0;

switch(op){

case '+': hasil=a+b; break;
case '-': hasil=a-b; break;
case '*': hasil=a*b; break;
case '/': hasil=a/b; break;
case '%': hasil=a%b; break;
case '^': hasil=Math.pow(a,b); break;

}

document.getElementById("hasil").value=hasil;

}

function resetCalc(){

document.getElementById("a").value="";
document.getElementById("b").value="";
document.getElementById("hasil").value="";

}


// GARIS HIDUP

// populate month and year selects when the page loads
(function() {
    const tglSelect = document.getElementById("tgl");
    for(let d=1; d<=31; d++){
        tglSelect.innerHTML += `<option value="${d}">${d}</option>`;
    }       
    const monthNames = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    const blnSelect = document.getElementById("bln");
    monthNames.forEach((m,i)=>{
        blnSelect.innerHTML += `<option value="${i+1}">${m}</option>`;
    });

    const thnSelect = document.getElementById("thn");
    for(let y=1900; y<=2024; y++){
        thnSelect.innerHTML += `<option value="${y}">${y}</option>`;
    }
})();

function hitungLifePath(){
    let tgl = parseInt(document.getElementById("tgl").value) || 0;
    let bln = parseInt(document.getElementById("bln").value) || 0;
    let thn = parseInt(document.getElementById("thn").value) || 0;

    document.getElementById("outTgl").innerText = tgl;
    document.getElementById("outBln").innerText = bln;
    document.getElementById("outThn").innerText = thn;

    let gabung = tgl.toString() + bln.toString() + thn.toString();
    let hasil1 = gabung.split('').reduce((a,c)=>a+parseInt(c),0);
    let hasil2 = hasil1.toString().split('').reduce((a,c)=>a+parseInt(c),0);

    document.getElementById("outHasil1").innerText = hasil1;
    document.getElementById("outHasil2").innerText = hasil2;
    document.getElementById("outAkhir").innerText = hasil2;

    let teks = "";
    switch(hasil2){
        case 1: teks="Tanggal Lahir Anda Berada Pada Garis Hidup 1"; break;
        case 2: teks="Tanggal Lahir Anda Berada Pada Garis Hidup 2"; break;
        case 3: teks="Tanggal Lahir Anda Berada Pada Garis Hidup 3"; break;
        case 4: teks="Tanggal Lahir Anda Berada Pada Garis Hidup 4"; break;
        case 5: teks="Tanggal Lahir Anda Berada Pada Garis Hidup 5"; break;
        case 6: teks="Tanggal Lahir Anda Berada Pada Garis Hidup 6"; break;
        case 7: teks="Tanggal Lahir Anda Berada Pada Garis Hidup 7"; break;
        case 8: teks="Tanggal Lahir Anda Berada Pada Garis Hidup 8"; break;
        case 9: teks="Tanggal Lahir Anda Berada Pada Garis Hidup 9"; break;
        default: teks = "";
    }

    const descriptions = {
1: "Deskripsi nomor 1 ...",

2: "Deskripsi nomor 2 ...",

3: `Bagi mereka yang jumlah angka hari lahirnya 3, ekspresi, sosialisasi, dan kreativitas sebagai pelajaran yang harus ditempuh dalam hidupnya. Entertainer kelas dunia, orangorang yang berkilau dan optimistik termasuk di dalamnya. Orang-orang dengan garis hidup 3 yang telah mengasah bakatnya mempunyai bakat kreatif yang istimewa, biasanya dalam verbal, tulisan, akting, atau semacamnya. Misi yang harus dicapainya dalam hidup adalah kesuksesan dalam berekspresi. Sisi cerah bagi orang-orang ini bertema harmoni, keindahan dan kesenangan, serta membagi kemampuan kreatif Anda dengan dunia. Mengasah kemampuan Anda dalam ekspresi kreatif adalah misi tertinggi bagi angka garis hidup ini. Karakter mereka hangat dan bersahabat, pembicara yang baik, sosial dan terbuka.
<br><br>

Pembicara yang trampil dalam arti bukan hanya seseorang yang menyenangkan untuk didengar, tapi lebih penting lagi, seseorang yang mampu untuk mendengarkan. Mereka adalah individu-individu yang selalu diterima dengan baik dalam setiap situasi sosial, dan juga mengerti bagaimana membuat orang lain merasa diterima. Potensi imajinasi kreatif selalu ada, walaupun bisa berupa hal yang laten, karena mereka tidak selalu tergerak untuk mengembangkan potensi ini. Sikapnya melihat kehidupan hampir selalu positif, dan pembawaannya riang dan terbuka. Anda bisa menghadapi banyak halangan dalam hidup dengan efektif dan langsung kembali bersemangat. Anda mempunyai tata krama yang baik dan tampaknya cukup peka akan perasaan dan emosi orang lain. Hidup dijalani sepenuhnya, seringkali tanpa kekhawatiran akan hari esok.

<br><br>

Anda tidak terlalu pandai menangani perihal keuangan karena tidak menganggap penting hal itu. Uang akan dibelanjakan saat Anda punya, dan tidak dikeluarkan saat Anda tidak ada uang. Sisi negatifnya, sikap mereka dalam hidup bisa sangat ringan sampai membuatnya jadi superfisial. Kemampuan Anda seringkali tersebar dan jadi kehilangan fokus. Mereka dengan angka garis hidup 3 ini adalah teka-teki, dan Anda seringkali berganti mood dan cenderung menghindar. Sulit bagi Anda untuk menetap di satu tempat. Jaga agar tidak selalu mengkritik orang, tidak sabaran, ataupun terlalu optimistik. Garis hidup 3 ini memberikan kemampuan di atas rata-rata dalam seni. Baik melukis, disain interior, lansekap, menulis, musik, teater, ataupun mampu seluruhnya. Anda selalu gembira, penuh inspirasi, dan selalu mencari stimulasi dari orang-orang yang sealiran. Sifat Anda yang ramai itu mendukung Anda untuk bisa melesat, apalagi jika Anda mampu memfokuskan energi dan talenta Anda pada minat yang tepat.`,

4: "Deskripsi nomor 4 ...",

5: "Deskripsi nomor 5 ...",

6: "Deskripsi nomor 6 ...",

7: "Deskripsi nomor 7 ...",

8: "Deskripsi nomor 8 ...",

9: "Deskripsi nomor 9 ..."
};

    document.getElementById("lifeDesc").innerHTML = "<h2>"+teks+"</h2><p>" + (descriptions[hasil2]||"") + "</p>";
}

function resetLifePath(){
    document.getElementById("outTgl").innerText = "-";
    document.getElementById("outBln").innerText = "-";
    document.getElementById("outThn").innerText = "-";
    document.getElementById("outHasil1").innerText = "-";
    document.getElementById("outHasil2").innerText = "-";
    document.getElementById("outAkhir").innerText = "-";
    document.getElementById("lifeDesc").innerHTML = "Hasil akan muncul setelah Anda mengirim data.";
}

function hitungMenu(){

let harga=document.getElementById("makanan").value;
let jumlah=document.getElementById("jumlahMenu").value;

let total=harga*jumlah;

document.getElementById("totalMenu").innerText=total;

}

function tambah(){
let a=parseFloat(document.getElementById("angka1").value);
let b=parseFloat(document.getElementById("angka2").value);
document.getElementById("hasilCalc").innerText=a+b;
}

function kurang(){
let a=parseFloat(document.getElementById("angka1").value);
let b=parseFloat(document.getElementById("angka2").value);
document.getElementById("hasilCalc").innerText=a-b;
}

function kali(){
let a=parseFloat(document.getElementById("angka1").value);
let b=parseFloat(document.getElementById("angka2").value);
document.getElementById("hasilCalc").innerText=a*b;
}

function bagi(){
let a=parseFloat(document.getElementById("angka1").value);
let b=parseFloat(document.getElementById("angka2").value);
document.getElementById("hasilCalc").innerText=a/b;
}

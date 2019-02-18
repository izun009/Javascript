//callback adalah function yang dieksekusi melalui function lain
//callback juga dapat dieksekusi pada point tertentu
//==============================================================//


function satu(subject,callback){
    console.log(`Kerjakan PR ${subject}`);
    callback();
}

function dua(su,mycallback){
    console.log(`PR ${su} Belum di kerjakan !!!`);
    mycallback(); 
}


function coy(){
    console.log('PR udah di kerjain');
}

function cuy(){
    console.log("Kerjain PR-nya !!!");
}

function proses(panggil){
    setTimeout(() =>{
        console.log("Nama Saya "+panggil);
    },100);
    
}

function tampil(depan,belakang,tengah){
    var panggil = depan +" "+belakang;
    if(typeof tengah == "function"){
        proses(panggil);
    }else{
        console.log("Saya tidak kenal Anda");
    }
}


const data=['Ayam','Kambing','Paus','Hiu']


function ListData(){
    setTimeout(function(){
        for(var i = 0; i <= data.length-1;i++){
            console.log(data[i]);
        }
    },1000);    
}

function tambahData(a,icallback){
    setTimeout( () =>{
        data.push(a);
        icallback();
    },2000);
    
}

function spasi(){
    console.log(" ");
}

function hasil(tambah){
    console.log("Hasilnya Adalah "+tambah);
}

function hasil(kurang){
    console.log("Hasilnya Adalah "+kurang);
}
function calculatorCallback(a,b,c){
    var tambah = a+b;
    var kurang = a-b;
    if(typeof c == "function"){
        hasil(tambah);
        hasil(kurang);
    }else{
        console.log("Tidak Ada Hasil");
    }

}


function p1() {
    console.log('p1 udah')
   }
   
   function p2() {
    setTimeout(
     function() {
      console.log('p2 udah')
       
     },100
     )
   }
   
   function p3() {
     console.log('p3 udah')
   }
  
function calculate(param1,param2,callback){
    //default operation
    result = param1 + param2
    
    // callback is function ?
    if (typeof callback == 'function'){
     result= callback(param1,param2)
    }
    
    return result
  }
  
  //execute
  a=calculate(2000,4000, function(x,y){return "$ " + (x + y) }) 
  b=calculate(7000,2000, function(x,y){return "Rp " + (x * y) }) 
  console.log(a) // $ 6000
  console.log(b) // $ 14000
  spasi();



satu('Matematika',coy);
spasi();
dua('Biologi', cuy);

tampil("Izun","Wijaya", proses);
spasi();
tambahData('Sapi',ListData);
spasi();
calculatorCallback(100,200,hasil);
p1();
p2();
p3();

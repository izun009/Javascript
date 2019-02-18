function tekan(){
    var nim1     = (document.fform.nim.value);
    var nama1    = (document.fform.nama.value);
    var jk1      = (document.fform.jk.value);
    var agama1   = (document.fform.agama.value);
    document.fform.onim.value = nim1;
    document.fform.onama.value = nama1;
    document.fform.ojk.value = jk1;
    document.fform.oagama.value = agama1;

    var ket="";
    if(document.fform.kawin.checked == true){
        ket = "Kawin";
    }else{
        ket = "Belum Kawin";
    }
    document.fform.okawin.value = ket;

    var jurusan1   = (document.fform.jurusan.value);
    var komentar1  = (document.fform.kom.value);
    document.fform.ojurusan.value = jurusan1;
    document.fform.okom.value = komentar1;
}
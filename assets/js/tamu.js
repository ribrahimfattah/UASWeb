function validasi() 
    {
        var konfir;
			
        konfir = confirm('Apakah data yang diisi sudah benar?');
			
        if(konfir == true)
            {
                document.location.href='fix.html';
            }
        else
            {
                document.location.href='tamu.html';
            }
    }

function loadXML(file)
    {
        var xmlHttp;
        if(window.XMLHttpRequest)
            {
                //instansiasi untuk IE7+, FIrefox, Chrome, Opera, Safari
                xmlHttp=new XMLHttpRequest();
            }
        else
            {
                //Instansi untuk IE5, IE6
                xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
        xmlHttp.onreadystatechange=function()
            {
                if(xmlHttp.readyState==4 && xmlHttp.status==200)
                    {
                        var xml=xmlHttp.responseXML;
                        DT = xml.documentElement.getElementsByTagName("DT");
                        NAMA = DT[0].getElementsByTagName("NAMA")[0].childNodes[0].nodeValue;
                        EMAIL= DT[0].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
                        ALAMAT = DT[0].getElementsByTagName("ALAMAT")[0].childNodes[0].nodeValue;
                        
                        document.getElementById("tamu").innerHTML=NAMA;
                        document.getElementById("etamu").innerHTML=EMAIL;
                        document.getElementById("atamu").innerHTML=ALAMAT;
                        
                        NAMA = DT[1].getElementsByTagName("NAMA")[0].childNodes[0].nodeValue;
                        EMAIL= DT[1].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
                        ALAMAT = DT[1].getElementsByTagName("ALAMAT")[0].childNodes[0].nodeValue;
                        
                        document.getElementById("tamu1").innerHTML=NAMA;
                        document.getElementById("etamu1").innerHTML=EMAIL;
                        document.getElementById("atamu1").innerHTML=ALAMAT;

                        NAMA = DT[2].getElementsByTagName("NAMA")[0].childNodes[0].nodeValue;
                        EMAIL= DT[2].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
                        ALAMAT = DT[2].getElementsByTagName("ALAMAT")[0].childNodes[0].nodeValue;
                        
                        document.getElementById("tamu2").innerHTML=NAMA;
                        document.getElementById("etamu2").innerHTML=EMAIL;
                        document.getElementById("atamu2").innerHTML=ALAMAT;

                        NAMA = DT[3].getElementsByTagName("NAMA")[0].childNodes[0].nodeValue;
                        EMAIL= DT[3].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
                        ALAMAT = DT[3].getElementsByTagName("ALAMAT")[0].childNodes[0].nodeValue;
                        
                        document.getElementById("tamu3").innerHTML=NAMA;
                        document.getElementById("etamu3").innerHTML=EMAIL;
                        document.getElementById("atamu3").innerHTML=ALAMAT;

                        NAMA = DT[4].getElementsByTagName("NAMA")[0].childNodes[0].nodeValue;
                        EMAIL= DT[4].getElementsByTagName("EMAIL")[0].childNodes[0].nodeValue;
                        ALAMAT = DT[4].getElementsByTagName("ALAMAT")[0].childNodes[0].nodeValue;
                        
                        document.getElementById("tamu4").innerHTML=NAMA;
                        document.getElementById("etamu4").innerHTML=EMAIL;
                        document.getElementById("atamu4").innerHTML=ALAMAT;
                    }
            }
    
        xmlHttp.open("GET",file,true);
        xmlHttp.send("");
    }
function tanya()
    {
        var tanya;

        tanya = confirm('Apakah anda penduduk Kab. Magelang? jika iya klik OK 2 kali');

        if(tanya == true)
            {
                document.location.href="tamu.html";
            }
        else
            {
                document.location.href="fix.html";
            }
    }
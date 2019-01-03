function dom()
    {
        var info = document.getElementById('info');
        var button = document.getElementById('button');

        if (button.innerHTML == "info 1") 
            {
                info.innerHTML = "Jalan santai hari Minggu 6 Januari 2019";
                button.innerHTML = "info 2";
            }
        else if (button.innerHTML == "info 2") 
            {
                info.innerHTML = "No GOLPUT Pemilu April 2019";
                button.innerHTML = "info 3";
            }
        else if (button.innerHTML == "info 3") 
            {
                info.innerHTML = "Isi daftar Tamu yaa";
                button.innerHTML = "info 1";
            }
    }
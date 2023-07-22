/*

TODO: Logika pada bagian form;

? ketika semua input masih kosong dan button di klik maka akan menampilkan tanda eror dan juga keterangan eror nya.
? khusus pada email terdapat 2 buah jenis error;
    * a. ketika input pada email kosong. -> responnya Email cannot be empty.
    * b. ketika email yang dimasukkan tidak sesuai dengan jenis email. -> responnya Looks like this is not an email.
    
* Cara pembuatan:
    * buat variable untuk button claim nya, -> .button-claim
    * masing masing input berdasarkan id nya, -> #firstName, #lastName, #email, #password
    * masing masing tag p dengan nama class nya, -> .firstName, .lastName, .email, .password
    * masing masing tag div untuk bagian 'alert-[nama class]' dengan nama class nya juga, -> .alert-firstName, .alert-lastName, .alert-email, .alert-password
    
    ! emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    * buat variable yang berisi timeout agar ketika pesan error nya sudah tampil bisa otomatis menghilang lagi.

    * lanjut terakhir buat eventlistener dibagian button nya agar ketika di klik, function didalamnya dijalankan, karna banyak kondisinya jadi gunakan 'switch case', lalu return variable timeout nya.

*/

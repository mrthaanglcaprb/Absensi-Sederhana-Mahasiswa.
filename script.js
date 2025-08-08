document.getElementById("absensiForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("Nama").value;
    let nim = document.getElementById("NIM").value;
    let keterangan = document.getElementById("status").value;

    let tabel = document.getElementById("tabelAbsensi").getElementsByTagName('tbody')[0];
    let row = tabel.insertRow();

    let no = tabel.rows.length; // auto nomor urut
    row.insertCell(0).innerText = no;
    row.insertCell(1).innerText = nim;
    row.insertCell(2).innerText = nama;
    row.insertCell(3).innerText = keterangan;

    // reset form
    document.getElementById("absensiForm").reset();
});

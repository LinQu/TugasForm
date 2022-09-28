var data = [];

function tampil() {
  var table = document.getElementById("data-table");
  table.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    table.innerHTML +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      data[i].nama +
      "</td><td>" +
      data[i].nohp +
      "</td><td>" +
      data[i].jk +
      "</td><td><button class='btn btn-danger' onclick='Hapus(" +
      i +
      ")'>Hapus</button></td></tr>";
  }
}

function tambah() {
  var Nama = document.getElementById("nama").value;
  var Nohp = document.getElementById("nohp").value;
  var Jk = document.getElementById("jk").value;
  data.push({ nama: Nama, nohp: Nohp, jk: Jk });
  tampil();
}

function Hapus(id) {
  data.splice(id, 1);
  tampil();
}

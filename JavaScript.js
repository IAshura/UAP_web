daftar_barang = [
  { kode: "001", barang: "Barang A", harga: 10000 },
  { kode: "002", barang: "Barang B", harga: 20000 },
  { kode: "003", barang: "Barang C", harga: 30000 },
];

var listBarangTabel = document.getElementById("listTabelBarang");

daftar_barang.forEach(function (item) {
  var { kode, barang, harga } = item;
  var row = listBarangTabel.insertRow(listBarangTabel.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);

  cell1.innerHTML = kode;
  cell2.innerHTML = barang;
  cell3.innerHTML = harga.toFixed(2);
});

function submit() {
  var kodeBarang = document.getElementById("kodeBarang").value;
  var banyakBarang = document.getElementById("banyakBarang").value;
  var PilihItem = daftar_barang.find((item) => item.kode === kodeBarang);
  var totalPembayaran;
  if (PilihItem) {
    totalPembayaran = PilihItem.harga * banyakBarang;
    alert("Total pembayaran adalah: " + totalPembayaran.toFixed(2));

    var uang = prompt("masukkan uang user:");
    var kembalian = uang - totalPembayaran;
    if (uang < totalPembayaran) {
      alert("uang anda tidak cukup");
    } else {
      alert("total kembalian anda adalah: " + kembalian);
    }
  } else {
    alert("Barang dengan kode " + kodeBarang + " tidak ditemukan");
  }
}

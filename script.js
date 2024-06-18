document.getElementById("button_jumlah").onclick = function () {
  const angka_1 = document.getElementById("angka_1").valueAsNumber;
  const angka_2 = document.getElementById("angka_2").valueAsNumber;

  if (!isNaN(angka_1) && !isNaN(angka_2)) {
    const hasil = angka_1 + angka_2;
    console.log(`Hasil = ${hasil} tipe = ${typeof hasil}`);
    document.getElementById("hasil").textContent = hasil;
  } else {
    document.getElementById("hasil").textContent = 'Input tidak valid';
  }
};

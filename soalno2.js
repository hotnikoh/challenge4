/**

Soal Latihan: Penentuan Biaya Parkir

Sebuah mal memiliki aturan biaya parkir sebagai berikut:

1. Jika parkir kurang dari atau sama dengan 1 jam, maka biaya parkirnya adalah Rp10.000.
2. Untuk setiap jam berikutnya (lebih dari 1 jam), biaya tambahan adalah Rp5.000/jam.
3. Jika parkir lebih dari 5 jam, akan diberikan diskon Rp10.000 dari total biaya.
4. Parkir di hari Minggu dikenakan biaya tambahan Rp5.000.
5. Jika total biaya parkir lebih dari Rp30.000 dan parkir dilakukan pada hari libur nasional, maka akan diberikan diskon tambahan sebesar Rp7.000.

Buatlah fungsi hitungBiayaParkir(lamaParkir, hari, liburNasional) yang menerima parameter:
1. lamaParkir (number): Durasi parkir dalam jam.
2. hari (string): Nama hari (Senin, Selasa, ..., Minggu).
3. liburNasional (boolean): Menandakan apakah hari itu merupakan libur nasional atau tidak (true jika ya, false jika tidak).

Fungsi ini harus mengembalikan biaya parkir berdasarkan kondisi yang diberikan.

*/

console.log("============ Soal Dua ============");

function hitungBiayaParkir(lamaParkir, hari, liburNasional) {

}

console.log(hitungBiayaParkir(2, 'Sabtu', false));
// Output: Biaya Parkir: Rp15000.
console.log(hitungBiayaParkir(6, 'Minggu', true));
// Output: Biaya Parkir: Rp25000.



function hitungBiayaParkir(lamaParkir, hari, liburNasional){
    if (typeof lamaParkir !== "number" && hari !== "string" && liburNasional !== "boolean"){
        return "Please input correctly";
    }

    if (lamaParkir <=1){
        return "Rp10,000";
    }
    else if (lamaParkir > 1){
        return (lamaParkir * 10000 + 5000)
    }
    else if (lamaParkir > 5){
        return (lamaParkir * 10000 - 10000)
    }
    else if (hari === minggu){
        return (lamaParkir*10000 + 5000)
    }
    else if (lamaParkir*10000 >= 30000){
        return 
    }
}
// 3-masala. engKichikIndeksi(arr) — eng kichik element indeksi
// Yechim: birinchi elementni eng kichik deb olaman, massivni aylanib, qat’iy kichikroq topsam indeksni yangilayman (shuning uchun birinchisi qoladi).
function engKichikIndeksi(arr) {
  if (arr.length === 0) {
    return -1; // bo‘sh massivda element yo‘q
  }
  let kichikIndeks = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[kichikIndeks]) {
      kichikIndeks = i;
    }
  }
  return kichikIndeks;
}

// Tekshiruvlar
console.log(engKichikIndeksi([8, 3, 9, 1, 4])); // kutilgan: 3
console.log(engKichikIndeksi([2, 2, 5]));       // kutilgan: 0
console.log(engKichikIndeksi([-5, -9, -9, 0])); // kutilgan: 1 (o‘z misolim)
console.log(engKichikIndeksi([7]));             // kutilgan: 0 (chegaraviy holat: bitta element)

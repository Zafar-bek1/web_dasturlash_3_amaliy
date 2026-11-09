// 4-masala. harflarChastotasi(s) — har bir harf necha marta uchrashi
// Yechim: obyekt yarataman; har bir harf uchun sanagich bo‘lmasa 1 qo‘yaman, bo‘lsa 1 ga oshiraman. Kalitlar birinchi uchragan tartibda qo‘shiladi.
function harflarChastotasi(s) {
  const chastota = {};
  for (const harf of s) {
    if (chastota[harf] === undefined) {
      chastota[harf] = 1;
    } else {
      chastota[harf]++;
    }
  }
  return chastota;
}

// Tekshiruvlar
console.log(harflarChastotasi("banana")); // kutilgan: { b: 1, a: 3, n: 2 }
console.log(harflarChastotasi("veb"));    // kutilgan: { v: 1, e: 1, b: 1 }
console.log(harflarChastotasi("aaaa"));   // kutilgan: { a: 4 } (o‘z misolim)
console.log(harflarChastotasi(""));       // kutilgan: {} (chegaraviy holat)

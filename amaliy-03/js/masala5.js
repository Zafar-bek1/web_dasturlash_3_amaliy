// 5-masala. yetishmayotganSon(arr) — 1 dan n gacha sonlardan tushib qolganini topish
// Yechim: to‘liq qatorda n = uzunlik + 1 ta son bo‘lgan. 1..n yig‘indisi n*(n+1)/2 dan massiv yig‘indisini ayirsam, yetishmagan son chiqadi.
function yetishmayotganSon(arr) {
  const n = arr.length + 1;
  const toliqYigindi = (n * (n + 1)) / 2;
  let amaldagiYigindi = 0;
  for (const son of arr) {
    amaldagiYigindi += son;
  }
  return toliqYigindi - amaldagiYigindi;
}

// Tekshiruvlar
console.log(yetishmayotganSon([1, 2, 4, 5, 6]));    // kutilgan: 3
console.log(yetishmayotganSon([3, 1]));             // kutilgan: 2
console.log(yetishmayotganSon([5, 3, 1, 2, 6]));    // kutilgan: 4 (o‘z misolim, tartibsiz)
console.log(yetishmayotganSon([]));                 // kutilgan: 1 (chegaraviy holat: faqat 1 bo‘lgan)

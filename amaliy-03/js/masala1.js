// 1-masala. sekundlarniFormatla(s) — sekundlarni "SS:MM:ss" ko‘rinishiga aylantirish
// Yechim: sekundni 3600 ga bo‘lib soatni, qoldiqni 60 ga bo‘lib minutni topaman, so‘ng har birini ikki xonali qilaman.
function sekundlarniFormatla(s) {
  const soat = Math.floor(s / 3600);
  const minut = Math.floor((s % 3600) / 60);
  const sekund = s % 60;
  // 5 -> "05", 12 -> "12": oldiga kerak bo‘lsa 0 qo‘shadi
  const ikkiXona = (son) => String(son).padStart(2, "0");
  return ikkiXona(soat) + ":" + ikkiXona(minut) + ":" + ikkiXona(sekund);
}

// Tekshiruvlar
console.log(sekundlarniFormatla(3725));  // kutilgan: "01:02:05"
console.log(sekundlarniFormatla(59));    // kutilgan: "00:00:59"
console.log(sekundlarniFormatla(86399)); // kutilgan: "23:59:59" (o‘z misolim)
console.log(sekundlarniFormatla(0));     // kutilgan: "00:00:00" (chegaraviy holat)

// 2-masala. camelCase(s) — satrni JavaScript o‘zgaruvchi nomiga aylantirish
// Yechim: satrni so‘zlarga bo‘laman; birinchi so‘zni kichik harf qilaman, qolganlarining bosh harfini katta, qolganini kichik qilib ulayman.
function camelCase(s) {
  const sozlar = s.trim().split(" ").filter((soz) => soz !== "");
  let natija = "";
  for (let i = 0; i < sozlar.length; i++) {
    const soz = sozlar[i].toLowerCase();
    if (i === 0) {
      natija += soz;
    } else {
      natija += soz[0].toUpperCase() + soz.slice(1);
    }
  }
  return natija;
}

// Tekshiruvlar
console.log(camelCase("foydalanuvchi ismi familiyasi")); // kutilgan: "foydalanuvchiIsmiFamiliyasi"
console.log(camelCase("Umumiy NARX"));                   // kutilgan: "umumiyNarx"
console.log(camelCase("  Bir   IKKI  uch "));            // kutilgan: "birIkkiUch" (o‘z misolim)
console.log(camelCase(""));                              // kutilgan: "" (chegaraviy holat)

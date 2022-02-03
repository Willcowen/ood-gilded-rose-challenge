
const { Shop, Item, regularItem, agedBrie, sulfuras, backstagePass, conjuredItem } = require("../src/gilded_rose");

const items = [
  new regularItem("+5 Dexterity Vest", 10, 20),
  new agedBrie("Aged Brie", 2, 0),
  new regularItem("Elixir of the Mongoose", 5, 7),
  new sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
  new sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
  new backstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new backstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new backstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 49),

  // This Conjured item does not work properly yet
  new conjuredItem("Conjured Mana Cake", 3, 6),
];

const days = Number(process.argv[11]) || 11;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}

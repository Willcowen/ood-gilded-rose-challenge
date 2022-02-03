const { Shop, Item, regularItem, agedBrie, sulfuras, backstagePass, conjuredItem} = require("../src/gilded_rose.js");
describe("Gilded Rose", function () {
  it("can check value of item in itemarray.", function () {
    const gildedRose = new Shop([new regularItem("example item", 10, 9)]);
    gildedRose.updateQuality();
    const itemName = gildedRose.items[0].name
    expect(itemName).toEqual("example item");
  });
  it("item sellIn & item quality decreases by one after one day.", function () {
    const gildedRose = new Shop([new regularItem("example item", 10, 9)]);
    const item = gildedRose.updateQuality();
    const resultOne = item[0].sellIn
    const resultTwo = item[0].quality
    expect(resultOne).toEqual(9);
    expect(resultTwo).toEqual(8);
  });
  it("item sellIn & item quality decreases by 5 after 5 days.", function () {
    const gildedRose = new Shop([new regularItem("example item", 10, 9)]);
    for (let i = 0; i < 5; i++) {
      gildedRose.updateQuality();
    }
    const resultOne = gildedRose.items[0].sellIn
    const resultTwo = gildedRose.items[0].quality
    expect(resultOne).toEqual(5);
    expect(resultTwo).toEqual(4);
  });
  it("Once sellIn date passed, quality decreases twice as fast.", function () {
    const gildedRose = new Shop([new regularItem("thing", -5, 10)]);
    gildedRose.updateQuality();
    const result = gildedRose.items[0].quality
    expect(result).toEqual(8);
  });
  it("The Quality of an item is never negative.", function () {
    const gildedRose = new Shop([new regularItem("Another thing", -1, 1)]);
    gildedRose.updateQuality();
    const result = gildedRose.items[0].quality
    expect(result).toEqual(0);
  });
  it("Aged Brie actually increases in Quality the older it gets", function () {
    const gildedRose = new Shop([new agedBrie("Aged Brie", 2, 1)]);
    gildedRose.updateQuality();
    const result = gildedRose.items[0].quality
    expect(result).toEqual(2);
  });
  it("The Quality of an item is never more than 50", function () {
    const gildedRose = new Shop([new agedBrie("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });
  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function () {
    const gildedRose = new Shop([
      new sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(80)
  });
  it("Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert", function () {
    const gildedRose = new Shop([
      new backstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new backstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new backstagePass("Backstage passes to a TAFKAL80ETC concert", -1, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
    expect(items[1].quality).toEqual(23);
    expect(items[2].quality).toEqual(0);
  });
  it("Conjured items degrade in Quality twice as fast as normal items", function () {
    const gildedRose = new Shop([
      new conjuredItem("Conjured Water", 10, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });
  fit("The Quality of an item is never negative.", function () {
    const gildedRose = new Shop([
      new regularItem("regular item", -1, 1),
      new conjuredItem("conjured item", -1, 1),
      new agedBrie("aged brie", -1, -1)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
    expect(items[1].quality).toEqual(0);
    expect(items[2].quality).toEqual(0);
  });
});

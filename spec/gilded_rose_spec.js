const { Shop, Item, normalItem, agedBrie, sulfuras, backstagePass, conjuredItem} = require("../src/gilded_rose.js");
describe("Gilded Rose", function () {
  it("can check value of item in itemarray.", function () {
    const gildedRose = new Shop([new normalItem("example item", 10, 9)]);
    gildedRose.updateQuality();
    const result = gildedRose.items[0].name
    expect(result).toEqual("example item");
  });
  it("item sellIn & item quality decreases by one after one day.", function () {
    const gildedRose = new Shop([new normalItem("example item", 10, 9)]);
    gildedRose.updateQuality();
    const resultOne = gildedRose.items[0].sellIn
    const resultTwo = gildedRose.items[0].quality
    expect(resultOne).toEqual(9);
    expect(resultTwo).toEqual(8);
  });
  fit("item sellIn & item quality decreases by 5 after 5 days.", function () {
    const gildedRose = new Shop([new Item("example item", 10, 9)]);
    for (let i = 0; i < 4; i++) {
      gildedRose.updateQuality();
    }
    gildedRose.updateQuality();
    const resultOne = gildedRose.items[0].sellIn
    const resultTwo = gildedRose.items[0].sellIn
    expect(resultOne).toEqual(5);
    expect(items[0].quality).toEqual(4);
  });
  it("Once sellIn date passed, quality decreases twice as fast.", function () {
    const gildedRose = new Shop([new Item("thing", -5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });
  it("The Quality of an item is never negative.", function () {
    const gildedRose = new Shop([new Item("Another thing", -1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });
  it("Aged Brie actually increases in Quality the older it gets", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });
  it("The Quality of an item is never more than 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });
  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function () {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
    expect(items[0].quality).toEqual(80);
  });
  it("Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert", function () {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
    expect(items[1].quality).toEqual(23);
    expect(items[2].quality).toEqual(0);
  });
  it("Conjured items degrade in Quality twice as fast as normal items", function () {
    const gildedRose = new Shop([
      new Item("Conjured Water", 10, 10),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });
});

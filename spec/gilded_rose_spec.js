var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  it("new shop instance returns empty array.", function() {
    const gildedRose = new Shop();
    expect(gildedRose.updateQuality(1)).toEqual([]);
  });
  it("can check value of item in itemarray.", function() {
    const gildedRose = new Shop([ new Item("example item", 10, 9) ]);
    const items = gildedRose.updateQuality(1);
    expect(items[0].name).toEqual("example item");
  });
  it("item sellIn & item quality decreases by one after one day.", function() {
    const gildedRose = new Shop([ new Item("example item", 10, 9) ]);
    const items = gildedRose.updateQuality(1);
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(8);
  });
  it("item sellIn & item quality decreases by 5 after 5 days.", function() {
    const gildedRose = new Shop([ new Item("example item", 10, 9) ]);
    const items = gildedRose.updateQuality(5);
    expect(items[0].sellIn).toEqual(5);
    expect(items[0].quality).toEqual(4);
  });

});

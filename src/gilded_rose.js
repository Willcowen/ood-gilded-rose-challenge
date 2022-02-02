class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn; //All items have a SellIn value which denotes the number of 1 we have to sell the item
    this.quality = quality; //All items have a Quality value which denotes how valuable the item is
  }

  //- At the end of each day our system lowers both values for every item
}

const brie = 'Aged Brie'
const backstagePass = 'Backstage passes to a TAFKAL80ETC concert'
const conjuredWater = 'Conjured Water'
const sulfuras = 'Sulfuras, Hand of Ragnaros'


class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name != brie && item.name != backstagePass) {
        if (item.quality > 0) {
          if (item.name != sulfuras) {
            item.quality = item.quality - 1;
          }
        }
      } else {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
          if (item.name == backstagePass) {
            if (item.sellIn < 11) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < 50) {
                item.quality = item.quality + 1;
              }
            }
          }
        }
      }
      if (item.name != sulfuras) {
        item.sellIn = item.sellIn - 1;
      }
      if (item.sellIn < 0 || item.name == conjuredWater) {
        if (item.name != brie) {
          if (item.name != backstagePass) {
            if (item.quality > 0) {
              if (item.name != sulfuras) {
                item.quality = item.quality - 1;
              }
            }
          } else {
            item.quality = item.quality - item.quality;
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn; //All items have a SellIn value which denotes the number of 1 we have to sell the item
    this.quality = quality; //All items have a Quality value which denotes how valuable the item is
  }
  //- At the end of each day our system lowers both values for every item
}

class normalItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality)
  }

  updateDailyQuality() {
    this.sellIn -= 1
    if (this.quality > 0) {
      this.quality -= 1
    }
    if (this.sellIn < 0) {
      this.quality -= 1
    }
  }
}

class sulfuras extends Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  updateDailyQuality() {

  }
}

class agedBrie extends Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }


  updateDailyQuality() {

    this.sellIn -= 1
    if(this.quality < 50) {
      this.quality += 1
    }

    if (this.sellIn < 0) {
      this.quality += 1
    }
  }

  }


class backstagePass extends Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }

  updateDailyQuality() {
    this.sellIn -= 1
    if (this.sellIn < 0) {
      this.quality = 0
      return
    }
    if (this.sellIn > 10 && this.quality < 50) {
    this.quality += 1
    }
    if (this.sellIn > 5 && this.sellIn <= 10){
    this.quality += 1
    }
    if (this.sellIn <= 5) {
      this.quality += 1
    }
  }
}

class conjuredItem extends Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
  updateDailyQuality() {
    this.sellIn -= 1
    if (this.quality > 0) {
      this.quality -= 2
    }
    if (this.sellIn < 0) {
      this.quality -= 2
    }
  }
}



// const brie1 = 'Aged Brie'
// const backstagePass1 = 'Backstage passes to a TAFKAL80ETC concert'
// const conjuredWater1 = 'Conjured Water'
// const sulfuras1 = 'Sulfuras, Hand of Ragnaros'


class Shop {
  constructor(items=[]){
    this.items = items
  }

  updateQuality() {

    this.items.forEach(item => item.updateDailyQuality())
  //   for (const item of this.items) { //loop through items
  //     if (item.name != brie1 && item.name != backstagePass1){
  //     if (item.quality > 0 && item.name != sulfuras1) { //check item is not brie and is not backstagePass, check quality greater than 0, check item is not sulfuras
  //           item.quality-- //decrement
  //         }
  //       }
  //      else {
  //       if (item.quality < 50) { //check quality less than 50
  //         item.quality++
  //         if (item.name == backstagePass1) {
  //           if (item.sellIn < 11) {
  //             if (item.quality < 50) {
  //               item.quality++
  //             }
  //           }
  //           if (item.sellIn < 6) {
  //             if (item.quality < 50) {
  //               item.quality++ 
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (item.name != sulfuras1) {
  //       item.sellIn-- 
  //     }
  //     if (item.sellIn < 0 || item.name == conjuredWater1) {
  //       if (item.name != brie1) {
  //         if (item.name != backstagePass1) {
  //           if (item.quality > 0) {
  //             if (item.name != sulfuras1) {
  //               item.quality-- 
  //             }
  //           }
  //         } else {
  //           item.quality = item.quality - item.quality;
  //         }
  //       } else {
  //         if (item.quality < 50) {
  //           item.quality++ 
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
}
}
module.exports = {
  Item,
  Shop,
  normalItem,
  backstagePass,
  agedBrie,
  sulfuras,
  conjuredItem
}

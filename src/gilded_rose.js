class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn; 
    this.quality = quality; 
  }
}

class regularItem extends Item {

  updateDailyQuality() {
    this.sellIn -= 1;
    if (this.quality > 0 && this.quality <= 50) {
      this.quality -= 1;
    }
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 1;
    }
  }
}

class sulfuras extends Item {


  updateDailyQuality() {}
}

class agedBrie extends Item {
  

  updateDailyQuality() {
    this.sellIn -= 1;
    if (this.quality < 50) {
      this.quality += 1;
    }

    if (this.sellIn < 0) {
      this.quality += 1;
    }
  }
}

class backstagePass extends Item {

  updateDailyQuality() {
    this.sellIn -= 1;
    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }
    if (this.quality >= 50) {
      this.quality = 50
      return
    }
    if (this.sellIn > 5 && this.sellIn <= 10) {
      this.quality += 2;
    }
    else if (this.sellIn <= 5) {
      this.quality += 3;
    }
    else {
      this.quality += 1
    }
  }
}

class conjuredItem extends Item {

  updateDailyQuality() {
    this.sellIn -= 1
    if (this.quality === 1) {
      this.quality -= 1;
    }
    else if (this.quality >= 2) {
      this.quality -= 2;
    }
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => item.updateDailyQuality());
    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
  regularItem,
  backstagePass,
  agedBrie,
  sulfuras,
  conjuredItem,
};

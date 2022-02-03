class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn; 
    this.quality = quality; 
  }
}

class regularItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateDailyQuality() {
    this.sellIn -= 1;
    if (this.quality > 0) {
      this.quality -= 1;
    }
    if (this.sellIn < 0 && this.quality > 0) {
      this.quality -= 1;
    }
  }
}

class sulfuras extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateDailyQuality() {}
}

class agedBrie extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

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
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateDailyQuality() {
    this.sellIn -= 1;
    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }
    if (this.sellIn > 0 && this.quality < 50) {
      this.quality += 1;
    }
    if (this.sellIn >= 6 && this.sellIn <= 10) {
      this.quality += 1;
    }
    else if (this.sellIn <= 5) {
      this.quality += 2;
    }
  }
}

class conjuredItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  updateDailyQuality() {
    this.sellIn -= 1;
    if (this.quality > 0) {
      this.quality -= 2;
    }
    if (this.sellIn < 0) {
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

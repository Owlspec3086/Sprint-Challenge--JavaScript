// 1. Copy and paste your prototype in here and refactor into class syntax.
class PhoneMaker {
    constructor(water) {
    this.length = water.length;
    this.width = water.width;
    this.height = water.height;
    }

  volume () {
    return this.length * this.width * this.height;
  
  }
  surfaceArea () {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}  
  
  const phone = new PhoneMaker({
    length: 4,
    width: 5,
    height: 5,
  })
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
   console.log(phone.volume()); // 100
   console.log(phone.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
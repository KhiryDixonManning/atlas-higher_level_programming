#!/usr/bin/node
class Rectangle {
    // initialization method
    constructor (w, h) {
      if (w <= 0 || h <= 0) {
        return {};
      }
      this.width = w;
      this.height = h;
    }
  
    // print method to print a rectangle
    print () {
      for (let i = 0; i < this.height; i++) {
        console.log('X'.repeat(this.width));
      }
    }
  }
  module.exports = Rectangle;
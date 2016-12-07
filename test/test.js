'use strict';

const Cup = require('../main.js');
const expect = require('chai').expect;

describe('properties', function() {
  var cup = new Cup("ceramic", "yellow", true, 5, 50, "coffee");

  it('has a String material', function() {
    expect(cup.material).to.equal('ceramic');
  });

  it('has an integer max fluid height', function() {
    expect(cup.maxFluidHeight).to.equal(50);
  });
});

describe('addFluid', function() {
  var cup;

  beforeEach(function() {
    cup = new Cup("ceramic", "yellow", true, 25, 50, "coffee");
  });

  it('increases the currentFluidLevel', function() {
    cup.addFluid(15);
    expect(cup.currentFluidHeight).to.equal(40);
  });

  it('tells you how much you spilled over', function() {
    // cup.addFluid(35);
    expect(cup.addFluid(35)).to.equal('you spilled 10 mL');
    expect(cup.currentFluidHeight).to.equal(cup.maxFluidHeight);
  });

  // xit('spills over if maxFluidHeight is reached', function() {
  //   cup.addFluid(50);
  //   expect(cup.currentFluidHeight).to.equal(50);
  // });

});

'use strict';

function Cup(material, color, handle, currentFluidHeight, maxFluidHeight, fluidType){
    this.material = material;
    this.color = color;
    this.handle = handle;
    this.currentFluidHeight = currentFluidHeight;
    this.maxFluidHeight = maxFluidHeight;
    this.fluidType = fluidType;
}

Cup.prototype.addFluid = function(amountmL) {
  this.currentFluidHeight += amountmL;
  console.log(this.currentFluidHeight);
  console.log(this.maxFluidHeight);
  var spill = this.currentFluidHeight - this.maxFluidHeight;
  console.log(spill);
  if(this.currentFluidHeight > this.maxFluidHeight){
    this.currentFluidHeight =  this.maxFluidHeight;
    return `you spilled ${spill} mL`;
  }
  // else{
  //   this.currentFluidHeight += amountmL;
  // }
};
// var cup = new Cup('ceramic', 'blue', true, 25, 50, 'coffee');
// cup.addFluid(35);


module.exports = Cup;

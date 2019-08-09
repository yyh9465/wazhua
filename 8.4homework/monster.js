

var Base = window.Base;
function Monster({x, y}, context, img) {
	Base.call(this, {x, y}, context, img);
	this.imgPos = {
		x: 925,
		y: 35,
		width: 30,
		height: 30
	};
	this._bloodVolume = 500;
	// this._attackVolume = 70;
	// this._defenseVolume = 40;
}
Monster.prototype = Object.create(Base.prototype);

window.Monster = Monster;
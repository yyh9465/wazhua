var Base = window.Base;
function Hero({x, y}, context, img) {
	Base.call(this, {x, y}, context, img);
	this.imgPos = {
		x: 0,
		y: 0,
		width: 32,
		height: 32
	};
	this._bloodVolume = 500;
	// this._attackVolume = 70;
	// this._defenseVolume = 40;
}
Hero.prototype = Object.create(Base.prototype);

window.Hero = Hero;
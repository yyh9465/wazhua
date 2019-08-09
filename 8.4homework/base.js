function Base({x, y}, context, img) {
	this.img = img;
	this.context = context;
	this.rectWidth = 40;
	this.rectHeight = 40;
	this.imgPos = {
		x: 0,
		y: 0,
		width: 32,
		height: 32,
	};

	this.rect = {
		x,
		y,
		width: this.rectWidth,
		height: this.rectHeight
	};

}

Base.prototype = {
	drawBlood() {
		this.context.font = '14px "微软雅黑"';
		this.context.fillStyle = 'red';
		this.context.fillText('血量：' + this._bloodVolume,
			this.rect.x ,
			this.rect.y + this.rect.height + this.rectWidth / 2,
			this.rectWidth * 2, 5);
	},

	draw() {

		// if (!this.checkAlive()) {
		// 	return;
		// }
		this.drawBlood();
		this.context
			.drawImage(
				this.img,
				this.imgPos.x,
				this.imgPos.y,
				this.imgPos.width,
				this.imgPos.height,
				this.rect.x,
				this.rect.y,
				this.rect.width,
				this.rect.height
			);
	},
};
window.Base = Base;
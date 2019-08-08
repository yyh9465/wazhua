/**
 * yaoyanhui 2019-08-08
 */

// (function () {
// 	//资源
// 	const context = document.getElementById('content').getContext("2d");
// 	const heroImg = new Image();
// 	heroImg.onload = function () {
// 		var imgPos = {
// 			x: 0,
// 			y: 0,
// 			width: 32,
// 			height: 32
// 		};
//
// 		var rect = {
// 			x: 0,
// 			y: 0,
// 			width: 40,
// 			height: 40
// 		};
// 		context.drawImage(
// 			heroImg,
// 			imgPos.x,
// 			imgPos.y,
// 			imgPos.width,
// 			imgPos.height,
// 			rect.x,
// 			rect.y,
// 			rect.width,
// 			rect.height,
// 		);
// 	}
// 	heroImg.src = './hero.png';
//
// })();

(function () {
    function prepare() {

        const imgTask = (img, src) => {
            return new Promise(function (resolve, reject) {
                img.onload = resolve;
                img.onerror = reject;
                img.src = src;
            });
        };

        const context = document.getElementById('content').getContext('2d');
        const heroImg = new Image();
        const allSpriteImg = new Image();

        const allresourceTask = Promise.all([
            imgTask(heroImg, './hero.png'),
            imgTask(allSpriteImg, './all.jpg'),
        ]);

        return {
            /**
             * @param {Function} [callback] - 当准备好了之后要调用的回掉函数
             */
            getResource(callback) {
                allresourceTask.then(function () {
                    callback && callback(context, heroImg, allSpriteImg);
                });
            }
        };
    }

    function drawHero(context, heroImg, allSpriteImg) {

        var draw = function () {
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
        }

        var hero = {
            img: heroImg,
            context: context,
            imgPos: {
                x: 0,
                y: 0,
                width: 32,
                height: 32
            },

            rect: {
                x: 0,
                y: 0,
                width: 40,
                height: 40
            },

            draw: draw
        };

        var monster = {
            img: allSpriteImg,
            context: context,
            imgPos: {
                x: 858,
                y: 529,
                width: 32,
                height: 32
            },

            rect: {
                x: 100,
                y: 100,
                width: 40,
                height: 40
            },

            draw: draw
        };
        document.onkeydown = function (e) {
            move(e.keyCode, hero, monster, context);
        };
        hero.draw();
        monster.draw();
    }

    //移动方法
    function move(key, moveRole, eludeRole, context) {
        context.clearRect(moveRole.rect.x, moveRole.rect.y, moveRole.rect.width, moveRole.rect.height);
        switch (key) {
            //左
            case 37:
                moveRole.rect.x -= moveRole.rect.width;
                Intersect(moveRole.rect, eludeRole.rect) || moveRole.rect.x < 0 ? moveRole.rect.x += moveRole.rect.width : '';
                break;
            //上
            case 38:
                moveRole.rect.y -= moveRole.rect.height;
                Intersect(moveRole.rect, eludeRole.rect) || moveRole.rect.y < 0 ? moveRole.rect.y += moveRole.rect.height : '';
                break;
            //右
            case 39:
                moveRole.rect.x += moveRole.rect.width;
                Intersect(moveRole.rect, eludeRole.rect) || moveRole.rect.x + moveRole.rect.width > 500 ? moveRole.rect.x -= moveRole.rect.width : '';
                break;
            //下
            case 40:
                moveRole.rect.y += moveRole.rect.height;
                Intersect(moveRole.rect, eludeRole.rect) || moveRole.rect.y + moveRole.rect.height > 300 ? moveRole.rect.y -= moveRole.rect.height : '';
                break;
        }
        moveRole.draw();
    }

    //碰撞检测
    function Intersect(rectA, rectB) {
        return !(rectB.y + rectB.height < rectA.y || rectB.y > rectA.x + rectA.width ||
            rectB.y > rectA.y + rectA.height || rectB.x + rectB.width < rectA.x)

    }


    var resourceManager = prepare();
    resourceManager.getResource(function (context, heroImg, allSpriteImg) {
        drawHero(context, heroImg, allSpriteImg);
    });
})();
/**
 * yaoyanhui 2019-08-09
 */


(function () {

	var MapManager = window.MapManager;
	var Hero = window.Hero;
	var prepare = window.prepare;
	var Monster = window.Monster;




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
        return !(rectB.y + rectB.height <= rectA.y || rectB.y >= rectA.x + rectA.width ||
            rectB.y >= rectA.y + rectA.height || rectB.x + rectB.width <= rectA.x)

    }

		function gameBegin({context, allSpriteImg, heroImg}){
			var hero = new Hero({x: 0, y: 0}, context, heroImg);
			var monster = new Monster({x: 120, y: 120}, context, allSpriteImg);
			// var wizard = new Wizard({x: 200, y: 240}, context, allSpriteImg);
			// var cells = constructCell(context, allSpriteImg);
			var mapManager = new MapManager([hero, monster]);
			document.onkeydown = function (e) {
				move(e.keyCode, hero, monster, context);
			};
			mapManager.flush();
		}


	prepare()
		.then(gameBegin);
})();
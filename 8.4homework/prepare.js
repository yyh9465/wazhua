(function () {
	// 前面准备
    function prepare() {
        const imgTask = (img, src) => {
            return new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = reject;
                img.src = src;
            });
        };

        const context = document.getElementById('content').getContext('2d');
        const allSpriteImg = new Image();
        const heroImg = new Image();

        return Promise
            .all([
                imgTask(allSpriteImg, './all.jpg'),
                imgTask(heroImg, './hero.png')
            ])
            .then(function () {
                return {
                    context,
                    allSpriteImg,
                    heroImg
                }
            });
    }

    window.prepare = prepare;
})();
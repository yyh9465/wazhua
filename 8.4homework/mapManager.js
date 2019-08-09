// 袁鑫
function MapManager(elements) {
    this.elements = elements;
}

MapManager.prototype = {

    addElement(element) {
        this.elements.push(element);
    },

    removeElement(removingElement) {
        this.elements = this.elements.filter(element => element !== removingElement);
    },

    getElement({x, y}) {
        return this.elements.find(function (element) {
            if (!element.getRect) {
                return false;
            }
            const rect = element.getRect();
            return x === rect.x && y === rect.y;
        });
    },

    judgeIn: function (pos) {
        return this.elements.find(element => element.judgeIn).judgeIn(pos);
    },

    flush() {
        this.elements.forEach(function (element) {
            // var draw = element.draw;
            // draw();
            element.draw();
        });
    }
};

window.MapManager = MapManager;

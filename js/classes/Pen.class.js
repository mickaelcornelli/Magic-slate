
class Pen {

    constructor() {
        this.color = 'black';
        this.size = 1;
    }

    configure(slateCanvasContext) {

        slateCanvasContext.strokeStyle = this.color;
        slateCanvasContext.lineWidth = this.size;
    }

    setColor(color) {
        this.color = color;
    }

    setColorAsRgb(red, green, blue) {
       
        this.color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    }

    setSize(size) {
        this.size = size;
    }
}
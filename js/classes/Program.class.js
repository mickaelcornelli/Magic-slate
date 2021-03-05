
class Program {

    constructor() {
        this.colorPalette = new ColorPalette();
        this.pen = new Pen();
        this.canvas = new Slate(this.pen);
    }
   
    onClickColorPicker() {
        $('#color-palette').fadeIn('slow');
    }
    
    onClickPenColor(event) {

        const div = event.currentTarget;

        const penColor = div.dataset.color;   

        this.pen.setColor(penColor);
    }
    
    onClickPenSize(event) {

        const button = event.currentTarget;

        const penSize = button.dataset.size;  
       
        this.pen.setSize(penSize);
    }

    onPickColor() {

        const color = this.colorPalette.getPickedColor();

        this.pen.setColorAsRgb(color.red, color.green, color.blue);

        $('#color-palette').fadeOut('slow');
    }

    start() {

        $('#tool-clear-canvas').on('click', this.canvas.clear.bind(this.canvas));
        $('#tool-color-picker').on('click', this.onClickColorPicker.bind(this));

        $('.pen-color').on('click', this.onClickPenColor.bind(this));
        $('.pen-size').on('click', this.onClickPenSize.bind(this));

        $(document).on('magical-slate:pick-color', this.onPickColor.bind(this));
    }
}
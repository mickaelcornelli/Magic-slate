
class Slate {

    constructor(pen) {
      
        this.canvas = document.getElementById('slate'); 
        this.context = this.canvas.getContext('2d');
        this.currentLocation = null; 
        this.isDrawing = false;
        this.pen = pen; 
       
        this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
        this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
    }
    
    clear() {
       
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    getMouseLocation(event) {
        
        const rectangle = this.canvas.getBoundingClientRect();
        
        const location = {
            x: event.clientX - rectangle.left,
            y: event.clientY - rectangle.top
        };
        
        return location;
    }
    
    onMouseDown(event) {
       
        this.isDrawing = true;
       
        this.currentLocation = this.getMouseLocation(event);
    }
    
    onMouseLeave() {
        
        this.isDrawing = false;
    }
    
    onMouseMove(event) {

        const location = this.getMouseLocation(event);
        
        if (this.isDrawing) {
            
            this.pen.configure(this.context);
            this.context.beginPath();
            this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
            this.context.lineTo(location.x, location.y);
            this.context.closePath();
            this.context.stroke();
            this.currentLocation = location;
        }     
    }
    
    onMouseUp() {
        
        this.isDrawing = false;
    }
}
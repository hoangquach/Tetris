//hoang
const ROW=20;
const COLUMN=10;
const VACANT="white";
const SQ=20;
let board=[];
const ctv=document.getElementById("tetris");
const ctx=ctv.getContext("2d")
for (r=0;r<ROW;r++)
{
    board[r]=[];
    for(c=0;c<COLUMN;c++)
    {
        board[r][c]=VACANT;
    }
}
drawBoard();
//.....................

function drawBoard(){
    for(r=0;r<ROW;r++){
        for(c=0;c<COLUMN;c++){
            drawSquare(c,r,board[r][c]);
        }
    }
}

//drawSquare(3,3,"red");
function drawSquare(x,y,color){
    ctx.fillStyle= color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ);
    ctx.strokeStyle="black";
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

// ------------------------

//sukh
const BLOCKS = [
    [Z,"green"],
    [S,"red"],
    [T,"blue"],
    [O,"yellow"],
    [L,"cyan"],
    [I,"purple"],
    [J,"orange"]
];

function randomBlock(){
    let r = randomN = Math.floor(Math.random() * BLOCKS.length) // 0 -> 6
    return new Block( BLOCKS[r][0],BLOCKS[r][1]);
}

let p = randomBlock();

// The Object Piece
function Block(tetromino,color){
    this.tetromino = tetromino;
    this.color = color;
    
    this.tetrominoN = 0; // we start from the first pattern
    this.activeTetromino = this.tetromino[this.tetrominoN];
    
    // we need to control the pieces
    this.x = 4;
    this.y = 2;
}

// fill function

Block.prototype.fill = function(color){
    for( r = 0; r < this.activeTetromino.length; r++){
        for(c = 0; c < this.activeTetromino.length; c++){
            // we draw only occupied squares
            if( this.activeTetromino[r][c]){
                drawSquare(this.x + c,this.y + r, color);
            }
        }
    }
}
//alert("one");



Block.prototype.draw = function(){
    this.fill(this.color);

}
Block.prototype.unDraw = function(){
    this.fill(VACANT);
}
p.draw();
/*Piece.prototype.moveDown = function(){
    if(!this.collision(0,1,this.activeTetromino)){
        this.unDraw();
        this.y+5;
        this.draw();
    }else{
        // we lock the piece and generate a new one
        this.lock();
        p = randomPiece();
    }
    
}
p.moveDown(); */

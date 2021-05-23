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
function drawSquare(x,y,color){
    ctx.fillStyle= color;
    ctx.fillRect(x*SQ,y*SQ,SQ,SQ);
    ctx.strokeStyle="black";
    ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

// ------------------------

//sukh

const BLOCKS = [
    [Z,"red"],
    [S,"green"],
    [T,"yellow"],
    [O,"blue"],
    [L,"purple"],
    [I,"cyan"],
    [J,"orange"]
];

function randomBlock(){
    let r = randomB = Math.floor(Math.random() * BLOCKS.length)
    return new Block( BLOCKS[r][0], BLOCKS[r][1]);
}

let b = new Block(BLOCKS[0][0],BLOCKS[0][1]);

function Block(tetromino,color){
    this.tetromino = tetromino;
    this.color = color;

    this.tetrnominoNumber = 0;
    this.activeTetromino = this.tetromino[this.tetrnominoNumber];

    this.x = 5;
    this.y = 5;
}

Block.prototype.fill = function(color){
    for( r = 0; r < this.activeTetromino.length; r++){
        for( c = 0; c < this.activeTetromino.length;c++){
            if(this.activeTetromino[r][c]){
                drawSquare(this.x + c, this.y + r, color);
            }
        }
    }
}

Block.prototype.draw = function(){
    this.fill(this.color);
}

Block.prototype.unDraw = function(){
    this.fill(VACANT);
}

b.draw;
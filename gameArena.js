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
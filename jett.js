var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.background = 'grey'
var c = canvas.getContext('2d')
var rock = document.getElementById('rock')
var evilSpaceship = document.getElementById('evilHugeShip')
var background = document.getElementById('background')
var jet = document.getElementById('jet')

var w = 10
var h = 10

function gameLoop () {
    
    window.addEventListener('click',(e)=>{
        blastX = e.pageX - w/2
        blastY = e.pageY - h/2
        function blast_off() {
            requestAnimationFrame(blast_off)
            c.fillRect(blastX,blastY,w,h)
           blastY-=1
        }
            
        blast_off()
        
    })
}
gameLoop()


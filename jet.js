{
    var shootF = false
    window.addEventListener('mousedown', (e) => {

        shootF = true
    })
    window.addEventListener('mouseup', () => {
        shootF = false
    })
    function shoot() {
        if (shootF === true) {

        }
        else {
            
            
            
            
            
        }

    } shoot()
}
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
var jetWidth = innerWidth / 15
var jetHeight = innerHeight / 12
var jetLife = jetWidth







setInterval(() => {

    var rockWW = [50, 100, 30]
    var rockW = rockWW[Math.floor(Math.random() * 3)]
    var rockH = 50
    var rockX = Math.random() * innerWidth - rockW
    var rockY = -rockH + 10
    var speedRock = 1
    var rockHealth = 10



    window.addEventListener('mousemove', among = (e) => {

        var jetX = e.pageX - jetWidth / 2
        var jetY = e.pageY - jetHeight / 2
        c.clearRect(0, 0, innerWidth, innerHeight)
        c.fillStyle = 'red'
        c.drawImage(jet, jetX, jetY, jetWidth, jetHeight)
        if (jetX + jetWidth >= rockX &&
            jetX <= rockX + rockW &&
            jetY + jetHeight >= rockY &&
            jetY <= rockY + rockH) {
            console.log('jet Hited rock');
            jetLife--


        }
        function jet_health(params) {
            c.fillStyle = 'green'
            c.strokeRect(jetX, jetY + jetHeight, jetWidth, 10)
            c.fillRect(jetX, jetY + jetHeight, jetLife, 10)
            c.stroke()
            if (jetLife <= 0) {
                jetLife = 0
            }
        }
        jet_health()



    })

    window.addEventListener('click', (e) => {
        var x = e.pageX - w / 2
        var y = e.pageY - h / 2
        var blastSpeed = 5

        function jet_shooted_rock() {
            requestAnimationFrame(jet_shooted_rock)

            x = 0
            y = 0

        }


        function redBlast(params) {
            requestAnimationFrame(redBlast)
            c.fillStyle = 'black'
            c.clearRect(x - 2, y + h - 20, w + 5, h)
            c.fillStyle = 'red'
            c.fillRect(x, y - 20, w, h)


            y -= blastSpeed





            if (x + w >= rockX &&
                x <= rockX + rockW &&
                y + h >= rockY &&
                y <= rockY + rockH) {
                console.log('jet shooted rock');
                jet_shooted_rock()
                rockHealth--

            }
        }
        redBlast()



    })


    function rockSpawner() {
        requestAnimationFrame(rockSpawner)
        c.clearRect(rockX, rockY, rockW, -speedRock)
        c.drawImage(rock, rockX, rockY, rockW, rockH)
        c.fillText(rockHealth, rockX + 5, rockY + rockH, rockW)

        rockY += speedRock
    }








    rockSpawner()


}, 3000);



setInterval(() => {

    var evilSpaceshipH = 300
    var evilSpaceshipW = 400
    var evilSpaceshipX = Math.random() * innerWidth - evilSpaceshipW / 2
    var evilSpaceshipY = -evilSpaceshipH + 10
    var evilSpaceshipSpeed = 0.3
    var airshipHealth = 100

    window.addEventListener('mousemove', among = (e) => {

        var jetX = e.pageX - jetWidth / 2
        var jetY = e.pageY - jetHeight / 2
        c.clearRect(0, 0, innerWidth, innerHeight)
        c.fillStyle = 'red'
        c.drawImage(jet, jetX, jetY, jetWidth, jetHeight)
        if (jetX + jetWidth >= evilSpaceshipX &&
            jetX <= evilSpaceshipX + evilSpaceshipW &&
            jetY + jetHeight >= evilSpaceshipY &&
            jetY <= evilSpaceshipY + evilSpaceshipH) {
            console.log('jet Hited spaceship');
            jetLife - 5

        }


         



    })

    window.addEventListener('click', (e) => {
        var x = e.pageX - w / 2
        var y = e.pageY - h / 2

        function redBlast(params) {
            requestAnimationFrame(redBlast)
            c.fillStyle = 'black'
            c.fillRect(x - 2, y + h - 20, w + 5, h)
            c.fillStyle = 'red'
            c.fillRect(x, y - 20, w, h)
            y -= 5
            if (x + w >= evilSpaceshipX &&
                x <= evilSpaceshipX + evilSpaceshipW &&
                y + h >= evilSpaceshipY &&
                y <= evilSpaceshipY + evilSpaceshipH) {
                console.log('jet shooted airship');
                airshipHealth--


            }
        }
        redBlast()


    })

    function evilSpaceShip_spawner() {


        requestAnimationFrame(evilSpaceShip_spawner)
        c.clearRect(evilSpaceshipX, evilSpaceshipY, evilSpaceshipW, -evilSpaceshipSpeed)
        c.drawImage(evilSpaceship, evilSpaceshipX, evilSpaceshipY, evilSpaceshipW, evilSpaceshipH)
        c.fillText(airshipHealth, evilSpaceshipX, evilSpaceshipY + evilSpaceshipH, 100)

        evilSpaceshipY += evilSpaceshipSpeed

    }
    evilSpaceShip_spawner()
}, 50000);
















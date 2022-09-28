const music = new Sound({
    source:"MotivationalLizard.ogg",
    category: "master",
    stream: true
})

StarEmitter = require("./stars.js")
const starEmitter = new StarEmitter()

const lizard1 = new Image("lizard1.png", "https://i.imgur.com/Qu40t2b.png")
const lizard2 = new Image("lizard2.png", "https://i.imgur.com/meM0vZr.png")
const lizard3 = new Image("lizard3.png", "https://i.imgur.com/sOpXjf7.png")

let steps = 0

const gui = new Gui()

gui.registerDraw(() => {
    starEmitter.draw()

    if (steps.between(300, 625)) {
        y = 100
        h = Renderer.screen.getHeight() - y
        w = h * 1.19
        x = Renderer.screen.getWidth() - w
        lizard2.draw(x, y, w, h)
    }

    if (steps.between(625, 900)) {
        x = 50
        y = 0
        w = Renderer.screen.getWidth() - 100
        h = w * 0.625
        lizard1.draw(x, y, w, h)
    }

    if (steps.between(900, 1200)) {
        y = 50
        h = Renderer.screen.getHeight() - 100
        w = h * 1.385
        x = Renderer.screen.getWidth() - w
        lizard3.draw(x, y, w, h)
        type(7, "hey there friend", 100, Renderer.screen.getHeight() - 100, steps - 900)
    }

    if (steps.between(1200, 1500)) {
        y = 0
        h = Renderer.screen.getHeight() - y
        w = h * 1.19
        x = Renderer.screen.getWidth() - w
        lizard2.draw(x, y, w, h)
        type(3, "i know you've been having\nsome troubles lately", 100, Renderer.screen.getHeight() - 100, steps - 1200)
    }

    if (steps.between(1500, 1800)) {
        x = 50
        y = 0
        w = Renderer.screen.getWidth() - 100
        h = w * 0.625
        lizard1.draw(x, y, w, h)
        type(3, "be the person that i know you can be", 100, 50, steps - 1500)
    }

    if (steps.between(1800, 1850)) {
        y = 0
        h = Renderer.screen.getHeight() - y
        w = h * 1.19
        x = Renderer.screen.getWidth() - w
        lizard2.draw(x, y, w, h)
    }

    if (steps.between(1850, 2100)) {
        y = 50
        h = Renderer.screen.getHeight() - 100
        w = h * 1.385
        x = Renderer.screen.getWidth() - w
        lizard3.draw(x, y, w, h)
        type(3, "don't leave anything up\nto chance", 100, Renderer.screen.getHeight() - 100, steps - 1850)
    }

    if (steps.between(2100, 2200)) {
        x = 50
        y = 0
        w = Renderer.screen.getWidth() - 100
        h = w * 0.625
        lizard1.draw(x, y, w, h)
    }

    if (steps.between(2200, 2250)) {
        y = 0
        h = Renderer.screen.getHeight() - y
        w = h * 1.19
        x = Renderer.screen.getWidth() - w
        lizard2.draw(x, y, w, h)
    }

    if (steps.between(2250, 2500)) {
        y = 50
        h = Renderer.screen.getHeight() - 100
        w = h * 1.385
        x = Renderer.screen.getWidth() - w
        lizard3.draw(x, y, w, h)
        type(5, "i believe in you pal", 100, Renderer.screen.getHeight() - 100, steps - 2250)
    }

    if (steps.between(2500, 2800)) {
        y = 0
        h = Renderer.screen.getHeight() + 100
        w = h * 1.385
        x = Renderer.screen.getWidth() - w + 300
        lizard3.draw(x, y, w, h)
        type(5, "we ALL believe in you", 100, Renderer.screen.getHeight() - 100, steps - 2500)
    }

    if (steps.between(2800, 4700)) {
        y = 0
        h = Renderer.screen.getHeight() - y
        w = h * 1.19
        x = Renderer.screen.getWidth() - w
        lizard2.draw(x, y, w, h)
        type(7, "ur a winner kiddo.\ndon't you ever forget that", 100, Renderer.screen.getHeight() - 100, steps - 2800)
    }

    if (steps.between(3500, 4700)) {
        Renderer.drawRect(Renderer.color(0, 0, 0, MathLib.map(steps, 3500, 4700, 0, 255)), 0, 0, Renderer.screen.getWidth(), Renderer.screen.getHeight())
    }

    if (steps > 4700) {
        gui.close()
    }
})

function type(speed, text, x, y, steps) {
    shown = (steps - 25) / speed
    Renderer.translate(x, y)
    Renderer.scale(2)
    Renderer.drawStringWithShadow(text.substring(0, shown), 0, 0)
}

Number.prototype.between = function (min, max) {
    return this > min && this <= max
}

register("command", () => {
    gui.open()
    setTimeout(() => {
        music.play()
    }, 100)
}).setName("motivate")

register("step", () => {
    if (!gui.isOpen()) {
        steps = 0
        music.stop()
        starEmitter.clear()
    } else {
        steps++
        starEmitter.step()
    }
})
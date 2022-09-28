class StarEmitter {
    constructor() {
        this.alpha = 0
        this.stars = []
    }

    step() {
        if (this.alpha < 150) this.alpha++
        this.stars.push(new Star())
        this.stars.forEach((star, index, object) => {
            star.step()
            if (star.x < 0 || star.y < 0 || star.x > Renderer.screen.getWidth() || star.y > Renderer.screen.getHeight()) {
                object.splice(index, 1)
            }
        })
    }

    draw() {
        Renderer.drawRect(Renderer.color(50, 0, 75, this.alpha), 0, 0, Renderer.screen.getWidth(), Renderer.screen.getHeight())
        this.stars.forEach(star => star.draw())
    }

    clear() {
        this.alpha = 0
        this.stars = []
    }
}

class Star {
    constructor() {
        this.size = Math.random()
        this.fadeDelay = Math.random() * 100 + 50
        this.alpha = 0
        this.direction = Math.random() * Math.PI * 2
        this.x = Renderer.screen.getWidth() / 2
        this.y = Renderer.screen.getHeight() / 2
        this.speed = 0
    }

    step() {
        if (this.fadeDelay > 0) {
            this.fadeDelay--
        } else {
            if (this.alpha < 255) this.alpha += 10
        }

        this.speed += 0.01
        this.size += this.speed / 75
        this.x += this.speed * Math.cos(this.direction)
        this.y += this.speed * Math.sin(this.direction)
    }

    draw() {
        Renderer.drawCircle(Renderer.color(255, 255, 255, this.alpha), this.x, this.y, this.size / 2, 10)
        //Renderer.drawRect(Renderer.color(255, 255, 255, this.alpha), this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
    }
}

module.exports = StarEmitter
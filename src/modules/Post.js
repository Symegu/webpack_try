export default class Post {
    constructor(title, img) {
        this.title = title
        this.img = img
        this.date = new Date()
    }

    toString() {
        return JSON.stringify({
            title: this.title,
            img: this.img,
            date: this.date.toJSON()
        }, null, 2)
    }

    get upperCase() {
        return this.title.toUpperCase()
    }
}
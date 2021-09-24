export default class Scanner {
    constructor(template) {
        this.template = template;
        this.position = 0
        this.tail = this.template
    }

    scan(tag) {
        if ( (!this.eos()) && this.tail.indexOf(tag)===0){
            this.position+= tag.length;
            this.tail = this.template.substring(this.position)
        }
    }

    scanUntil(tag) {
        const start = this.position
        while ( (!this.eos()) && this.tail.indexOf(tag)!==0){
            this.position++;
            this.tail = this.template.substring(this.position)
        }
        return this.template.substring(start, this.position)
    }

    eos() {
        return this.position >= this.template.length
    }
}
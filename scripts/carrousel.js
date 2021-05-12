export default class Carrousel {
    constructor(proyectos,cardWidth,gapWidth){
        this.posicion = 0,
        this.cardWidth = cardWidth,
        this.gapWidth = gapWidth,
        this.width = this.cardWidth+(this.cardWidth+this.gapWidth)*(proyectos.length-1)
    }

    adelantarUnCard(){
        this.posicion = this.posicion + 70 >= this.width ? this.posicion : this.posicion + this.cardWidth + this.gapWidth
    }

    atrasarUnCard(){
        this.posicion = this.posicion == 0 ? 0 : this.posicion - this.cardWidth - this.gapWidth
    }

}
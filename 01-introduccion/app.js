class MiParrafo extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback(){
        this.innerHTML = '<p> Mi parrafo creado con web component</p>'
    }
}

class MiParrafo2 extends HTMLElement {
    constructor() {
        super();

    }

    connectedCallback(){
        this.innerHTML = '<p> Este es el segundo parrafo</p>'
        
    }
}

window.customElements.define('mi-parrafo', MiParrafo)
window.customElements.define('mi-parrafo2', MiParrafo2)
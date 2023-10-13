class datoBuscado extends HTMLElement {
    constructor() {
        super();
        this.titulo = "titulo";
        this.cache = null;
        this.link = '#';
    }

    static get observedAttributes() {
        return ["titulo", "cache", "link"];
    }

    attributeChangedCallback(nameAtr, oldValue, newValue) {
        switch (nameAtr) {
            case "titulo":
                this.titulo = newValue;
                break;
            case "cache":
                this.cache = newValue;
                break;
            case "link":
                this.link = newValue;
                break;
        }
    }

    connectedCallback() {
        this.innerHTML = `
          <article class="header__srcContainer hide" data-search="${this.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}">
            <a href="${this.link}" class="header__srcbx">
                <i class="fa-solid fa-check-to-slot"></i> &nbsp<span class="header__srcbx--title">${this.titulo}</span>
            </a>
          </article>
      `;
    }
}

window.customElements.define("dato-buscado", datoBuscado);
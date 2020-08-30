class LogoWeb extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        `
    }
}

customElements.define('caption-title', CaptionTitle);
class CaptionTitle extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="box">
        <h1 class="caption-title">Need an Idea?</h1>
        <h4 class="caption">Get a random meal by click the button below</h4>
        </div>
        `
    }
}

customElements.define('caption-title', CaptionTitle);
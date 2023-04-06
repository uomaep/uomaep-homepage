class CardItem extends HTMLElement {
  connectedCallback() {
    const imgSrc = this.getAttribute("src");
    const title = this.getAttribute("title");
    const sub = this.getAttribute("sub");
    const href = this.getAttribute("href");

    this.innerHTML = `
    <a href="${href ? href : "#"}">
    <div class="w-full h-46 rounded-lg overflow-hidden grid place-items-center">
      <img src="${imgSrc}"/>
    </div>
    <div class="text-center font-bold text-2xl mt-3">${title}</div>
    <div class="text-center font-normal text-gray-500">${sub}</div>
    </a>
    `;
  }
}

customElements.define("custom-item", CardItem);

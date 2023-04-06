class NavBar extends HTMLElement {
  connectedCallback() {
    let title = this.getAttribute("title");
    this.innerHTML = `
    <div class="w-screen fixed">
      <div
          class="max-w-screen-md h-14 mx-auto p-2 backdrop-blur-sm flex justify-between"
        >
          <div class="mr-5">
            <a href="/">
              <span class="flex p-2.5">
                <svg
                  width="20"
                  height="20"
                  class="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
                  viewBox="0 0 40 40"
                  fill="currentColor"
                >
                  <g transform="matrix(1.07541,0,0,1.1001,-1.05651,-0.978215)">
                    <path
                      fill="currentColor"
                      d="M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"
                    ></path>
                  </g>
                  <path
                    d="M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"
                  ></path>
                  <g transform="matrix(1.00722,0,0,0.981856,-0.205441,0.281328)">
                    <path
                      d="M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"
                    ></path>
                  </g>
                  <path
                    d="M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"
                  ></path>
                  <path
                    d="M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"
                  ></path>
                </svg>
                <p>${title}</p>
              </span>
            </a>
          </div>
          <div class="flex">
            <div id="modBtn"
              class="w-10 h-10 rounded-lg grid place-items-center mr-2.5"
              style="background-color: rgb(252 210 141);"
            >
              <button onclick="modHandler()">
                <img id="modImg" class="w-4 h-4" src="/image/sun.svg" />
              </button>
            </div>
            <div
              class="w-10 h-10 border border-solid border-gray-600 rounded-lg grid place-items-center mr-2.5"
            >
              <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
                <svg
                  viewBox="0 0 24 24"
                  focusable="false"
                  aria-hidden="true"
                  class="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"
                  ></path>
                </svg>
              </button>
              <div
                id="dropdown"
                class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-40 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="/"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >About</a
                    >
                  </li>
                  <li>
                    <a
                      href="/page/works.html"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Works</a
                    >
                  </li>
                  <li>
                    <a
                      href="/page/uses.html"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Uses</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("custom-navbar", NavBar);

function modHandler() {
  const body = document.getElementById("body");
  const el = document.getElementById("body");
  const intro = document.getElementById("intro");
  const modBtn = document.getElementById("modBtn");
  const modImg = document.getElementById("modImg");
  el.classList.toggle("dark");

  if (el.classList.contains("dark")) {
    body.style.backgroundColor = "rgb(32 32 35)";
    body.style.color = "white";
    intro.style.backgroundColor = "rgb(49 49 52)";
    modBtn.style.backgroundColor = "rgb(252 210 141)";
    modImg.src = "/image/sun.svg";
  } else {
    body.style.backgroundColor = "#f0e7db";
    body.style.color = "#1a202c";
    intro.style.backgroundColor = "#f5f0e8";
    modBtn.style.backgroundColor = "#805ad5";
    modImg.src = "/image/moon.svg";
  }
}

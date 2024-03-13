import loadAboutPage from "./pages/about/about.js";
import { loadHomePage } from "./pages/index.js";

function loadSectionData(e) {
  e.preventDefault()

  switch (window.location.hash.slice(1)) {
    case "":
      loadHomePage();
      break;
    case 'about':
      loadAboutPage()
      break;
  }
}

window.addEventListener('hashchange', loadSectionData)
window.addEventListener('load', loadSectionData)
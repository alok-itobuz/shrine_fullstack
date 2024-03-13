import loadAboutPage from "./pages/about/about.js";
import { loadHomePage } from "./pages/index.js";
import state from './states.js'

// fetch and update the state

function loadSectionData(e) {
  e.preventDefault()

  switch (window.location.hash.slice(1)) {
    case "":
      loadHomePage(state);
      break;
    case 'about':
      loadAboutPage()
      break;
  }
}

window.addEventListener('hashchange', loadSectionData)
window.addEventListener('load', loadSectionData)
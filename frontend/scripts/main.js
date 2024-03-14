import { API_URL } from "./constants.js";
import loadAboutPage from "./pages/about/about.js";
import loadHomePage from "./pages/home/home.js";
import state, { fetchAndStore } from './states.js'

// fetch and update the state
(async function () {
  await fetchAndStore(`${API_URL}/members`, 'members')
  await fetchAndStore(`${API_URL}/articles`, 'articles')
  await fetchAndStore(`${API_URL}/events`, 'events')
  loadSectionData()
})()


function loadSectionData(e) {
  e?.preventDefault()

  switch (window.location.hash.slice(1)) {
    case "":
      loadHomePage(state);
      break;
    case 'about':
      loadAboutPage()
      break;
  }
}

loadSectionData()
window.addEventListener('hashchange', loadSectionData);
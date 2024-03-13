import loadAboutPage from "./pages/about/about.js";
import { loadHomePage } from "./pages/index.js";

const currentLocation = window.location.pathname.split('/');

switch (currentLocation.at(-1)) {
  case "":
  case "index.html":
    loadHomePage();
    break;
  case 'about.html':
    loadAboutPage()
    break;

}

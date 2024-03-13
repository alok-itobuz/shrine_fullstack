import {
  heroSection,
  articlesSection,
  eventsSection,
  growSection,
  introductionSection,
  membersSection,
  potentialSection,
  quoteSection,
  satisfactionSection,
} from "./sections/index.js";

export default () => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.insertAdjacentHTML("beforeend", heroSection());
  main.insertAdjacentHTML("beforeend", introductionSection());
  main.insertAdjacentHTML("beforeend", quoteSection());
  main.insertAdjacentHTML("beforeend", potentialSection());
  main.insertAdjacentHTML("beforeend", satisfactionSection());
  main.insertAdjacentHTML("beforeend", growSection());
  main.insertAdjacentHTML("beforeend", membersSection());
  main.insertAdjacentHTML("beforeend", eventsSection());
  main.insertAdjacentHTML("beforeend", articlesSection());
};

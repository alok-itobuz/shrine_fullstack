import { articlesSectionData, eventsSectionData, growSectionData, introductionSectionData, membersSectionData, potentialSectionData, quoteSectionData, satisfactionSectionData } from "../../sectionsData.js";
import { events } from "../../states.js";
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

const carouselHandler = (currentCarouselItem, wrapper, translationFactor) => {
  wrapper.style.transform = `translateX(-${translationFactor * currentCarouselItem}px)`
}

export default () => {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.insertAdjacentHTML("beforeend", heroSection());
  main.insertAdjacentHTML("beforeend", introductionSection(introductionSectionData));
  main.insertAdjacentHTML("beforeend", quoteSection(quoteSectionData));
  main.insertAdjacentHTML("beforeend", potentialSection(potentialSectionData));
  main.insertAdjacentHTML("beforeend", satisfactionSection(satisfactionSectionData));
  main.insertAdjacentHTML("beforeend", growSection(growSectionData));
  main.insertAdjacentHTML("beforeend", membersSection(membersSectionData));
  main.insertAdjacentHTML("beforeend", eventsSection(eventsSectionData));
  main.insertAdjacentHTML("beforeend", articlesSection(articlesSectionData));




  const btnEventLeft = document.querySelector('.btn-event-carousel.btn-left')
  const btnEventRight = document.querySelector('.btn-event-carousel.btn-right')
  const eventCarouselWrapper = document.querySelector('#events .carousel-wrapper')
  const eventCarouselCardWrapper = document.querySelector('#events .carousel-card-wrapper')


  let currentEventCarousel = 0;
  btnEventLeft.addEventListener('click', () => {
    if (currentEventCarousel === 0) return;
    currentEventCarousel--;
    carouselHandler(currentEventCarousel, eventCarouselWrapper, eventCarouselCardWrapper.getBoundingClientRect().width)
  })
  btnEventRight.addEventListener('click', () => {
    console.log(currentEventCarousel, events.length)
    if (currentEventCarousel === events.length - 1) return;
    currentEventCarousel++;
    carouselHandler(currentEventCarousel, eventCarouselWrapper, eventCarouselCardWrapper.getBoundingClientRect().width)
  })
};

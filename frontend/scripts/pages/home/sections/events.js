import { events } from "../../../states.js";
import { sectionHeading } from "../../helpers.js";

const eventCardsGenerator = ({ image, date: { startDate, endDate }, location, duration: { startTime, endTime }, name, description }) => `
    <div class="carousel-card-wrapper m-0 p-2 px-sm-5 col-12 col-sm-8">
        <div class="carousel-card h-100 row m-0 rounded-2 overflow-hidden ">
            <div class="image-container h-100 col-4 overflow-hidden p-0">
                <img src=${image} alt=${name} class="h-100 w-100 object-fit-cover object-center d-flex align-items-center justify-content-center ">
            </div>
            <div class="text-container p-2 ps-md-4 col-8 d-flex flex-column align-items-start gap-2 justify-content-around">
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/calendar.svg" alt="calender icon" class="h-100 w-100 object-fit-contain object-center  d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">${startDate}-${endDate}</span>
                </div>
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/location.svg" alt="location icon" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">${location}</span>
                </div>
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/clock.svg" alt="clock icon" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">${startTime}-${endTime}</span>
                </div>
                <h3 class="fw-semibold fs-large m-0 font-roboto">${name}</h3>
                <p class="m-0 fs-small">${description}</p>

                <button class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer  btn-square mt-sm-2">join now</button>
            </div>
        </div>
    </div>
`



export default (sectionData) => {
    const { headingPrimary, descriptionPrimary } = sectionData

    return `
    <section id="events" class="container py-5">
        ${sectionHeading(headingPrimary, descriptionPrimary)}

        <div class="carousel-container w-100 overflow-x-scroll   mt-4 mt-lg-5">
            <div class="row m-0 p-0 carousel-wrapper flex-nowrap">
                ${events.map(eventCardsGenerator).join("")}
            </div>
        </div>

        <div class="carousel-buttons-container mt-3 mt-lg-4 d-flex align-items-center justify-content-center gap-2 gap-lg-4">
            <button class="btn-event-carousel btn-left d-flex align-items-center justify-content-center rounded-circle border-0">&lt;</button>
            <button class="btn-event-carousel btn-right d-flex align-items-center justify-content-center rounded-circle border-0">&gt;</button>
        </div>
        </section>
    `;
};

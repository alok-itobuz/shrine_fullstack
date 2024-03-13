import { sectionHeading } from "../../helpers.js";

const eventCardsGenerator = () => `
    <div class="carousel-card-wrapper m-0 p-2 col-12 col-sm-8">
        <div class="carousel-card h-100 row m-0 rounded-2 overflow-hidden ">
            <div class="image-container h-100 col-4 overflow-hidden p-0">
                <img src="./images/events/church_father.svg" alt="" class="h-100 w-100 object-fit-cover object-center d-flex align-items-center justify-content-center ">
            </div>
            <div class="text-container p-2 ps-md-4 col-8 d-flex flex-column align-items-start gap-2">
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/calendar.svg" alt=""
                            class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">24.12.2023-28.12.2023</span>
                </div>
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/location.svg" alt=""
                            class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">Russian Federation St. Peter’s Church</span>
                </div>
                <div class="calender icon-row d-flex align-items-center justify-content-start gap-2">
                    <span class="overflow-hidden">
                        <img src="./images/events/clock.svg" alt=""
                            class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center ">
                    </span>
                    <span class="fs-small">4:38-8:24</span>
                </div>
                <h3 class="fw-semibold fs-large m-0 font-roboto">Mindfulness meditation</h3>
                <p class="m-0 fs-small">A long established fact that a reader will be distracted by the
                    readable
                    content of...</p>

                <button
                    class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer btn-square mt-sm-2">join
                    now</button>
            </div>
        </div>
    </div>
`
export default () => {

    const eventsSectionData = {
        headingPrimary: 'See our all Events',
        descriptionPrimary: "A long established fact that a reader will be distracted by the readable content of a page when looking."
    }

    const members = [{
        image: "./images/events/church_father.svg",
        date: {
            startDate: "24.12.2023",
            endDate: "28.12.2023"
        },
        location: "Russian Federation St. Peter’s Church",
        duration: {
            startTime: "4:38",
            endTime: "8:24"
        },
        name: "Mindfulness meditation",
        description: "A long established fact that a reader will be distracted by the readable content of..."
    },
    {
        image: "./images/events/bibel.svg",
        date: {
            startDate: "24.12.2023",
            endDate: "28.12.2023"
        },
        location: "the positive aura seminar",
        duration: {
            startTime: "4:38",
            endTime: "8:24"
        },
        name: "Mindfulness meditation",
        description: "A long established fact that a reader will be distracted by the readable content of..."
    },
    ]

    const { headingPrimary, descriptionPrimary } = eventsSectionData

    return `
    <section id="events" class="container py-5">
        ${sectionHeading(headingPrimary, descriptionPrimary)}

        <div class="carousel-container w-100 overflow-x-scroll   mt-4 mt-lg-5">
            <div class="row m-0 p-0 carousel-wrapper flex-nowrap">
                ${members.map(eventCardsGenerator).join("")}
            </div>
        </div>

        <div
            class="carousel-buttons-container mt-3 mt-lg-4 d-flex align-items-center justify-content-center gap-2 gap-lg-4">
            <button
                class="btn-event-carousel btn-left d-flex align-items-center justify-content-center rounded-circle border-0">&lt;</button>
            <button
                class="btn-event-carousel btn-right d-flex align-items-center justify-content-center rounded-circle border-0">&gt;</button>
        </div>
        </section>
    `;
};

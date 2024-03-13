import { satisfactionSectionData } from "../../../sectionsData.js";
import { sectionHeading } from "../../helpers.js";

const satisfactionCard = ({ url, alt, title, description }) => `
    <div class="satisfaction-card-wrapper shrine-card-wrapper col-6 col-sm-4 col-md-3 p-2">
        <div class="satisfaction-card h-100 w-100 p-2 p-md-3 shrine-card d-flex flex-column gap-3 justify-content-center align-items-center">
            <div class="image-container h-25">
                <img src=${url} alt=${alt} class="h-100 w-100 object-fit-cover object-center">
            </div>
            <h3 class="fs-large m-0 text-capitalize font-roboto fw-semibold">${title}</h3>
            <span class="fs-small text-center">${description}</span>
            <button class="fs-small text-uppercase btn-square d-flex align-items-center justify-content-center border-0 bg-transparent gap-2">
                <span class="text-content">read more</span> 
                <span class="btm-arrow rounded-circle d-flex align-items-center justify-content-center bg-danger text-white h-100">&gt;</span>
            </button>
        </div>
    </div>
`

export default () => {

    const { headingPrimary, descriptionPrimary, cards } = satisfactionSectionData

    return `
    <section id="satisfaction" class="container py-5">
        ${sectionHeading(headingPrimary, descriptionPrimary)}

        <div class="slider-container position-relative mt-4 ">
            <div class="carousel-wrapper row flex-nowrap overflow-x-scroll">
                ${cards.map(satisfactionCard).join("")}
            </div>
        </div>
    </section>
    `;
};

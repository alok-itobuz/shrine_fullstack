import { introductionSectionData } from "../../../sectionsData.js";
import { sectionHeading } from "../../helpers.js";

const introCards = ({ heading, paragraph, url, alt }) => {
    return `
    <div class="introduction-card d-flex gap-2">
        <div class="image-container rounded-circle  btn-circle overflow-hidden">
          <img src=${url} alt=${alt ?? "alternate alt"
        } class="rounded-3 object-fit-cover h-100 w-100 object-center"></div>
        <div class="text-container d-flex flex-column gap-2">
            <h3 class="m-0 p-0 roboto-serif fs-large font-roboto ">
                ${heading}
            </h3>
            <span class="fs-small">
                ${paragraph}
            </span>
        </div>
    </div>
    `;
};

const introImage = ({ url, alt }) => `
    <div class="image rounded-3 overflow-hidden">
        <img src=${url} alt=${alt ?? "alternate alt"
    } class="rounded-3 object-fit-cover h-100 w-100 object-center">
    </div>
`;

const circularImageJoined = ({ url, alt }) => `
    <div class="image-div h-50 position-relative ">
        <div class="image-container position-absolute start-50 top-50 rounded-circle translate-middle overflow-hidden">
        <img src=${url} alt=${alt ?? "alternate alt"
    } class="rounded-3 object-fit-cover h-100 w-100 object-center">
        </div>
    </div>
`;

export default () => {
    const {
        headingPrimary,
        descriptionPrimary,
        mainImage,
        cards,
        circularImages,
    } = introductionSectionData;

    return `
    <section id="introduction" class="section-text-image container py-5">
        <div class="row m-0 p-0 h-100 w-100 justify-content-between ">
            <div class="image-container small-div col-12 col-sm-6 mx-auto mx-sm-0 p-2 d-flex justify-content-between ">
                ${mainImage.map(introImage).join(" ")}
            </div>
            <div class="text-container large-div col-12 col-sm-6 mx-auto mx-sm-0 p-2  ps-md-4 d-flex flex-column justify-content-between gap-4">
                ${sectionHeading(headingPrimary)}
                <span class="fs-small">${descriptionPrimary}</span>
                ${cards.map(introCards).join(" ")}
            </div>
        </div>
        <div class="row m-0 p-0 rounded-2 mt-3 py-4 px-2 px-md-5 justify-content-around">
            <div class="col-12 col-md-3 m-0 d-flex align-items-center justify-content-center justify-content-md-start  mb-4 my-md-0 ">
                <div class="linear-image-container d-flex align-items-center justify-content-center justify-content-md-start  gap-2">
                    ${circularImages.map(circularImageJoined).join(" ")}
                </div>
            </div>
            <div class="col-12 col-md-9 d-flex align-items-center  justify-content-around m-0 p-0  text-btn-container gap-2">
                <h2 class="m-0 p-0 fs-large flex-grow-1 font-roboto">Building Bridges of Faith, Reaching <br class="d-none d-sm-block "> Hearts with Love.</h2>
                <button class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer btn-square">JOIN US</button>
            </div>
        </div>
    </section>
    `;
};

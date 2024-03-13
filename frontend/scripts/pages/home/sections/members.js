import { members } from "../../../states.js";
import { sectionHeading } from "../../helpers.js";

const membersCard = ({ name, description, image, socialLinks: { instagram, google, youtube } }) => `
    <div class="card-wrapper col-12 col-sm-6 col-lg-3 p-2 p-lg-1">
        <div class="card h-100 w-100 d-flex flex-row flex-lg-column align-items-lg-center border-0 p-2 gap-2">
            <div class="image-container rectangle-circle h-100 overflow-hidden">
                <img src=${image} alt=${name} class="h-100 w-100 object-fit-cover object-center">
            </div>
            <div class="text-container d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-center justify-content-lg-start gap-2 mt-lg-2">
                <div class="round-icon-container rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                    <img src="./images/members/share_icon.svg" alt="" class="h-50 w-50 object-fit-contain object-center">
                </div>
                <span class="divider d-none d-lg-block h-75"></span>
                <div class="text d-flex flex-column justify-content-between gap-2">
                    <h4 class="m-0 fs-large font-roboto">${name}</h4>
                    <span class="fs-small">${description}</span>
                </div>
            </div>
            <div class="social-icons-container d-flex flex-column justify-content-center justify-content-center flex-lg-row gap-2">
                <a class="icon overflow-hidden" href=${instagram}>
                    <img src="./images/members/instagram.svg" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center " alt="instagram">
                </a>
                <a class="icon overflow-hidden" href=${google}>
                    <img src="./images/members/google.svg" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center " alt="google">
                </a>
                <a class="icon overflow-hidden" href=${youtube}>
                    <img src="./images/members/youtube.svg" class="h-100 w-100 object-fit-contain object-center d-flex align-items-center justify-content-center " alt="youtube">
                </a>
            </div>
        </div>
    </div>
`

export default (sectionData) => {
    const { headingPrimary, descriptionPrimary } = sectionData

    return `
    <section id="members" class="container py-5 bg-white position-relative">
        <img src="./images/members/poster0.svg" alt="top poster" class="position-absolute start-50 translate-middle-x">
        ${sectionHeading(headingPrimary, descriptionPrimary)}
        <div class="row m-0 p-0 mt-4 mt-lg-5 cards-container justify-content-center">
            ${members.slice(0, 4).map(membersCard).join("")}
        </div>
        <div class="horizontal-row d-flex align-items-center  gap-3 gap-md-5 ">
            <span class="flex-grow-1"></span>
            <a href="#members" class="m-0 p-0 text-decoration-none rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer btn-square mt-sm-2">ALL TEAM MEMBERS</a>
            <span class="flex-grow-1"></span>
        </div>
        <img src="./images/members/poster1.svg" alt="top poster" class="position-absolute start-50 translate-middle-x">
    </section>
    `;
};

export const sectionHeading = (heading, description = null) => {
    heading = heading.trim();
    description && (description = description.trim());

    if (heading.length > 17 && heading.split(" ").length > 2) {
        let c = 0, curr = Math.trunc(heading.length / 2)

        while (curr - c > 0 && curr + c < heading.length) {
            if (heading[curr + c] == ' ') {
                heading = heading.slice(0, curr + c) + "<br />" + heading.slice(curr + c + 1);
                break;
            } else if (heading[curr - c] == ' ') {
                heading = heading.slice(0, curr - c) + "<br />" + heading.slice(curr - c + 1);
                break;
            }
            c++
        }
    }

    return `
    ${!!description
            ? `
    <div class="heading-container d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 gap-sm-5">
        <h2 class="section-heading fs-xl font-roboto flex-sm-grow-1 m-0">
            ${heading}
        </h2>
        <span class="fs-small">
            ${description}
        </span>
    </div>`
            : `
        <h2 class="section-heading fs-xl font-roboto">${heading}</h2>
    `
        }
    `;
};

export const carouselHandler = (currentCarouselItem, wrapper, translationFactor) => {
    wrapper.style.transform = `translateX(-${translationFactor * currentCarouselItem}px)`
}
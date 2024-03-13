export default () => {
  return `
    <section id="articles" class="container py-5">
        <div
            class="heading-container d-flex flex-column flex-sm-row align-items-sm-center justify-content-between gap-3 gap-sm-5">
            <h2 class="section-heading fs-xl font-roboto flex-sm-grow-1 m-0 text-capitalize">
                Our latest <br> articles
            </h2>
            <span class="fs-small">A long established fact that a reader will be distracted by the readable content
                of a
                page when looking.A long
                established fact that.A long.</span>
        </div>

        <div class="row m-0 p-0 mt-3 article-contents-container">
            <div class="col-12 col-sm-7 position-relative p-3 rounded-2 overflow-hidden ">
                <img src="./images/articles/church_inside.svg" alt=""
                    class="article-main-bg h-100 w-100 position-absolute object-fit-cover start-50 top-50 translate-middle">
                <div
                    class="articles-card h-100 d-flex flex-column gap-3 align-items-start justify-content-center bg-white p-3 rounded-2">
                    <span class="fs-small fw-semibold text-uppercase">FEATURED</span>
                    <h3 class="font-roboto fw-semibold fs-large">Growing Together <br> in God’s Word</h3>
                    <p class="m-0 fs-small">A long established fact that a reader will be distracted by the readable
                        content of...</p>
                    <span class="fs-small">6 Mar,2023</span>
                </div>
            </div>
            <div class="col-12 col-sm-5 p-0 py-2 p-sm-0 ps-sm-4">
                <form action="" class="m-0 rounded-2 d-flex flex-column gap-3 p-2 ps-md-3 border border-1 ">
                    <h3 class="m-0 fs-large font-roboto">Subscribe to church</h3>
                    <p class="m-0 fs-small">A long established fact that a reader will be distracted by the
                        readable.A
                        long.
                    </p>
                    <input type="text" placeholder="Enter your email" class="fs-small p-2 rounded-2 border-1 ">
                    <button
                        class="m-0 p-0 rounded-2 text-uppercase fs-small px-3 py-2 border-0 text-white hover-cuursor-pointer btn-square mt-sm-2">Subscribe</button>
                    <p class="m-0 d-flex gap-2 ">
                        <input type="checkbox">
                        <span class="fs-small">I agree that my sub minted data is being collected and stored</span>
                    </p>
                </form>
            </div>
        </div>

        <div class="carousel-container w-100 m-0 mt-3 overflow-x-hidden ">
            <div class="row m-0 p-0 carousel-wrapper flex-nowrap">
                <div class="crousel-card-wrapper m-0 p-2 col-12 col-sm-6 col-lg-4">
                    <div
                        class="carousel-card h-100 w-100 d-flex flex-column rounded-2 overflow-hidden mx-auto mx-sm-0">
                        <div class="image-container w-100 flex-grow-1 overflow-hidden">
                            <img src="./images/articles/church_dark.png" alt=""
                                class="h-100 w-100 object-fit-cover object-center">
                        </div>
                        <div
                            class="text-container px-3 py-2 d-flex flex-column justify-content-center gap-2 flex-grow-1">
                            <h3 class="fs-large m-0 fw-semibold font-roboto">Baptism Sunday of church</h3>
                            <p class="m-0 fs-small">Sir Gerry Serrano A long established fact that a reader will be
                                distracted by the readable content of...</p>
                            <div class="author-container d-flex align-items-center justify-content-start gap-1">
                                <div
                                    class="image rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                                    <img src="./images/articles/author_dark.png" alt=""
                                        class="h-100 w-100 object-fit-cover object-center d-flex align-items-center justify-content-center">
                                </div>
                                <span class="hr"></span>
                                <span class="fs-small">2 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="crousel-card-wrapper m-0 p-2 col-12 col-sm-6 col-lg-4">
                    <div
                        class="carousel-card h-100 w-100 d-flex flex-column rounded-2 overflow-hidden mx-auto mx-sm-0">
                        <div class="image-container w-100 flex-grow-1 overflow-hidden">
                            <img src="./images/articles/church_red.png" alt=""
                                class="h-100 w-100 object-fit-cover object-center">
                        </div>
                        <div
                            class="text-container px-3 py-2 d-flex flex-column justify-content-center gap-2 flex-grow-1">
                            <h3 class="fs-large m-0 fw-semibold font-roboto">Baptism Sunday of church</h3>
                            <p class="m-0 fs-small">Sir Gerry Serrano A long established fact that a reader will be
                                distracted by the readable content of...</p>
                            <div class="author-container d-flex align-items-center justify-content-start gap-1">
                                <div
                                    class="image rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                                    <img src="./images/articles/author_red.png" alt=""
                                        class="h-100 w-100 object-fit-cover object-center d-flex align-items-center justify-content-center">
                                </div>
                                <span class="hr"></span>
                                <span class="fs-small">2 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="crousel-card-wrapper m-0 p-2 col-12 col-sm-6 col-lg-4">
                    <div
                        class="carousel-card h-100 w-100 d-flex flex-column rounded-2 overflow-hidden mx-auto mx-sm-0">
                        <div class="image-container w-100 flex-grow-1 overflow-hidden">
                            <img src="./images/articles/church_brown.png" alt=""
                                class="h-100 w-100 object-fit-cover object-center">
                        </div>
                        <div
                            class="text-container px-3 py-2 d-flex flex-column justify-content-center gap-2 flex-grow-1">
                            <h3 class="fs-large m-0 fw-semibold font-roboto">Baptism Sunday of church</h3>
                            <p class="m-0 fs-small">Sir Gerry Serrano A long established fact that a reader will be
                                distracted by the readable content of...</p>
                            <div class="author-container d-flex align-items-center justify-content-start gap-1">
                                <div
                                    class="image rounded-circle overflow-hidden d-flex align-items-center justify-content-center">
                                    <img src="./images/articles/author_brown.png" alt=""
                                        class="h-100 w-100 object-fit-cover object-center d-flex align-items-center justify-content-center">
                                </div>
                                <span class="hr"></span>
                                <span class="fs-small">2 min read</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div
            class="carousel-buttons-container mt-3  d-flex align-items-center justify-content-center justify-content-sm-end gap-2 ">
            <button
                class="btn-current-page d-flex align-items-center justify-content-around rounded-2 border-0 fs-small ">1</button>
            <button
                class="btn-next-page d-flex align-items-center justify-content-around rounded-2 border-0 fs-small ">2</button>
            <button
                class="btn-arrow d-flex align-items-center justify-content-around rounded-2 border-0 fs-small ">&gt;</button>
        </div>

    </section>
    `;
};

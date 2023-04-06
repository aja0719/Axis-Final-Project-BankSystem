import { Footer } from "../Footer";

const Index = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../img/img4.jpg"
              class="d-block w-100"
              height="400px"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../img/img3.jpg"
              class="d-block w-100"
              height="400px"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../img/img1.jpg"
              class="d-block w-100"
              height="400px"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container">
        <p className="fs-3 text-center">About Us</p>

        <div class="row p-4">
          <div class="col-md-6">
            <img src="../img/img2.jpg" width="100%" height="90%" />
          </div>
          <div className="col-md-6 p-5">
            <p>
            EasyBank Limited, formerly known as UTI Bank, 
            is an Indian banking and financial services company headquartered 
            in Mumbai, Maharashtra. It sells financial services to large and mid-size companies, 
            SMEs and retail businesses. 
            As of 30 June 2016, 30.81% shares are owned by the promoters and the promoter group.
            </p>
          </div>
        </div>

        <div className="text-center mt-2">
          {/* <Link to="" className="btn btn-danger btn-sm">
            view all
          </Link> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export { Index };

"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import Carousel from "react-bootstrap/Carousel";
function MeinApp() {
  const swiperTabs = useSwiper();
  useEffect(() => {
    // Function to handle messages from the iframe
    const handleMessage = (event) => {
      if (event.origin === "https://play.google.com") {
        // Handle message from iframe
        console.log("Message from iframe:", event.data);
      }
    };

    // Event listener for messages from iframe
    window.addEventListener("message", handleMessage);

    // Cleanup function
    return () => {
      window.removeEventListener("message", handleMessage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="section-top-video-bg">
        <div className="container-fluid video-text-upper-body">
          <div className="row">
            <div className="w-100 background-video ">
              <iframe
                loading="lazy"
                style={{ width: "100%" }}
                id="ytplayer"
                type="text/html"
                width="100%"
                height="450px"
                src="https://www.youtube.com/embed/_-TTQBUPz6w?&autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=_-TTQBUPz6w"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="loaded"
              ></iframe>
            </div>

            <div className="container video-text">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-5">
                  <div className="text-for-video-bg">
                    <p>
                      <span>Luxury Hotels</span>, a renowned global brand
                      founded in England <span>17 years ago</span>, is currently
                      present in <span>89 countries</span>. We provide{" "}
                      <span>Luxury Hotels</span> for affluent travellers through
                      our online platform and in print and digital formats. Each
                      Edition is accessible for free download on 5 different
                      platforms and attracts 4-5 million online readers
                      annually.
                    </p>
                    <p>
                      Through our Printed Edition Rotation Program, your hotel
                      will be featured as one of the top{" "}
                      <span>Luxury Hotels</span> and will ensure a continuous
                      influx of bookings and a consistent occupancy rate of{" "}
                      <span>800,000 to 1 million tourists</span> throughout the
                      year, all without any commission fees.
                    </p>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="text-center video-text-logo">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="200.000000pt"
                      height="auto"
                      viewBox="0 0 1090.000000 136.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)"
                        fill="#B6191F"
                        stroke="none"
                      >
                        <path d="M0 680 l0 -680 305 0 305 0 0 85 0 85 -220 0 -220 0 0 595 0 595 -850 -85 0 0 -680z" />
                        <path
                          d="M650 883 c0 -526 3 -555 61 -662 56 -105 133 -170 241 -202 99 -30
248 -24 330 13 106 49 179 135 221 261 20 59 22 85 25 565 l3 502 -85 0 -85 0
          -3 -492 c-3 -444 -5 -498 -21 -539 -26 -67 -79 -124 -135 -146 -55 -21 -148
          -23 -206 -4 -49 17 -111 73 -137 124 -44 85 -49 147 -49 615 l0 442 -80 0 -80
          0 0 -477z"
                        />
                        <path
                          d="M1610 1355 c0 -3 83 -154 185 -335 102 -181 185 -335 185 -341 0 -6
          -82 -157 -182 -337 -101 -179 -185 -330 -186 -334 -2 -5 40 -7 94 -6 l99 3
          135 242 c74 133 137 244 140 246 3 3 68 -107 144 -244 l140 -249 93 0 c51 0
          93 4 93 9 0 5 -83 158 -185 340 l-185 330 185 330 c102 181 185 334 185 340 0
          7 -33 11 -92 11 l-93 0 -139 -251 c-76 -138 -142 -247 -146 -242 -5 4 -69 116
          -143 248 l-134 240 -97 3 c-53 1 -96 0 -96 -3z"
                        />
                        <path
                          d="M2640 882 c0 -526 1 -539 62 -660 40 -81 127 -162 205 -193 50 -20
          76 -24 183 -24 117 0 129 2 187 29 76 35 154 113 189 190 50 110 54 154 54
          664 l0 472 -85 0 -84 0 -3 -497 c-3 -496 -3 -498 -26 -548 -48 -105 -117 -148
          -233 -149 -135 0 -220 64 -262 199 -21 68 -22 83 -22 533 l0 462 -82 0 -83 0
          0 -478z"
                        />
                        <path
                          d="M3660 680 l0 -680 85 0 85 0 0 230 0 230 68 0 c37 0 76 3 88 6 18 5
          41 -26 170 -222 82 -125 152 -232 156 -237 6 -10 95 31 139 64 21 16 20 18
          -131 243 l-151 228 51 54 c205 217 146 580 -116 712 -83 41 -144 52 -304 52
          l-140 0 0 -680z m357 477 c134 -68 191 -229 129 -362 -47 -101 -158 -170 -263
          -163 l-48 3 -3 272 c-3 308 -10 285 84 278 29 -2 73 -14 101 -28z"
                        />
                        <path
                          d="M4360 1357 c0 -3 88 -161 195 -353 l195 -349 0 -327 0 -328 85 0 85
          0 0 330 0 329 179 318 c98 175 186 333 195 351 l17 32 -98 0 -98 -1 -140 -253
          -139 -253 -141 251 -141 251 -97 3 c-53 1 -97 1 -97 -1z"
                        />
                        <path
                          d="M6070 680 l0 -680 85 0 85 0 0 405 0 405 210 0 210 0 0 -405 0 -405
          85 0 85 0 0 680 0 680 -85 0 -85 0 0 -190 0 -190 -210 0 -210 0 0 190 0 190
          -85 0 -85 0 0 -680z"
                        />
                        <path
                          d="M7532 1349 c-133 -17 -246 -73 -346 -174 -80 -80 -127 -152 -161
          -252 -90 -259 -34 -538 147 -728 116 -122 245 -183 408 -192 311 -17 574 195
          645 521 25 113 17 273 -19 381 -50 149 -166 296 -288 368 -107 62 -257 92
          -386 76z m251 -217 c206 -96 317 -344 262 -581 -56 -236 -284 -403 -497 -363
          -368 68 -510 558 -244 840 99 105 190 144 326 139 71 -2 97 -8 153 -35z"
                        />
                        <path
                          d="M8190 1275 l0 -85 150 0 150 0 0 -595 0 -595 95 0 95 0 0 595 0 595
          155 0 155 0 0 85 0 85 -400 0 -400 0 0 -85z"
                        />
                        <path
                          d="M9060 680 l0 -680 305 0 305 0 0 85 0 85 -220 0 -220 0 0 120 0 120
          220 0 220 0 0 85 0 85 -220 0 -220 0 0 305 0 305 210 0 210 0 0 85 0 85 -295
          0 -295 0 0 -680z"
                        />
                        <path
                          d="M9790 680 l0 -680 310 0 310 0 0 85 0 85 -225 0 -225 0 0 595 0 595
          -85 0 -85 0 0 -680z"
                        />
                        <path
                          d="M10389 1337 c-154 -44 -262 -180 -263 -332 -1 -170 127 -305 377
          -399 104 -39 185 -86 210 -120 18 -25 22 -44 22 -102 -1 -62 -5 -77 -29 -113
          -16 -23 -58 -65 -92 -93 l-64 -51 23 -31 c13 -17 34 -46 47 -64 13 -17 32 -32
          41 -32 31 0 182 153 212 214 25 50 27 65 27 168 0 97 -3 120 -24 163 -41 88
          -135 157 -298 219 -202 76 -303 174 -277 270 21 75 111 145 188 146 64 0 114
          -23 171 -78 l55 -54 70 38 c39 20 72 38 74 40 8 7 -42 75 -85 114 -71 65 -158
          101 -257 106 -49 2 -100 -1 -128 -9z"
                        />
                      </g>
                    </svg>
                    <p>PRESENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="select-bg-body">
        <div className="container ">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
              <div className="search-name">
                <input type="text" placeholder="Hotel Name" className="w-100" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="d-flex spacialist align-items-center gap-3">
                <div className="w-100">
                  <select
                    className="form-select bg-body"
                    aria-label="Default select example"
                  >
                    <option defaultValue="Select Country">
                      Select Country
                    </option>
                    <option value="1">Cardiologists</option>
                    <option value="2">Endocrinologist</option>
                    <option value="3">Oncologist</option>
                    <option value="3">Dermatology</option>
                    <option value="3">Neurology</option>
                    <option value="3">Pediatrics</option>
                    <option value="3">Radiologist</option>
                    <option value="3">Gastroenterology</option>
                    <option value="3">Gynecologist</option>
                  </select>
                </div>
                <div className="btn pe-0">
                  <button className="btn my-btn d-flex gap-1" type="submit">
                    <i className="bi bi-search"></i> Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-newly-listen-hotel">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newly-hotel-body">
                <h1>NEWLY LISTED HOTELS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-newly-hotel-card">
        <div className="container">
          <div className="row">
            <div className="col-md-6 ">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-1.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>Atlantis The Palm</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>Dubai</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-2.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>Jumeirah Al Qasr Hotel</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>Dubai</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-3.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>One & only the Palm Hotel</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>Dubai</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-4.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>Jumeirah Beach Hotel</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>Dubai</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-5.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>Emirates Palace Hotel</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>abu-dhabi</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-6.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>Porto Sani Hotel, Greece</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>greece</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-7.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>The Mandarin Oriental Munich</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>germany</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-newly-listen-hotel">
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="newly-hotel-body">
                <h1>FORTHCOMING LUXURY HOTELS EDITIONS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-carausel">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <div className="carausel-perent">
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <Image
                      src="/luxury-magazine-1.webp"
                      className="d-block img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <Image
                      src="/luxury-magazine-2.webp"
                      className="d-block img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/luxury-magazine-3.webp"
                      className="d-block img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/luxury-magazine-4.webp"
                      className="d-block img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="col-md-8">
              <div className="carausel-perent">
                <Carousel>
                  <Carousel.Item interval={1000}>
                    <Image
                      src="/luxury-new-1.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <Image
                      src="/luxury-new-2.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/luxury-new-3.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-first-swiper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="who-we-are">
                <h1>WHO WE ARE WORKING WITH</h1>
              </div>
            </div>
            <div className="col-12">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                breakpoints={{
                  1920: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                  1140: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  568: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="card my-card">
                    <Image
                      src="/swiper-logo-1.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card my-card">
                    <Image
                      src="/swiper-logo-2.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card my-card">
                    <Image
                      src="/swiper-logo-3.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card my-card">
                    <Image
                      src="/swiper-logo-4.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card my-card">
                    <Image
                      src="/swiper-logo-3.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card my-card">
                    <Image
                      src="/swiper-logo-2.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="section-newly-listen-hotel">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newly-hotel-body">
                <h1>BEST LUXURY HOTELS OF THE YEAR</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-newly-hotel-card">
        <div className="container">
          <div className="row">
            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-2.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>Jumeirah Al Qasr Hotel</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>Dubai</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-3.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>One & only the Palm Hotel</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>Dubai</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-4.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>Jumeirah Beach Hotel</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>Dubai</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-md-3 d-flex">
              <div className="newly-hotel-card">
                <a href="#">
                  <div className="card">
                    <Image
                      src="/newly-hotel-5.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body newly-hotel-card-boby">
                      <div className="d-flex justify-content-between">
                        <h5>Emirates Palace Hotel</h5>
                        <div className="d-flex align-items-center gap-1">
                          <i className="bi bi-star-fill"></i>
                          <h6>5.0</h6>
                        </div>
                      </div>
                      <p>abu-dhabi</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-newly-listen-hotel tab-newly">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newly-hotel-body univeil-luxe">
                <h1>UnveiI New Luxe Getaways Every Week</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-video-tab section-top-video-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="video-tab-body">
                <div className="d-flex  flex-column flex-lg-row align-items-start">
                  <div
                    className="nav d-flex flex-lg-column flex-row justify-content-center gap-lg-0 gap-4 section-video-sections nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      Home
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      Profile
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      Messages
                    </button>
                  </div>
                  <div
                    className="tab-content video-frame-body"
                    id="v-pills-tabContent"
                  >
                    <div className="logo-imgae-tab">
                      <Image
                        src="/luxury-hotel-logo.png"
                        className="img-fluid"
                        width={300}
                        height={100}
                        alt=""
                      />
                    </div>
                    <div
                      className="tab-pane fade show active tab-video-bg"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                      tabIndex="0"
                    >
                      <div className="background-video tab-video-bg-height">
                        <iframe
                          loading="lazy"
                          style={{ width: "100%" }}
                          id="ytplayer"
                          type="text/html"
                          width="100%"
                          height="450px"
                          src="https://www.youtube.com/embed/_-TTQBUPz6w,?&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;color=white&amp;controls=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;enablejsapi=1&amp;playlist=_-TTQBUPz6w,"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                          className="loaded"
                        ></iframe>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                      tabIndex="0"
                    >
                      <div className="background-video">
                        <iframe
                          loading="lazy"
                          style={{ width: "100%" }}
                          id="ytplayer"
                          type="text/html"
                          width="100%"
                          height="450px"
                          src="https://www.youtube.com/embed/_-TTQBUPz6w,?&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;color=white&amp;controls=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;enablejsapi=1&amp;playlist=_-TTQBUPz6w,"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                          className="loaded"
                        ></iframe>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                      tabIndex="0"
                    >
                      <div className="background-video">
                        <iframe
                          loading="lazy"
                          style={{ width: "100%" }}
                          id="ytplayer"
                          type="text/html"
                          width="100%"
                          height="450px"
                          src="https://www.youtube.com/embed/_-TTQBUPz6w,?&amp;autoplay=1&amp;mute=1&amp;loop=1&amp;color=white&amp;controls=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;enablejsapi=1&amp;playlist=_-TTQBUPz6w,"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                          className="loaded"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-first-swiper section-hotel-new-swiper ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="who-we-are mb-2 d-flex justify-content-between align-items-center">
                <h1>HOTEL LATEST NEWS</h1>
                <div className="d-flex gap-4 pointer custom-pagnigation">
                  <span className="prev">
                    <i className="bi bi-chevron-left"></i>
                  </span>
                  <span className=" next">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <Swiper
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                modules={[Navigation]}
                // navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                breakpoints={{
                  1920: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                  1140: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  568: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-2.webp"
                      width={300}
                      height={200}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-3.webp"
                      width={300}
                      height={200}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-4.webp"
                      width={300}
                      height={200}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-5.webp"
                      width={300}
                      height={200}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-2.webp"
                      width={300}
                      height={200}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="section-top-video-bg">
        <div className="container-fluid  video-text-upper-body">
          <div className="row">
            <div className="w-100 background-video ">
              <iframe
                loading="lazy"
                style={{ width: "100%" }}
                id="ytplayer"
                type="text/html"
                width="100%"
                height="450px"
                src="https://www.youtube.com/embed/GCHzng92OEI,nAh6vtOMwGU?&autoplay=1&mute=1&loop=1&color=white&controls=0&playsinline=1&rel=0&playlist=GCHzng92OEI,nAh6vtOMwGU"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen=""
                className="loaded"
              ></iframe>
            </div>

            <div className="container video-text">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-6">
                  <div className="text-center video-text-logo">
                    <svg
                      version="1.0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="200.000000pt"
                      height="auto"
                      viewBox="0 0 1090.000000 136.000000"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <g
                        transform="translate(0.000000,136.000000) scale(0.100000,-0.100000)"
                        fill="#B6191F"
                        stroke="none"
                      >
                        <path d="M0 680 l0 -680 305 0 305 0 0 85 0 85 -220 0 -220 0 0 595 0 595 -850 -85 0 0 -680z" />
                        <path
                          d="M650 883 c0 -526 3 -555 61 -662 56 -105 133 -170 241 -202 99 -30
248 -24 330 13 106 49 179 135 221 261 20 59 22 85 25 565 l3 502 -85 0 -85 0
    -3 -492 c-3 -444 -5 -498 -21 -539 -26 -67 -79 -124 -135 -146 -55 -21 -148
    -23 -206 -4 -49 17 -111 73 -137 124 -44 85 -49 147 -49 615 l0 442 -80 0 -80
    0 0 -477z"
                        />
                        <path
                          d="M1610 1355 c0 -3 83 -154 185 -335 102 -181 185 -335 185 -341 0 -6
    -82 -157 -182 -337 -101 -179 -185 -330 -186 -334 -2 -5 40 -7 94 -6 l99 3
    135 242 c74 133 137 244 140 246 3 3 68 -107 144 -244 l140 -249 93 0 c51 0
    93 4 93 9 0 5 -83 158 -185 340 l-185 330 185 330 c102 181 185 334 185 340 0
    7 -33 11 -92 11 l-93 0 -139 -251 c-76 -138 -142 -247 -146 -242 -5 4 -69 116
    -143 248 l-134 240 -97 3 c-53 1 -96 0 -96 -3z"
                        />
                        <path
                          d="M2640 882 c0 -526 1 -539 62 -660 40 -81 127 -162 205 -193 50 -20
    76 -24 183 -24 117 0 129 2 187 29 76 35 154 113 189 190 50 110 54 154 54
    664 l0 472 -85 0 -84 0 -3 -497 c-3 -496 -3 -498 -26 -548 -48 -105 -117 -148
    -233 -149 -135 0 -220 64 -262 199 -21 68 -22 83 -22 533 l0 462 -82 0 -83 0
    0 -478z"
                        />
                        <path
                          d="M3660 680 l0 -680 85 0 85 0 0 230 0 230 68 0 c37 0 76 3 88 6 18 5
    41 -26 170 -222 82 -125 152 -232 156 -237 6 -10 95 31 139 64 21 16 20 18
    -131 243 l-151 228 51 54 c205 217 146 580 -116 712 -83 41 -144 52 -304 52
    l-140 0 0 -680z m357 477 c134 -68 191 -229 129 -362 -47 -101 -158 -170 -263
    -163 l-48 3 -3 272 c-3 308 -10 285 84 278 29 -2 73 -14 101 -28z"
                        />
                        <path
                          d="M4360 1357 c0 -3 88 -161 195 -353 l195 -349 0 -327 0 -328 85 0 85
    0 0 330 0 329 179 318 c98 175 186 333 195 351 l17 32 -98 0 -98 -1 -140 -253
    -139 -253 -141 251 -141 251 -97 3 c-53 1 -97 1 -97 -1z"
                        />
                        <path
                          d="M6070 680 l0 -680 85 0 85 0 0 405 0 405 210 0 210 0 0 -405 0 -405
    85 0 85 0 0 680 0 680 -85 0 -85 0 0 -190 0 -190 -210 0 -210 0 0 190 0 190
    -85 0 -85 0 0 -680z"
                        />
                        <path
                          d="M7532 1349 c-133 -17 -246 -73 -346 -174 -80 -80 -127 -152 -161
    -252 -90 -259 -34 -538 147 -728 116 -122 245 -183 408 -192 311 -17 574 195
    645 521 25 113 17 273 -19 381 -50 149 -166 296 -288 368 -107 62 -257 92
    -386 76z m251 -217 c206 -96 317 -344 262 -581 -56 -236 -284 -403 -497 -363
    -368 68 -510 558 -244 840 99 105 190 144 326 139 71 -2 97 -8 153 -35z"
                        />
                        <path
                          d="M8190 1275 l0 -85 150 0 150 0 0 -595 0 -595 95 0 95 0 0 595 0 595
    155 0 155 0 0 85 0 85 -400 0 -400 0 0 -85z"
                        />
                        <path
                          d="M9060 680 l0 -680 305 0 305 0 0 85 0 85 -220 0 -220 0 0 120 0 120
    220 0 220 0 0 85 0 85 -220 0 -220 0 0 305 0 305 210 0 210 0 0 85 0 85 -295
    0 -295 0 0 -680z"
                        />
                        <path
                          d="M9790 680 l0 -680 310 0 310 0 0 85 0 85 -225 0 -225 0 0 595 0 595
    -85 0 -85 0 0 -680z"
                        />
                        <path
                          d="M10389 1337 c-154 -44 -262 -180 -263 -332 -1 -170 127 -305 377
    -399 104 -39 185 -86 210 -120 18 -25 22 -44 22 -102 -1 -62 -5 -77 -29 -113
    -16 -23 -58 -65 -92 -93 l-64 -51 23 -31 c13 -17 34 -46 47 -64 13 -17 32 -32
    41 -32 31 0 182 153 212 214 25 50 27 65 27 168 0 97 -3 120 -24 163 -41 88
    -135 157 -298 219 -202 76 -303 174 -277 270 21 75 111 145 188 146 64 0 114
    -23 171 -78 l55 -54 70 38 c39 20 72 38 74 40 8 7 -42 75 -85 114 -71 65 -158
    101 -257 106 -49 2 -100 -1 -128 -9z"
                        />
                      </g>
                    </svg>
                    <p>PRESENTS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-first-swiper section-hotel-new-swiper ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="who-we-are mb-2 d-flex justify-content-between align-items-center">
                <h1>GENERAL NEWS</h1>
                <div className="d-flex gap-4 pointer custom-pagnigation">
                  <span className="prev">
                    <i className="bi bi-chevron-left"></i>
                  </span>
                  <span className="next">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <Swiper
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                modules={[Navigation]}
                // navigation={true}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                breakpoints={{
                  1920: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                  1140: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  568: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-2.webp"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-3.webp"
                      width={300}
                      height={200}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-4.webp"
                      width={300}
                      height={200}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-5.webp"
                      width={300}
                      height={200}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe my-3">
                    <Image
                      src="/newly-hotel-2.webp"
                      width={300}
                      height={200}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <h5>
                        The Westin Dubai Mina Seyahi Beach Resort & Marina
                      </h5>

                      <p>May 10, 2023</p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="section-newly-listen-hotel">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newly-hotel-body">
                <h1>EXCLUSIVE DEAL</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-first-swiper section-hotel-new-swiper claim-swiper">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="prev pointer">
                {" "}
                <Image src="/arrows.svg" width={80} height={80} alt="" />
              </div>
              <div className="next pointer">
                {" "}
                <Image src="/arrows.svg" width={80} height={80} alt="" />
              </div>

              <Swiper
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                breakpoints={{
                  1920: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                  1140: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  568: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="card hotel-news-swipe last-claim-swiper my-3">
                    <Image
                      src="/swiper-img.png"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe last-claim-swiper my-3">
                    <Image
                      src="/swiper-img.png"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe last-claim-swiper my-3">
                    <Image
                      src="/swiper-img.png"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe last-claim-swiper my-3">
                    <Image
                      src="/swiper-img.png"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card hotel-news-swipe last-claim-swiper my-3">
                    <Image
                      src="/swiper-img.png"
                      className="img-fluid"
                      width={300}
                      height={100}
                      alt=""
                    />
                    <div className="card-body px-0 pb-0">
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* <div className="swiper swiper2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="card hotel-news-swipe last-claim-swiper my-3">
                        <Image src="/swiper-img.png" className="img-fluid" width={300} height={100}/>
                        <div className="card-body px-0 pb-0">
                              <a href="#">Read More</a>
                        </div>
                      </div>
                 </div>

                   <div className="swiper-slide">
                    <div className="card hotel-news-swipe last-claim-swiper my-3">
                    <Image src="/swiper-img.png" className="img-fluid" width={300} height={100}/>
                      <div className="card-body px-0 pb-0">

                            <a href="#">Read More</a>
                       
                      </div>
                    </div>
                  </div>

                    <div className="swiper-slide">
                      <div className="card hotel-news-swipe last-claim-swiper my-3">
                      <Image src="/swiper-img.png" className="img-fluid" width={300} height={100}/>
                        <div className="card-body px-0 pb-0">

                              <a href="#">Read More</a>
                         
                        </div>
                      </div>
                  </div>

              <div className="swiper-slide">
                <div className="card hotel-news-swipe last-claim-swiper my-3">
                <Image src="/swiper-img.png" className="img-fluid" width={300} height={100}/>
                  <div className="card-body px-0 pb-0">

                        <a href="#">Read More</a>
                   
                  </div>
                </div>
                  </div>

                   <div className="swiper-slide">
                    <div className="card hotel-news-swipe last-claim-swiper my-3">
                    <Image src="/swiper-img.png" className="img-fluid" width={300} height={100}/>
                      <div className="card-body px-0 pb-0">
                        
                            <a href="#">Read More</a>
                       
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="card hotel-news-swipe last-claim-swiper my-3">
                    <Image src="/swiper-img.png" className="img-fluid" width={300} height={100}/>
                      <div className="card-body px-0 pb-0">
                            <a href="#">Read More</a>
                       
                      </div>
                    </div>
               </div>

                  </div>
                 <div id="left-btn" className="swiper-button-prev claim-pagination "></div>
                 <div id="right-btn" className="swiper-button-next claim-pagination"></div>
             
                
                </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="section-width">
        <div className="container"></div>
      </div>

      <div className="select-bg-body subscribe">
        <div className="container ">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <div className="text-center">
                <h1>Subscribe Newsletter</h1>
              </div>
              <div className="d-flex spacialist align-items-center gap-1">
                <div className="search-name w-100">
                  <div className="d-flex align-items-center email-input">
                    <input
                      type="text"
                      placeholder="Write your email .."
                      className="w-100"
                    />
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                </div>
                <div className="btn pe-0">
                  <button className="btn my-btn d-flex" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MeinApp;

import React from "react";
import firstimg from "../imgs/img1.jpg";
import secoimg from "../imgs/img2.jpg";
import thirdimg from "../imgs/img3.jpg";
import forthimg from "../imgs/img4.jpg";
import { Link } from "react-router";
export default function Projectss() {
  return (
    <section class="work text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col">
          <div class="h-1 bg-gray-800 rounded overflow-hidden">
            <div class="w-24 h-full bg-indigo-500"></div>
          </div>
          <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
              Our Latest Work
            </h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Street art subway tile salvia four dollar toast bitters selfies
              quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
              Viral gochujang bitters dreamcatcher.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            {/* imgslider start */}
            <div className="carousel w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={firstimg} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={secoimg} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={thirdimg} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <img
                  src={forthimg}
                  className="w-full object-cover object-center"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            {/* imgsliderend */}
            <h2 class="text-xl font-medium title-font text-white mt-5">
              Shooting Stars
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Swag shoindxgoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <Link to={"/"} class="text-indigo-400 inline-flex items-center mt-3">
              Book Now
              <svg
                fill="none"
                stroke="currentColor"
                strokelinecap="round"
                strokelinejoin="round"
                strokewidth="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="carousel w-full">
              <div id="slidee1" className="carousel-item relative w-full">
                <img src={firstimg} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slidee4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slidee2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slidee2" className="carousel-item relative w-full">
                <img src={secoimg} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slidee1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slidee3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slidee3" className="carousel-item relative w-full">
                <img src={thirdimg} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slidee2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slidee4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slidee4" className="carousel-item relative w-full">
                <img
                  src={forthimg}
                  className="w-full object-cover object-center"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#slidee3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slidee1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">
              The Catalyzer
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Swag shoindxigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <Link to={"/"} class="text-indigo-400 inline-flex items-center mt-3">
              Book Now
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="carousel w-full">
              <div id="sslide1" className="carousel-item relative w-full">
                <img src={firstimg} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#sslide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#sslide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="sslide2" className="carousel-item relative w-full">
                <img src={secoimg} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#sslide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#sslide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="sslide3" className="carousel-item relative w-full">
                <img src={thirdimg} className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#sslide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#sslide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="sslide4" className="carousel-item relative w-full">
                <img
                  src={forthimg}
                  className="w-full object-cover object-center"
                />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                  <a href="#sslide3" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#sslide1" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">
              The 400 Blows
            </h2>
            <p class="text-base leading-relaxed mt-2">
              Swag shoindegoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
            <Link to={"/"} class="text-indigo-400 inline-flex items-center mt-3">
              Book Now
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

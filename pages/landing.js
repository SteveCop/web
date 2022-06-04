import { Navbar } from '../components/Navbar'
import Footer from "../components/Footers/Footer.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends, faRocket, faAward, faRetweet, faFingerprint, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faTwitter,
  faDribbble,
  faGoogle,
  faInstagram,
  faHtml5
} from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';


export default function Home() {
  const now = new Date();

  return (
    <>
      {/* <Navbar /> */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://www.japan-guide.com/thumb/interest_flowers.jpg')",
          }}

        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Your story starts with us.
                </h1>
                <p className="mt-4 text-white text-lg">
                  Various folk cultures and traditions assign symbolic meanings to plants. Although these are no longer commonly understood by populations that are increasingly divorced from their old rural traditions, some survive. In addition, these meanings are alluded to in older pictures, songs and writings
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
          style={{ transform: "translateZ(0)" }}>
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-100/100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon></svg>
        </div>
      </div>
      <section className="pb-20 bg-blue-100/100 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <FontAwesomeIcon icon={faAward} />
                  </div>
                  <h6 className="text-xl font-semibold">Cactus</h6>
                  <p className="mt-2 mb-4 text-gray-500/70">
                    Plants that grow in the desert
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <FontAwesomeIcon icon={faRetweet} />
                  </div>
                  <h6 className="text-xl font-semibold">Sun Flower</h6>
                  <p className="mt-2 mb-4 text-gray-500/70">
                    Plants that give
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <FontAwesomeIcon icon={faFingerprint} />
                  </div>
                  <h6 className="text-xl font-semibold">Lili</h6>
                  <p className="mt-2 mb-4 text-gray-500/70">
                    Lili is a part of genus Lilium
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blue-500/70 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <FontAwesomeIcon icon={faUserFriends} />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Flower is symbol about life
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-600/60">
                  you can get so many meaning about life in flower
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-600/60">
                  explore this blog and you can find what different about flower.
                </p>
                <Link href="/">
                  <a href="#pablo" className="font-bold text-gray-700/30 hover:text-blue-500/90 mt-8">
                    Check the blog
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blue-800/100">
                  <img
                    alt="..."
                    src="https://cdn.shopify.com/s/files/1/1789/5809/products/0620-BloomyDays-Thumbnail-01_1600x.jpg?v=1592275040"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-56 -top-56"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blue-800/100 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Blog Flower
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      This blog have many flower.
                      you can see flower from other country and you can fell in the place where the flower grow.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-20">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://i.pinimg.com/originals/62/f1/65/62f165cebd814ec81f1e5a324eecbdd1.jpg"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-blue-500/70 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blue-200/20">
                  <FontAwesomeIcon icon={faRocket} />
                </div>
                <h3 className="text-3xl font-semibold">A growing company</h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-500/70">
                  The extension comes with three pre-built pages to help you
                  get started faster. You can change the text and images and
                  you&apos;re good to go.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500/70 bg-blue-100/100 mr-3">
                          <FontAwesomeIcon icon={faFingerprint}
                            style={{
                              height: '15px', width: '15px'
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500/70">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500/70 bg-blue-100/100 mr-3">
                          <FontAwesomeIcon icon={faHtml5}
                            style={{
                              height: '15px', width: '15px'
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500/70">
                          Amazing page examples
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-500/70 bg-blue-100/100 mr-3">
                          <FontAwesomeIcon icon={faPaperPlane}
                            style={{
                              height: '15px', width: '15px'
                            }}
                          />
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-500/70">
                          Dynamic components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pt-20 pb-48">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold">Here are our photographer</h2>
              <p className="text-lg leading-relaxed m-4 text-gray-500/70">
                people who go to other country to get the nice pict of flower.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/images/team-1-800x800.jpg"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Ryan Tompson</h5>
                  <p className="mt-1 text-sm text-gray-400/50 uppercase font-semibold">
                    Photograper
                  </p>
                  <div className="mt-6">
                    <button
                      className="bg-cyan-400 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faTwitter}
                        style={{
                          height: '15px', width: '15px'
                        }}
                      />
                    </button>
                    <button
                      className="bg-cyan-600 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faFacebook}
                        style={{
                          height: '15px', width: '15px'
                        }}
                      />
                    </button>
                    <button
                      className="bg-pink-500 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faDribbble}
                        style={{
                          height: '15px', width: '15px'
                        }}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/images/team-2-800x800.jpg"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Romina Hadid</h5>
                  <p className="mt-1 text-sm text-gray-400/50 uppercase font-semibold">
                    Photograper Specialist
                  </p>
                  <div className="mt-6">
                    <button
                      className="bg-red-600 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faGoogle}
                        style={{
                          height: '15px', width: '15px'
                        }}

                      />
                    </button>
                    <button
                      className="bg-cyan-300 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faFacebook}
                        style={{
                          height: '15px', width: '15px'
                        }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/images/team-3-800x800.jpg"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Alexa Smith</h5>
                  <p className="mt-1 text-sm text-gray-400/50 uppercase font-semibold">
                    Photograper & Designer
                  </p>
                  <div className="mt-6">
                    <button
                      className="bg-red-600 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faGoogle}
                        style={{
                          height: '15px', width: '15px'
                        }} />
                    </button>
                    <button
                      className="bg-cyan-300 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faTwitter}
                        style={{
                          height: '15px', width: '15px'
                        }} />
                    </button>
                    <button
                      className="bg-cyan-700 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faInstagram}
                        style={{
                          height: '15px', width: '15px'
                        }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6">
                <img
                  alt="..."
                  src="/images/team-4-470x470.png"
                  className="shadow-lg rounded-full mx-auto max-w-120-px"
                />
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold">Jenna Kardi</h5>
                  <p className="mt-1 text-sm text-gray-400/50 uppercase font-semibold">
                    Photograper & Art
                  </p>
                  <div className="mt-6">
                    <button
                      className="bg-pink-500 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faDribbble}
                        style={{
                          height: '15px', width: '15px'
                        }} />
                    </button>
                    <button
                      className="bg-red-600 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faGoogle}
                        style={{
                          height: '15px', width: '15px'
                        }} />
                    </button>
                    <button
                      className="bg-cyan-300 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faTwitter}
                        style={{
                          height: '15px', width: '15px'
                        }} />
                    </button>
                    <button
                      className="bg-cyan-700 text-white w-8 h-8 hover:scale-125 rounded-full outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                    >
                      <FontAwesomeIcon icon={faInstagram}
                        style={{
                          height: '15px', width: '15px'
                        }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <Footer /> */}
    </>
  )
}

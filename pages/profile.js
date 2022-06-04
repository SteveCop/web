import { Navbar } from '../components/Navbar'
import Footer from "../components/Footers/Footer.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkedAlt, faBriefcase, faUniversity} from '@fortawesome/free-solid-svg-icons'


export default function Profile() {
  
  return (
    <>
      <Navbar />
        
      <main className="profile-page">
        <section className="relative block h-[500px]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://cdn1-production-images-kly.akamaized.net/4wLZ3W2txDdiz0mDuol0NpA7US4=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3193983/original/061762900_1596024380-Ilustrasi_lavender.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
                className="text-blue-100/100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blue-100/100">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/images/picture.jfif"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px] hover:scale-125"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-gray-700/100 active:bg-gray-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 hover:bg-blue-600"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-600/60">
                          22
                        </span>
                        <span className="text-sm text-gray-400/60">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-600/60">
                          10
                        </span>
                        <span className="text-sm text-gray-400/60">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-600/60">
                          89
                        </span>
                        <span className="text-sm text-gray-400/60">
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal text-gray-700/100 mb-2">
                    Stevanie
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2 text-lg text-gray-400/40" /> {" "}
                    Los Angeles, California
                  </div>
                  <div className="mb-2 text-gray-600 mt-10">
            <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-lg text-gray-400/40" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-600">
            <FontAwesomeIcon icon={faUniversity} className="mr-2 text-lg text-gray-400/40" />
                    University of Computer Science
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blue-200/20 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-gray-500/100 hover:text-blue-500/90"
                        onClick={(e) => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

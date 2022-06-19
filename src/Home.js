//memanggil utility
import 'tw-elements';
//memanggil komponen
import Footer from './Footer'
import Navbar from './Navbar'
//memanggil gambar
import csgo from './assets/csgo.jpg';
import dota from './assets/dota.jpg';
import valorant from './assets/valorant.jpg';
import iconmlbb from './assets/iconmlbb.jpg';
import iconvalo from './assets/iconvalo.jpg';
import iconcsgo from './assets/iconcsgo.jpg';

const callouts = [
  {
    name: 'Mobile Legend',
    description: '	Mobile, 5v5',
    imageSrc: iconmlbb,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'Mlbb'
  },
  {
    name: 'Valorant',
    description: '	PC, 5v5',
    imageSrc: iconvalo,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'Valo'
  },
  {
    name: 'CSGO',
    description: '	PC, 5v5',
    imageSrc: iconcsgo,
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: 'Csgo'
  }
]

export default function Example() {
  return (
    <>
    <Navbar/>
    <div className="bg-gray-200">
      <div className="min-h-full">
        <header className="bg-gray-300">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-black">Game Store Place</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            {/* <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
            </div> */}

<div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src={csgo}
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">CSGO</h5>
        <p>GO merupakan permainan keempat di dalam waralaba Counter Strike, tidak termasuk Counter Strike Neo dan Online . Counter Strike Global Offensive dirilis pada tanggal 21 Agustus, 2012 dan dapat dimainkan pada Microsoft Windows, OS X, Xbox Live Arcade dan Playstation Network versi Amerika .</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src={dota}
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">DOTA</h5>
        <p>Dota 2 adalah sebuah permainan arena pertarungan daring multipemain, dan merupakan sekuel dari Defense of the Ancients mod pada Warcraft 3: Reign of Chaos dan Warcraft 3: The Frozen Throne. DotA 2 dikembangkan oleh Valve Corporation, terbit juli 2013 dota 2 dapat dimainkan secara gratis pada sistem operasi Microsoft Windows, OS X and Linux. Dota 2 dapat dimainkan secara eksklusif melalui distributor resmi valve, Steam.</p>
      </div>
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src={valorant}
        class="block w-full"
        alt="..."
      />
      <div class="carousel-caption hidden md:block absolute text-center">
        <h5 class="text-xl">VALORANT</h5>
        <p>Dota 2 adalah sebuah permainan arena pertarungan daring multipemain, dan merupakan sekuel dari Defense of the Ancients mod pada Warcraft 3: Reign of Chaos dan Warcraft 3: The Frozen Throne. DotA 2 dikembangkan oleh Valve Corporation, terbit juli 2013 dota 2 dapat dimainkan secara gratis pada sistem operasi Microsoft Windows, OS X and Linux. Dota 2 dapat dimainkan secara eksklusif melalui distributor resmi valve, Steam.</p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-10 lg:max-w-none">
            <h2 className="text-2xl font-extrabold text-black">Top Up</h2>
  
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-center text-black">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-center font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
</div>
            {/* /End replace */}
          </div>
        </main>
      </div>
      </div>
      <Footer/>
    </>
  )
}
        

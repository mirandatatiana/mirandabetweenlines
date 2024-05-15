
    const Porfolio = () => {
    const products = [
        {
          id: 1,
          name: 'Gym Reserve Page',
          href: 'https://gym-pagewith-reserve-system.vercel.app/',
          imageSrc: 'assets/Image 09-05-24 at 20.12 2.jpg',
          imageAlt: "Landing Gym reserve page",
          info: 'Next.js, Typescript, Shadnui, Hygraph',
        },
        {
            id: 2,
            name: 'Movie Page',
            href: 'https://reacttailwindmovies.netlify.app/',
            imageSrc: 'assets/Image 15-05-24 at 10.49.jpg',
            imageAlt: "Landing Movie page",
            info: 'React, Tailwind',
          },
          {
            id: 3,
            name: 'Rick and Morty Page',
            href: 'https://mirandatatiana.github.io/RickyandMorty/',
            imageSrc: 'assets/Image 04-01-24 at 16.25.jpg',
            imageAlt: "Landing Rick and Morty page",
            info: 'HTML, SCSS, Javascript, Api',
          },
          {
            id: 4,
            name: 'Wallet Page',
            href: 'https://walletpagejavascript.netlify.app/',
            imageSrc: 'assets/D0A07481-365F-4498-BBD2-85738E6BAB3F.jpeg',
            imageAlt: "Landing Wallet page",
            info: 'HTML, Javascript, Bulma',
          },
          {
            id: 5,
            name: 'Meme Page',
            href: 'https://memeeditorpage.netlify.app/',
            imageSrc: 'assets/Image 15-05-24 at 10.49 (1).jpg',
            imageAlt: "Landing Meme page",
            info: 'HTML, Javascript, CSS',
          },
      ]
      
        return (
          <div className="bg-white flex  ">
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-full  ">
              <h2 className="text-2xl p-5 font-bold tracking-tight text-gray-900">Works that already did!</h2>
      
              <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="w-full overflow-hidden rounded-md  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 flex justify-between">
                      <div>
                        <h3 className="text-sm text-gray-700">
                          <a href={product.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.info}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
            
          </div>
        )
      }


export default Porfolio
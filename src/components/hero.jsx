
const Hero = () => {
    return (
<section class="bg-white border-none  bg-gradient-to-l from-indigo-400 to-indigo-950 ">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h2 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Hello There</h2>
            <h1 class="max-w-2xl mb-6 font-extrabold  text-4xl dark:text-white">I’m Tatiana a Front-end developer</h1>
            <h2 href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Actually a I’m a creative person. One how love coding
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </h2>
            <a href="assets/TatianaMirandaCV.pdf" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
               CV
            </a> 
        </div>
        <div class="hidden border-opacity-55 lg:mt-0 lg:col-span-5 lg:flex">
            <img className="rounded-r-full" src="assets/IMG_1213-2.jpg" alt="mockup"/>
        </div>                
    </div>

<div className=" top-0 left-0 w-full overflow-hidden bg-gradient-to-l from-indigo-400 to-indigo-950">
<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="relative block fill-white"></path>
    </svg>
</div>
</section>
    )
}
export default Hero

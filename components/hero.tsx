const Hero = () => {
return <section className="bg-primary">
<div className="h-section py-2 flex items-center justify-between content-container">
    <div className="mr-auto place-self-center lg:col-span-7">
        <p className="text-h2">HI, I AM A</p>
        <h1 className="max-w-2xl mb-4 leading-[136px] text-4xl font-extrabold tracking-tight md:text-5xl xl:text-who_am_i">WEB DEVELOPER</h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">based in Ho Chi Minh, Vietnam.</p>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-black text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            View My Works
            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-black rounded-lg hover:bg-primary/30 focus:ring-4 focus:ring-gray-100">
            Contact Me
        </a> 
    </div>
    <div className="hidden lg:flex bg-light rounded-full mx-4 w-[520px] h-[520px] border-[16px] border-white box-border overflow-hidden">
        <img className="" src="/avatar.jpg" alt="mockup" />
    </div>                
</div>
</section>;
}

export default Hero;
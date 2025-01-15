const AboutMe = () => {
    return <section className="h-section">
        <div className="content-container py-[104px] space-y-8">
            <div className="flex flex-col items-center justify-center">
                <div className="bg-primary px-2">About Me</div>
                <div className="text-h2 font-bold">Who Am I?</div>
            </div>
            <div className="flex">
                <div className="flex-1 basis-3/5">
                    <h3 className="text-h3">
                        Hi, I am <span className="font-bold border-b-2 border-b-primary">Trung Kien</span>
                    </h3>
                    <p className="text-large mt-2">
                        I'm a final-year student interested in building user-friendly web applications. Having a solid understanding of web development principles, practical experience with NextJS and ReactJS, and experience working in Agile/Scrum models in a 5-member team. Willing to contribute my skills to fintech web applications as a front-end developer while also being capable of back-end development tasks.
                    </p>
                </div>
                <div className="relative flex-1 basis-2/5 flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center">
                        <div className="absolute text-[144px] text-[#4C4D4D]">11</div>
                        <span className="bg-primary h-[120px] w-[120px] rounded-full"></span>
                    </div>
                    
                    <div className="text-h4 font-semibold">
                        Years of <span className="font-bold">Experience</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-gray font-semibold">Name:</div>
                    <div className="text-medium font-bold">Ta Thuc Trung Kien</div>
                </div>
                <div>
                    <div className="text-gray font-semibold">Email:</div>
                    <div className="text-medium font-bold">kientathuc@gmail.com</div>
                </div>
                <div>
                    <div className="text-gray font-semibold">Date of birth:</div>
                    <div className="text-medium font-bold">29 December, 2003</div>
                </div>
                <div>
                    <div className="text-gray font-semibold">From:</div>
                    <div className="text-medium font-bold">Ho Chi Minh, Vietnam</div>
                </div>
            </div>
        </div>
    </section>
}   

export default AboutMe;
import Image from "next/image";
import "./style.scss";
const SectionTwo = () => {
    return (
    <section className="sectionTwo main">
        <div className="topArea">
            <p className="tip">Transforming Ideas into Reality</p>
            <h3 className="title">
            Explore Our MVP for Startups Services
            </h3>
            <h6 className="descrip">
            Discover our range of services designed to help startups bring their ideas to life. From conceptualization and prototyping to product design and quality analysis, we have the expertise to turn your vision into a test-ready MVP.
            </h6>
        </div>
        <div className='bottomArea'>
   
            <div className='box'>
                <div className='imageBox'>
                <Image
                    src="/images/mvpImage.png"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    
                />
                </div>
           
                
                <h3 >
                Conceptualization & Prototyping
                </h3>
                <h6 >
                We offer expertise in Mobile Development, Web Development, Product Design, Cloud Services, Quality Review, and Product Management.
                </h6>
            </div>
            <div className='box'>
                
            <div className='imageBox'>
                <Image
                    src="/images/design.png"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    
                />
                </div>
                    <h3 >
                    Product Design
                </h3>
                <h6 >
                Our services include Product Design, Legacy Modernization, Testing, and Mobile Development.
                </h6>
               
            </div>
            <div className='box'>
            <div className='imageBox'>
                <Image
                    src="/images/quality_test.png"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    
                />
                </div>
                
                <h3 >
                Quality Analysis
                </h3>
                <h6 >
                Contact us for Mobile Development, Web Development, and Product Design services.
                </h6>
            </div>

        </div>
        
    </section>
    );
  };
  
  export default SectionTwo;
  
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
                Transform initial concepts into tangible prototypes rapidly, enabling early validation and iterative improvement to ensure product-market fit and innovation.
                </h6>
            </div>
            <div className='box'>
                
            <div className='imageBox'>
                <Image
                    src="/images/design.jpg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    
                />
                </div>
                    <h3 >
                    Product Design
                </h3>
                <h6 >
                Elevate user experience with our comprehensive product design services, blending aesthetic appeal with functional excellence, ensuring user engagement and satisfaction.
                </h6>
               
            </div>
            <div className='box'>
            <div className='imageBox'>
                <Image
                    src="/images/project_managemnt_4.jpg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    
                />
                </div>
                
                <h3 >
                Product Development
                </h3>
                <h6 >
                Realize your vision through our full-cycle product development process, emphasizing scalable, robust solutions tailored to meet specific business needs.
                </h6>
            </div>
            <div className='box'>
            <div className='imageBox'>
                <Image
                    src="/images/project_management_1.jpg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    
                />
                </div>
                
                <h3 >
                Project Management
                </h3>
                <h6 >
                Achieve project success with our strategic management approach, focusing on efficiency, clear communication, and meticulous planning to meet deadlines and quality standards.
                </h6>
            </div>
            <div className='box'>
            <div className='imageBox'>
                <Image
                    src="/images/cyber_sercure_1.jpg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    
                />
                </div>
                
                <h3 >
                Cyber security
                </h3>
                <h6 >
                Strengthen your digital defenses with our advanced cybersecurity strategies, protecting your operations from evolving threats and ensuring data integrity and compliance.
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
                Guarantee your product&apos;s integrity with our thorough quality analysis, identifying and resolving issues early to maintain high standards of performance and reliability.
                </h6>
            </div>

        </div>
        
    </section>
    );
  };
  
  export default SectionTwo;
  
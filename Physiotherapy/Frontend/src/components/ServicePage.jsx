import React from 'react'
import BannerImg from '../assets/home.png'
import geriatric from '../assets/geriatric.jpeg'
import neurological from '../assets/neurological.png'
import orthopededic from '../assets/orthopededic.jpg'
import painmanagement from '../assets/painmanagement.jpg'
import pediatric from '../assets/pediatric.jpeg'
import postsurgical from '../assets/postsurgical.jpeg'
import sports from '../assets/sports.jpg';
import hometherapy from '../assets/hometherapy.jpg'


function ServicePage() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex  mt-20 flex-col md:flex-row '>

                {/* left side */}
                <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1'>
                    <div className='space-y-8'>
                        <h1 className='text-4xl font-bold'> <span className='text-pink-500'>Our Services </span></h1>
                        <p className='text-xl'>Welcome to Sushima Physiotherapy, led by Sushil Dwivedi, where your health is our priority. Located in Daroga Ji Gali, Robertsganj, Sonebhadra, we provide personalized physiotherapy services in a supportive environment. Our holistic approach combines advanced techniques and evidence-based practices to tailor treatments for your unique needs. Whether recovering from surgery, managing a chronic condition, or aiming to improve performance, our state-of-the-art facility ensures you receive the highest quality care. Experience compassionate service and effective therapies at Sushima Physiotherapy, dedicated to your well-being</p>

                    </div>
                </div>

                {/* right side */}
                <div className='w-full md:w-1/2 mt-9 md:mt-0 flex justify-center md:block order-1 md:order-2'>
                    <img src={BannerImg} className='h-auto w-full max-w-sm md:max-w-full' />
                </div>

            </div>

           {/* ---------------------------------------------------------------- */}

           <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20">
        
        <section className="mb-12 flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-pink-500 ">Orthopedic Rehabilitation</h2>
            <p className="text-xl">
              Our orthopedic rehabilitation services are designed to help patients recover from musculoskeletal injuries, surgeries, and conditions. We use a combination of manual therapy, exercise, and education to restore function, reduce pain, and prevent future injuries.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <img src={orthopededic} alt="Orthopedic Rehabilitation" className="rounded-lg shadow-lg md:h-[350px] w-[450px] hover:scale-105 duration-300"/>
          </div>
        </section>
      
      <div className='mt-6 mb-8'>
        <hr></hr>
      </div>
        
        <section className="mb-12 flex flex-col md:flex-row-reverse justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Sports Injury Management</h2>
            <p className="text-xl">
              Whether you're a professional athlete or a weekend warrior, our sports injury management services are tailored to help you recover quickly and safely. We focus on injury prevention, treatment, and performance enhancement through specialized training programs.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <img src={sports} alt="Sports Injury Management" className="rounded-lg shadow-lg md:h-[350px] w-[450px] hover:scale-105 duration-300"/>
          </div>
        </section>
        
        <div className='mt-6 mb-8'>
        <hr></hr>
      </div>
        
        <section className="mb-12 flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Neurological Therapy</h2>
            <p className="text-xl">
              Our neurological therapy services aim to improve the lives of patients with neurological conditions such as stroke, Parkinson's disease, and multiple sclerosis. We utilize advanced techniques and exercises to enhance mobility, strength, and coordination.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <img src={neurological} alt="Neurological Therapy" className="rounded-lg shadow-lg h-64 md:h-[350px] w-[450px] hover:scale-105 duration-300"/>
          </div>
        </section>

        <div className='mt-6 mb-8'>
        <hr></hr>
      </div>
        
        
        <section className="mb-12 flex flex-col md:flex-row-reverse justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Geriatric Care</h2>
            <p className="text-xl">
              We offer specialized geriatric care to address the unique needs of older adults. Our goal is to improve mobility, balance, and overall physical health, allowing our elderly patients to maintain their independence and quality of life.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <img src={geriatric} alt="Geriatric Care" className="rounded-lg shadow-lg h-64 md:h-[350px] w-[450px] hover:scale-105 duration-300"/>
          </div>
        </section>
        
        <div className='mt-6 mb-8'>
        <hr></hr>
      </div>
        

        <section className="mb-12 flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Post-Surgical Rehabilitation</h2>
            <p className="text-xl">
              Recovering from surgery can be challenging, but our post-surgical rehabilitation services are designed to make the process smoother and more effective. We provide personalized exercise programs, pain management strategies, and ongoing support to ensure optimal recovery.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <img src={postsurgical} alt="Post-Surgical Rehabilitation" className="rounded-lg shadow-lg h-64 md:h-[350px] w-[450px] hover:scale-105 duration-300"/>
          </div>
        </section>

        <div className='mt-6 mb-8'>
        <hr></hr>
      </div>
        
        
        <section className="mb-12 flex flex-col md:flex-row-reverse justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Pain Management</h2>
            <p className="text-xl">
              Chronic pain can significantly impact your quality of life. Our pain management services focus on identifying the root cause of your pain and implementing effective treatment plans. We use a combination of physical therapy, manual techniques, and education to help you manage and reduce pain.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <img src={painmanagement} alt="Pain Management" className="rounded-lg shadow-lg md:h-[350px] w-[450px] hover:scale-105 duration-300"/>
          </div>
        </section>

        <div className='mt-6 mb-8'>
        <hr></hr>
      </div>
        
        
        <section className="mb-12 flex flex-col md:flex-row justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Pediatric Physiotherapy</h2>
            <p className="text-xl">
              Our pediatric physiotherapy services cater to the unique needs of children with developmental, neurological, or orthopedic conditions. We create fun, engaging, and effective treatment plans to help children achieve their physical potential.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <img src={pediatric} alt="Pediatric Physiotherapy" className="rounded-lg shadow-lg md:h-[350px] w-[450px] hover:scale-105 duration-300"/>
          </div>
        </section>

        <div className='mt-6 mb-8'>
        <hr></hr>
      </div>
        

        <section className="mb-12 flex flex-col md:flex-row-reverse justify-center items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-3xl font-bold mb-4 text-pink-500">Home Physiotherapy</h2>
            <p className="text-xl">
              For patients who prefer or require treatment in the comfort of their own home, we offer home physiotherapy services. Our therapists will visit you at home, providing the same high-quality care you would receive in our clinic.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <img src={hometherapy} alt="Home Physiotherapy" className="rounded-lg shadow-lg h-64 md:h-[350px] w-[450px] hover:scale-105 duration-300"/>
          </div>
        </section>
        
      </div>
            
        </>
    )
}

export default ServicePage
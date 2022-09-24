import React from 'react';
import Accordion from './Accordion';

const HomeCard = () => {
    return (
        <div className='mx-auto bg-white rounded-md p-2 w-full md:container xl:w-2/4 min-h-max shadow '>
            <div className="img">
                <img src="https://i.ibb.co/ZM2Lbpz/Course-image.jpg" alt="" />
            </div>
            <div className='my-3'>
                <div className="title mb-2 md:flex justify-between">
                    <div>
                        <h2 className='text-xl md:text-2xl font-bold text-gray-600'>PET TRAINING, PET HYGIENE, WELLNESS, AND GROOMING</h2>
                        <h3 className='text-xl font-bold text-gray-600'><del className='text-gray-300 mr-2'>£358.00</del> £35.00</h3>
                        <hr className='w-32' />
                    </div>
                    <div className="btn  flex  items-center my-2">
                        <button className='w-40 h-12 bg-green-600 text-xl font-bold text-white hover:shadow-lg hover:text-blue-50'><a href="https://rightedgelearning.com/product/pet-training-pet-hygiene-wellness-and-grooming/?redirect" target="_blank" rel="noopener noreferrer">BUY NOW</a></button>
                    </div>
                </div>


                {/* Course Overview */}
                <div className='py-3  '>
                    <h3 className="text-xl my-2"><strong>Course Overview</strong></h3>
                    <p className="text-lg">Prepare yourself for the best career by enrolling in this&nbsp;<strong>PET TRAINING, PET HYGIENE, WELLNESS, AND GROOMING</strong> outstanding course. This&nbsp;<strong>PET TRAINING, PET HYGIENE, WELLNESS, AND GROOMING</strong> course will provide you with the relevant knowledge and skill and show you the path to prosper in this field. The course covers all the requirements for you to enhance your potential.</p>
                    <p className="text-lg">This&nbsp;<strong>PET TRAINING, PET HYGIENE, WELLNESS, AND GROOMING</strong> course will heighten your credibility with incredible resources. You can feel the change with the first lesson. This&nbsp;<strong>PET TRAINING, PET HYGIENE, WELLNESS, AND GROOMING</strong> course covers all the lessons you can easily comprehend and apply to your workplace perfectly.</p>
                    <p className="text-lg">Once you complete this&nbsp;<strong>Animal Care</strong> course, you can avail a renowned certificate that will complement your skills and knowledge. Whether you are a newbie in this field or are in the pursuit of expanding your potential, this&nbsp;<strong>PET TRAINING, PET HYGIENE, WELLNESS, AND GROOMING</strong> course will accompany you to the apex of success. Sign up for this course now and boost your career!</p>
                    <h3 className="text-xl my-2"><strong>Why should you choose us?</strong></h3>
                    <p className="text-lg">You can rely on our courses because:</p>
                    <ul className='pl-6'>
                        <li>We ensure you the valuable certificate that speaks your ability.</li>
                        <li>You can execute the lesson learned in this course in your real-life experience.</li>
                        <li>This is a self-paced online course, you can take it from your comfort of home.</li>
                        <li>Our courses are well researched and designed by highly adept instructors.</li>
                        <li>The curriculum is designed to make you competent in the field you pursue.</li>
                        <li>Our classes are simply constructed, you will feel no challenge to understand class.</li>
                        <li>Our instructors are always there to help you solve any problem you face during the classes.</li>
                    </ul>
                    <h3 className="text-xl my-2"><strong>Certification</strong></h3>
                    <p className="text-lg">You will be awarded a certificate upon completion of the course. We will send you an E-certificate, print it out, and use it as long as you want. If you look for a hard copy, we will send you it, an extra charge will be applied.</p>
                    <ul className='pl-6'>
                        <li><strong>Inside the UK = &pound;8</strong></li>
                        <li><strong>International Students = &pound;16</strong></li>
                    </ul>
                    <h3 className="text-xl my-2"><strong>Who is this</strong><strong>&nbsp;course for?</strong></h3>
                    <p className="text-lg">This&nbsp;<strong>PET TRAINING, PET HYGIENE, WELLNESS, AND GROOMING</strong> course is for those who are looking forward to pursuing their career in repairing home appliances. For those who are already in this career, this course will enhance your knowledge and experience. And certainly, this endorsed course will increase your value by providing the glorious certificate!</p>
                    <h3 className="text-xl my-2"><strong>Requirements for taking this course</strong></h3>
                    <p className="text-lg">This&nbsp;<strong>PET TRAINING, PET HYGIENE, WELLNESS, AND GROOMING</strong> course doesn&rsquo;t ask for many requirements. You are good as long as you understand English and are equipped to take the course online!</p>
                    <h3 className="text-xl my-2"><strong>Career path</strong></h3>
                    <p className="text-lg">This&nbsp;<strong>PET TRAINING, PET HYGIENE, WELLNESS, AND GROOMING</strong> will elaborate the array of opportunities in front of you by enriching your knowledge, skills, and CV!</p>
                </div>
            </div>
            <Accordion/>
        </div>
    );
};

export default HomeCard;
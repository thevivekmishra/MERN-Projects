import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow flex items-center justify-center text-center'>
        <div className='mt-10 max-w-screen-lg pt-10'>
          <h1 className='text-4xl font-bold mb-4'>Welcome</h1>
          <p className='text-lg leading-relaxed gap-4  text-center m-4'>
            Welcome to our innovative bookstore website, a seamless blend of technology and literature designed to delight every reader. This platform is crafted with the latest technologies, including HTML, Tailwind CSS, React, Node.js, JavaScript, Mongoose, MongoDB, and Express, ensuring a robust and dynamic user experience.

            Our homepage features a selection of free books, offering a sneak peek into our diverse collection. To access our entire range of books, including both free and paid options, users are required to log in. The website is fully responsive, providing an optimal viewing experience across all devices, whether you're using a mobile phone, tablet, or desktop.

            Stay connected and reach out to us easily. Users can contact us directly through the website and follow us on social media platforms like LinkedIn, Facebook, and Instagram. Our goal is to create an engaging and user-friendly environment where book lovers can explore, discover, and enjoy their favorite reads anywhere, anytime.

            Thank you for visiting, and we hope you find your next great book here. Enjoy your journey through our bookstore, where every book opens a new world of possibilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

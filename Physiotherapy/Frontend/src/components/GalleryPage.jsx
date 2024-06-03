import React, { useState } from "react";
import Modal from 'react-modal';

// Import your images
import photo1 from  '../assets/image1.jpg'
import photo2 from  '../assets/image2.jpg'
import photo3 from  '../assets/image3.jpg'
import photo4 from  '../assets/image4.jpg'
import photo5 from  '../assets/image5.jpg'
import photo6 from  '../assets/image6.jpg'
import photo7 from  '../assets/image7.jpg'
import photo8 from  '../assets/image8.jpg'
import photo9 from  '../assets/image9.jpg'
import photo10 from '../assets/image10.jpg'
import photo11 from '../assets/image11.jpg'
import photo12 from '../assets/image12.jpg'

const GalleryPage = () => {
    const photos = [
        photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10,photo11, photo12
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mb-20">
            <h1 className="text-4xl font-bold mb-10 mt-20 text-center">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-lg shadow-lg flex justify-center items-center cursor-pointer hover:scale-105 duration-300"
                        onClick={() => openModal(photo)}
                    >
                        <img
                            src={photo}
                            alt={`Gallery Image ${index + 1}`}
                            className="w-[400px] h-[300px] object-cover"
                        />
                    </div>
                ))}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="fixed inset-0 flex items-center justify-center"
                overlayClassName="fixed inset-0 bg-black bg-opacity-75"
                contentLabel="Selected Image"
            >
                <div className="relative bg-white p-1 rounded-lg shadow-lg max-w-3xl max-h-full ">
                    <button
                        onClick={closeModal}
                        className="absolute top-0 right-0 m-4 text-black text-3xl"
                    >
                        &times;
                    </button>
                    <img src={selectedImage} alt="Selected" className="w-full h-full object-contain" />
                </div>
            </Modal>
        </div>
    );
};

export default GalleryPage;

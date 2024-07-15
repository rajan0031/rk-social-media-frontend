import React, { useState } from "react";

const Reviews = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const reviews = [
        {
            id: 1,
            author: "Erin B.",
            date: "7/01/2024",
            rating: 5,
            content:
                "Paint Denver has been our go-to partner for real estate sales over the past two years. They consistently deliver quick, thorough work while maintaining a clean job site. Our representative, Ivan Castaneda, is exceptionally responsive and ensures top-notch quality from start to finish. Whether it's an average priced home or a luxury property, Paint Denver exceeds our expectations. I highly recommend them for anyone looking for reliable and high-quality painting services in Denver.",
            source: "Google",
            imageUrl: "https://paintdenver.com/wp-content/plugins/wp-review-slider-pro-premium/public/partials/cache/1719792000_erinbrumleve_695_60.png",
        },
        {
            id: 2,
            author: "Sarah D.",
            date: "6/18/2024",
            rating: 5,
            content:
                "Mario and his crew painted two rooms in a day. They did great work and were super courteous and friendly. Mario even noticed that one of the pins in a door hinge had popped out and he tapped it back in for us. Ivan was helpful in getting our project started and answering questions. Melissa called the day before painting started to share helpful information and answer questions. I highly recommend working with this team, we will certainly be using Paint Denver for future projects!",
            source: "Google",
            imageUrl: "https://paintdenver.com/wp-content/plugins/wp-review-slider-pro-premium/public/partials/cache/1718668800_sarahdonnelly_690_60.png",
        },
        {
            id: 3,
            author: "Alex M.",
            date: "6/18/2024",
            rating: 5,
            content:
                "We have used Paint Denver to paint the exterior of the school and the interior as well. The crew was exceptional and always cleaned up each day. Sara Perlman came out to take all measurements and get a bid to us very quickly. I highly recommend them!",
            source: "Google",
            imageUrl: "https://paintdenver.com/wp-content/plugins/wp-review-slider-pro-premium/public/partials/cache/1718668800_alexmarino_691_60.png",
        },
        // Add more reviews here...
    ];

    const handleNextSlide = () => {
        setActiveSlide((prev) => (prev + 1) % reviews.length);
    };

    const handlePrevSlide = () => {
        setActiveSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-center mb-8">
                What Your Neighbors Are Saying
            </h2>
            <div className="flex items-center justify-between mb-8">
                <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                    onClick={handlePrevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 011.414-1.414L5 10.586V3a1 1 0 012 0v7.586l6.293-6.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div className="flex space-x-2">
                    {reviews.map((review, index) => (
                        <div
                            key={review.id}
                            className={`h-2 w-2 rounded-full ${index === activeSlide ? "bg-black" : "bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
                <button
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                    onClick={handleNextSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414l7-7a1 1 0 011.414 0l7 7a1 1 0 01-1.414 1.414L15 10.586V17a1 1 0 01-2 0v-7.586l-6.293 6.293a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                    <img
                        src={reviews[activeSlide].imageUrl}
                        alt={reviews[activeSlide].author}
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <h3 className="text-xl font-bold">
                            {reviews[activeSlide].author}
                        </h3>
                        <p className="text-gray-600 text-sm">
                            {reviews[activeSlide].date}
                        </p>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    {[...Array(reviews[activeSlide].rating)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.951.69h3.462c.969 0 1.371.871.583 1.483l-3.118 3.118a1 1 0 00.035 1.488l.528 1.587a1 1 0 001.488.035l3.118-3.118c.792-.612.36-.96-.583-1.483H11.42a1 1 0 00-.951-.69l-1.07-3.292zM6 18a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    ))}
                </div>
                <p className="text-gray-700">{reviews[activeSlide].content}</p>
                <div className="flex items-center mt-4">
                    <span className="text-gray-500 mr-2">Source:</span>
                    <a
                        href="#"
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {reviews[activeSlide].source}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
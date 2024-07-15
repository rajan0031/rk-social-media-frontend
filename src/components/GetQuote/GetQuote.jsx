import React from 'react';
import houseImg from "../../assets/quote house.jpg"

function GetQuote() {
    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-8">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Trusted Denver Paint Contractor</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            We are Paint Denver, your most trusted local Denver painting company with over a decade of professional interior and exterior painting experience. Our mission is to create a positive impact in our community while providing our customers with a smooth, hassle-free painting experience. Feel good about choosing us as your painting contractor knowing that we have hundreds of 5-star reviews and perform monthly service projects that benefit the local Denver communities in which you live. From promptly answering your phone calls and emails, to being a resource for paint color selection, to following up after the paint dries, we don’t consider a job done until you’re completely satisfied.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                            Get a Free Quote
                        </button>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src={houseImg}
                            alt="House exterior"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetQuote;
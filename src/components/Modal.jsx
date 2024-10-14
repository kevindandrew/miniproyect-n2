import React, { useState } from 'react';

function Modal({ isOpen, onClose, onSearch }) {
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isGuestsOpen, setIsGuestsOpen] = useState(false);
    const [guestCount, setGuestCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [selectedLocation, setSelectedLocation] = useState("Whole, Finland");

    if (!isOpen) return null;

    const locations = ["Helsinki, Finland", "Turku, Finland", "Vaasa, Finland", "Oulu, Finland"];

    const handleSearchClick = () => {
        const searchParams = {
            location: selectedLocation,
            guests: guestCount + childrenCount,
        };
        console.log(guestCount)
        console.log(childrenCount)
        onSearch(searchParams);
        onClose();
    };

    return (
        <div className="fixed inset-0 flex bg-black bg-opacity-50 z-50">
            <div className="bg-white w-full md:h-4/5 flex flex-col items-center p-6 shadow-lg h-full">
                <div className="flex mb-7 justify-between items-center w-full">
                    <h2 className="text-xl font-bold">Edit your search</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
                        &times;
                    </button>
                </div>


                <div className="md:flex md:flex-row md:mb-4 md:gap-24 md:border md:border-black-500 w-full md:justify-between md:rounded-lg md:shadow-lg md:h-16 flex gap-8 flex-col">
                    <div className="relative w-2/5">
                        <button className='ml-0 w-full text-left md:ml-6' onClick={() => setIsLocationOpen(!isLocationOpen)}>
                            <strong>Location</strong><br />{selectedLocation}
                        </button>


                        {isLocationOpen && (
                            <div className="md:absolute md:left-0 md:mt-9 md:w-full md:z-10">
                                {locations.map((location, index) => (
                                    <button
                                        key={index}
                                        className="px-4 py-2 text-left hover:bg-gray-100 w-full flex gap-3"
                                        onClick={() => {
                                            setSelectedLocation(location);
                                            setIsLocationOpen(false);
                                        }}
                                    >
                                        {location}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="relative w-2/5">
                        <button className='w-full text-left' onClick={() => setIsGuestsOpen(!isGuestsOpen)}>
                            <strong>Guests</strong><br />{guestCount + childrenCount}
                        </button>


                        {isGuestsOpen && (
                            <div className="md:absolute md:left-0 md:mt-9 md:w-full md:z-10">
                                <div className="p-2">
                                    <div className="flex justify-between flex-col mb-2">
                                        <span className='text-left font-bold'>Adult</span>
                                        <p className='text-gray-400 mb-3 mt-3'>Age 13 or above</p>
                                        <div className="flex items-center">
                                            <button onClick={() => setGuestCount(Math.max(0, guestCount - 1))} className='border-black border h-6 w-6 flex items-center justify-center rounded-lg'>−</button>
                                            <span className="mx-2">{guestCount}</span>
                                            <button onClick={() => setGuestCount(guestCount + 1)} className='border-black border h-6 w-6 flex items-center justify-center rounded-lg'>+</button>
                                        </div>
                                    </div>
                                    <div className="flex justify-between flex-col mb-2">
                                        <span className='text-left font-bold'>Children</span>
                                        <p className='text-gray-400 mb-3 mt-3'>Age 2-12</p>
                                        <div className="flex items-center">
                                            <button onClick={() => setChildrenCount(Math.max(0, childrenCount - 1))} className='border-black border h-6 w-6 flex items-center justify-center rounded-lg'>−</button>
                                            <span className="mx-2">{childrenCount}</span>
                                            <button onClick={() => setChildrenCount(childrenCount + 1)} className='border-black border h-6 w-6 flex items-center justify-center rounded-lg'>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <button onClick={handleSearchClick} className="bg-red-500 text-white px-4 py-2 sm:rounded-r-lg md:w-1/5 flex items-center justify-center mt-96 md:mt-0 ml-48 md:ml-0 rounded-lg w-2/5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;

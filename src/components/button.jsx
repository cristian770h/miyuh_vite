import React, { useState } from 'react';
import TranslateComponent from './translate';

export default function FloatingButton() {
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isComponentVisible, setIsComponentVisible] = useState(false);

    const toggleButton = () => {
        setIsButtonVisible(!isButtonVisible);
        if (isComponentVisible) {
            setIsComponentVisible(false);
        }
    };

    const toggleComponent = () => {
        setIsComponentVisible(!isComponentVisible);
    };

    return (
        <div className="fixed bottom-0 right-0 mb-4 mr-4 flex items-end">
            <div
                className={`transition-all duration-500 ease-in-out ${isButtonVisible ? 'scale-100' : 'scale-0'}`}>
                <div
                    className={`transition-all duration-500 ease-in-out ${isComponentVisible ? 'scale-100' : 'scale-0'}`}>
                    <TranslateComponent />
                </div>
                <button
                    onClick={toggleComponent}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full z-10">
                    Traductor
                </button>
            </div>
            <button
                onClick={toggleButton}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-10">
                <i className="fas fa-arrow-left"></i>
            </button>
        </div>
    );
}
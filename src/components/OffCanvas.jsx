import { useEffect, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { useOffCanvasToggleContext, useOffCanvasContext } from "src/context/OffCanvasContext";
import { startAnimation } from "src/utils/startAnimation";

const OffCanvas = ({ offCanvasContent }) => {

    const isOpen = useOffCanvasContext();
    const toggleOffCanvas = useOffCanvasToggleContext();
    const [isClosing, setClosing] = useState(false);
    
    let showClass = isOpen ? 'block' : 'hidden';

    const closeOffCanvas = () => {
        setClosing(true);
    };

    useEffect(() => {
        if (!isClosing) {   
            document.querySelector('#black-screen').dataset.replace = '{ "opacity-0": "opacity-70" }';
            document.querySelector('#off-canvas').dataset.replace = '{ "-right-1/3": "right-0" }';
            // console.log('isOpen:',isOpen, 'isClosing:',isClosing);
        }

        if (isClosing) {
            // console.log(document.querySelector('#black-screen').dataset.replace);
            // document.querySelector('#black-screen').dateset.replace = '{ "opacity-70": "opacity-0" }';
            document.querySelector('#off-canvas').dataset.replace = '{ "right-0": "-right-1/3" }';
            
            setTimeout(() => {
                toggleOffCanvas();
                // console.log('isOpen:',isOpen, 'isClosing:',isClosing);
            }, 600);
        }

        startAnimation();

    }, [isClosing]);


    return (
        <div className={`fixed w-full h-full inset-0 z-50 ${showClass}`}>
          
            <div id="black-screen" 
                className={`fixed bg-gray-900 w-full opacity-0 h-full inset-x-0 top-0 transition-all ease-linear duration-100`} 
            >
            </div>
            
            <div id="off-canvas" 
                className="flex flex-col -right-1/3 lg:w-1/3 md:w-1/2 w-full h-full fixed top-0 py-4 bg-white dark:bg-gray-800 overflow-auto z-40 transition-all ease-in duration-200" 
                role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="navbartoggle" 
            >
                <div className="mb-5 mr-5 text-right">
                    <button 
                        className="text-3xl text-gray-800" 
                        onClick={closeOffCanvas}
                    >
                        <RiCloseFill />
                    </button>
                </div>
                <div className="flex flex-col justify-start">
                    { offCanvasContent }
                </div>    
            </div>

        </div>
    )
}

export default OffCanvas;
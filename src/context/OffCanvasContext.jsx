import React, { useContext, useState} from 'react';

const OffCanvasContext = React.createContext();
const OffCanvasToggleContext = React.createContext();

export function useOffCanvasContext() {
    return useContext(OffCanvasContext);
}

export function useOffCanvasToggleContext() {
    return useContext(OffCanvasToggleContext);
}

export function OffCanvasProvider({children}) {
    
    const [showOffCanvas, setShowOffCanvas] = useState(false);

    function toggleOffCanvas() {
        setShowOffCanvas(prevshowOffCanvas => !prevshowOffCanvas);
        // console.log(showOffCanvas);
    }

    return (
        <OffCanvasContext.Provider value={showOffCanvas}>
            <OffCanvasToggleContext.Provider value={toggleOffCanvas}>
                {children}
            </OffCanvasToggleContext.Provider>
        </OffCanvasContext.Provider>
    );
}
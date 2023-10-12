import { useState } from "react";

const ScrollPage = ({ children }) => {
    const [scrollPosition, setScrollPosition] = useState(1);

    const handleScroll = (e) => {
        setScrollPosition(scrollPosition + e.deltaY);
    };

    return (
        <div
            onWheel={handleScroll}
            className="h-screen overflow-hidden relative transition-transform duration-500 ease-in-out transform overflow-y-scroll"
            style={{
                height: "100vh",
                transform: `translateY(${-scrollPosition}px)`
            }}
        >
            {children}
        </div>
    )
}

export default ScrollPage
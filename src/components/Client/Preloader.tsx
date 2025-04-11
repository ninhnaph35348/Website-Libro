import { useEffect } from "react";

const Preloader = () => {
    useEffect(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add("loaded");
                setTimeout(() => {
                    preloader.style.display = "none";
                }, 600);
            }, 300); // hoặc 1000ms tùy bạn muốn chờ bao lâu
        }
    }, []);

    return (
        // Preloader start
        <div id="preloader" className="preloader" >
            <div className="animation-preloader">
                <div className="spinner">
                </div>
                <div className="txt-loading">
                    <span data-text-preloader="B" className="letters-loading">
                        B
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                        O
                    </span>
                    <span data-text-preloader="O" className="letters-loading">
                        O
                    </span>
                    <span data-text-preloader="K" className="letters-loading">
                        K
                    </span>
                    <span data-text-preloader="L" className="letters-loading">
                        L
                    </span>
                    <span data-text-preloader="E" className="letters-loading">
                        E
                    </span>
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg" />
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg" />
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg" />
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Preloader
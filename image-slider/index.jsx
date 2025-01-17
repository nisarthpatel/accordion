import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export const ImageSlider = ({ url, limit, page }) => {
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (getUrl) => {
        try {
            setLoading(true);

            const res = await axios.get(`${getUrl}?page=${page}&limit=${limit}`);
            const data = res.data;
            if (data) {
                setImages(data);
                setLoading(false);
                console.log(data);
            }
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (url !== "") fetchData(url);
    }, [url, page, limit]);

    if (loading) {
        return <div>Loading... Please wait while the images are being loaded.</div>;
    }

    if (error) {
        return <div>Error occurred: {error}</div>;
    }

    const handlePrevious = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    };

    const handleNext = () => {
        if (images.length > 0) {
            setCurrentSlide(
                currentSlide === images.length - 1 ? 0 : currentSlide + 1
            );
        }
    };
    console.log("Current slide:", currentSlide);

    return (
        <div className="container">
            <BsArrowLeftCircleFill
                onClick={handlePrevious}
                className="arrow arrow-left"
            />
            {images &&
                images.length > 0 &&
                images.map((item, index) => (
                    <img
                        key={item.id}
                        src={item.download_url}
                        className={`current-image ${currentSlide === index ? "" : "hide-current-image"
                            }`}
                    />
                ))}
            <BsArrowRightCircleFill
                onClick={handleNext}
                className="arrow arrow-right"
            />
            <span className="circle-indicator">
                {images && images.length
                    ? images.map((_, index) => (
                        <button
                            onClick={() => setCurrentSlide(index)}
                            key={index}
                            className={
                                currentSlide === index
                                    ? "current-indicator"
                                    : "current-indicator inactive-current-indicator"
                            }
                        ></button>
                    ))
                    : null}
            </span>
        </div>
    );
};

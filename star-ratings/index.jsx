import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

function StarRating({ noOfStars }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClickEvent = (getCurrentId) => {
        console.log(rating);
        setRating(getCurrentId);
    };

    const handleMouseEnter = (getCurrentId) => {
        setHover(getCurrentId);
    };

    const handleMouseLeave = () => {
        setHover(rating);
    };

    return (
        <div className="star">
            {[...Array(noOfStars)].map((_, index) => {
                index++;
                return (
                    <FaStar
                        key={index}
                        style={{ color: index <= (hover || rating) ? "orange" : "black" }}
                        onClick={() => handleClickEvent(index)}
                        onMouseMove={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                );
            })}
        </div>
    );
}

export { StarRating };

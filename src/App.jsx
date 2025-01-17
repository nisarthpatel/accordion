import { Color } from "../random-color/color";
import Accordion from "../accordion/Accordion";
import { StarRating } from "../star-ratings";
import { ImageSlider } from "../image-slider";

function App() {
  return (
    <>
      {/* <Accordion />; */}
      {/* <Color /> */}
      {/* <StarRating noOfStars={10} />
       */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={5} />
    </>
  );
}

export default App;

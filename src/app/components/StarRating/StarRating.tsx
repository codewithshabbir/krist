import { FaStar } from 'react-icons/fa';
import { FaStarHalfStroke } from "react-icons/fa6";
import { CiStar } from 'react-icons/ci';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStar = 5;
  const stars = [];

  for (let i = 0; i < totalStar; i++) {
    if (rating >= i + 1) {
      stars.push(<FaStar key={i} className="fill-yellow-500" />);
    } else if (rating > i && rating < i + 1) {
      stars.push(<FaStarHalfStroke key={i} className="fill-yellow-500" />);
    } else {
      stars.push(<CiStar key={i} className="fill-yellow-500" />);
    }
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
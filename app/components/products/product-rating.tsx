import { StarIcon as SolidStarIcon } from '@heroicons/react/24/solid';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/24/outline';

interface RatingProps {
    rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
    // Step 1: Calculate the number of full, half, and empty stars
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <div className="flex items-center">
            <div className="flex items-center">
                {/* Render full stars */}
                {[...Array(fullStars)].map((_, index) => (
                    <SolidStarIcon key={index} className="w-4 h-4 text-yellow-500" />
                ))}
                {/* Render half star if applicable */}
                {halfStar === 1 && (
                    <div className="relative w-4 h-4">
                        <SolidStarIcon className="absolute w-4 h-4 text-yellow-500" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                        <OutlineStarIcon className="absolute w-4 h-4 text-gray-300" style={{ clipPath: 'inset(0 0 0 50%)' }} />
                    </div>
                )}
                {/* Render empty stars */}
                {[...Array(emptyStars)].map((_, index) => (
                    <SolidStarIcon key={index} className="w-4 h-4 text-gray-300" />
                ))}
            </div>
            <div className="ml-1 text-xs font-semibold">
                {rating.toFixed(1)} <span className='hidden md:inline'>out of 5</span>
            </div>
        </div>
    );
};

export default Rating;
import React, { useState } from 'react';
import tailwindClasses from './tailwindClasses'; // Import your custom Tailwind classes here

interface IconProps {
  index: number;
  totalIcons: number;
  selectedIconIndex: number | null;
  onClick: () => void;
}

const Icon: React.FC<IconProps> = ({ index, totalIcons, selectedIconIndex, onClick }) => {
  const rotation = (360 / totalIcons) * index;
  const offset = (360 / totalIcons) * (selectedIconIndex || 0);

  const iconStyle = {
    transform: `rotate(${rotation - offset}deg) translate(0, -100px) rotate(${selectedIconIndex !== null ? offset - rotation : 0}deg)`,
  };

  return (
    <div
      className={tailwindClasses.icon}
      style={iconStyle}
      onClick={onClick}
    >
      {/* Display the index of the position */}
      Position {index + 1}
    </div>
  );
};

const IconCarousel: React.FC = () => {
  const [selectedIconIndex, setSelectedIconIndex] = useState<number | null>(null);
  const totalIcons = 8;

  const handleIconClick = (index: number) => {
    if (selectedIconIndex !== null) {
      const newIndex = (selectedIconIndex + 1) % totalIcons;
      setSelectedIconIndex(newIndex);
    } else {
      setSelectedIconIndex(index);
    }
  };

  return (
    <div className={tailwindClasses.carousel}>
      <div className={tailwindClasses.iconsContainer}>
        {[...Array(totalIcons)].map((_, index) => (
          <Icon
            key={index}
            index={index}
            totalIcons={totalIcons}
            selectedIconIndex={selectedIconIndex}
            onClick={() => handleIconClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default IconCarousel;

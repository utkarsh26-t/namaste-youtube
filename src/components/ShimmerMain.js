import React from 'react'
import { SHIMMER_CARD_COUNT } from '../utils/constants';
import ShimmerCard from './ShimmerCard';
import { useSelector } from 'react-redux';


const ShimmerMain = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  return (
    <div
      className={`grid ${
        isMenuOpen
          ? "md:grid-cols-2 xl:grid-cols-3"
          : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      }`}
    >
      {Array(SHIMMER_CARD_COUNT)
        .fill("")
        .map((e, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default ShimmerMain
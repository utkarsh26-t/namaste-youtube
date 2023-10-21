import React from 'react'
import { SHIMMER_CARD_COUNT } from '../utils/constants';
import ShimmerCard from './ShimmerCard';

const ShimmerMain = () => {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-3">
      {Array(SHIMMER_CARD_COUNT)
        .fill("")
        .map((e, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};

export default ShimmerMain
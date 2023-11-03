import React from 'react'
import { getDuration } from '../utils/helper';

const Duration = ({duration}) => {

  return (
    <span className="bg-neutral-900 opacity-90 font-medium text-slate-100 rounded-md absolute right-2 bottom-2 text-xs p-1">
      {getDuration(duration)}
    </span>
  );
}

export default Duration
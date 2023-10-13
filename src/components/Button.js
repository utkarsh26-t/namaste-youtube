import React from 'react'

const Button = (props) => {
  return (
    <button className="px-4 py-2 rounded-lg bg-neutral-800">
      {props.name}
    </button>
  );
}

export default Button
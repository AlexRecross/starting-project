import React from 'react';

export default function BtnSelector({ onSelect, children}) {
  return (
    <li>
      <button style={{  marginLeft: '5px'}} onClick={onSelect}>
        {children}
      </button>
    </li>
  )
}
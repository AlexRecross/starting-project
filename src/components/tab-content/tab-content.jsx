import React, { useState } from "react";
import BtnSelector from "./components/btn-selector";

const style = {
  display: 'flex',
  justifyContent: 'col',
  listStyleType: 'none',
}

export default function TabContent({ contentArray }) {
  const [ content, setContent ] = useState('Please select the topic')
  
  function handleSelect(selectedIndex) {
    setContent(contentArray[selectedIndex].content);
  }
  
  return (
    <div style={{ border: '1px solid black'}}>
      <ul style={style}>
        {contentArray.map((item, index) => {
          return <BtnSelector key={index} onSelect={() => handleSelect(index)}>{item.title}</BtnSelector>
        })}
      </ul>
      <main>{content}</main>
    </div>
    
  )
}
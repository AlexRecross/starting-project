import React from 'react';
import TabContent from "./components/tab-content/tab-content";

function Button({ className, children, ...attr }) {
  return (
    <button className={className} type="button" {...attr}>
      {children}
    </button>
  );
}

function App() {
  // const [isActive, setIsActive] = useState(true);

  const naPodumat = [{
    title: 'React',
    content: 'React. Lorem ipsum dolor sit amet, consectetur adipiscing elit,'
      + ' sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
      + 'Arcu ac tortor dignissim convallis aenean et tortor.'
      + ' Mattis pellentesque id nibh tortor id aliquet lectus.'
  },
  {
    title: 'Redux',
    content: 'Redux. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        + ' Nec ullamcorper sit amet risus nullam eget felis eget. '
        + 'Quis varius quam quisque id diam vel quam elementum.'
        + ' Mattis pellentesque id nibh tortor id aliquet lectus.'
  },
  {
    title: 'Router',
    content: 'Router. Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        + ' Dui id ornare arcu odio. In mollis nunc sed id.'
        + 'Quis varius quam quisque id diam vel quam elementum.'
  }];

  
  // function handleClick() {
  //   setIsActive(prevState => !prevState);
  // }
  return (
    <div>
      <p>Hello React</p>
      <Button
        // onClick={handleClick}
      >
        btnName
      </Button>
      <TabContent
        contentArray={naPodumat}
      />
    </div>
  );
}

export default App;

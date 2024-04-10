const SVGCircle = ({...props}) => {
  return (
    <svg 
      viewBox="0 0 120 120" 
      version="1.1"
      xmlns="https://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="60" cy="60" r="50" fill="none" stroke="#FB971E" strokeWidth="0.5"/>
    </svg>
  );
};

export default SVGCircle;

const SVGHistory = ({...props}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none"
      {...props}
    >
      <path d="M19 22V9.5M11.5 22V2M4 22V14.5" 
        stroke="white" 
        stroke-opacity="0.74" 
        stroke-width="3" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SVGHistory;

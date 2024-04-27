const SVGDashboard = ({...props}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="none"
      {...props}
    >
      <path d="M1 1H7.75V10H1V1ZM1 14.5H7.75V19H1V14.5ZM12.25 10H19V19H12.25V10ZM12.25 1H19V5.5H12.25V1Z" 
        stroke="white"
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SVGDashboard;

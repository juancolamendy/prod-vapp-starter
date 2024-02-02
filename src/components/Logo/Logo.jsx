const Logo = ({extClass}) => {
  return (
  <div className="flex justify-center items-center">
    <svg className={extClass} viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line stroke="currentColor" strokeWidth="1" strokeLinecap="round" x1="1" y1="1" x2="0.999999" y2="21"/>
      <text stroke="currentColor" strokeWidth="1" fill="black" strokeLinecap="round" x="3.993" y="17.449" style={{whiteSpace: 'pre', fontSize: '18.7px'}}>P</text>
    </svg>
    <span className="text-lg font-bold text-gray-900">Product Domain AI</span>
  </div>
  )
}

export default Logo;

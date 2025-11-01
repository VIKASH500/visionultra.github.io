const Logo = ({ className = "" }) => (
  <svg 
    className={className}
    width="40" 
    height="40" 
    viewBox="0 0 512 512" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="512" height="512" rx="256" className="fill-[var(--meta-blue)]"/>
    <path 
      d="M169.778 352H342.222C360.778 352 376 336.778 376 318.222V193.778C376 175.222 360.778 160 342.222 160H169.778C151.222 160 136 175.222 136 193.778V318.222C136 336.778 151.222 352 169.778 352Z" 
      stroke="currentColor" 
      strokeWidth="24" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M256 208V304M208 256H304" 
      stroke="currentColor" 
      strokeWidth="24" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M208 208L304 304M304 208L208 304" 
      stroke="currentColor" 
      strokeWidth="24" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      opacity="0.5"
    />
  </svg>
);

export default Logo;
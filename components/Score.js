export const Score = ({ children, className, ...props }) => (
  <div
    className={
      (className,
      ` rounded-full bg-teal-100 text-teal-900 leading-5 px-2 py-0.5 flex items-center space-x-1`)
    }
    {...props}
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 5v14M18 11l-6-6M6 11l6-6" />
    </svg>
    {children}
  </div>
)

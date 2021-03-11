export const PageDescription = ({ children, ...props }) => (
  <p
    className="my-3 text-base text-gray-500 sm:my-5 sm:text-lg md:text-xl lg:mx-0"
    {...props}
  >
    {children}
  </p>
)

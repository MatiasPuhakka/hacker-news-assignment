export const PageDescription = ({ children, ...props }) => (
  <p
    className="mt-3 mb-8 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl lg:mx-0"
    {...props}
  >
    {children}
  </p>
)

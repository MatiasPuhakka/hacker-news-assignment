export const PageTitle = ({ children, ...props }) => (
  <h1
    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
    {...props}
  >
    {children}
  </h1>
)

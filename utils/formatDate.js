export const formatDate = (date) => {
  if (!date) return ""
  return new Intl.DateTimeFormat("fi-FI").format(new Date(date * 1000))
}

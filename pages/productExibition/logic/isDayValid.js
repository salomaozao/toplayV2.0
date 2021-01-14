import validDays from "./validDays"

const isDayValid = (day) => (validDays.includes(day) ? true : false)

export default isDayValid

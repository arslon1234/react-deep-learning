import { formatString } from "../utils/helper"
const FirstComponent = () => {
  const handleFormat =()=>{
    const res = formatString(12)
    console.log(res)
  }
  return (
    <div>
      <h1>FirstComponent-1</h1>
      <button onClick={handleFormat}>format</button>
    </div>
  )
}

export default FirstComponent

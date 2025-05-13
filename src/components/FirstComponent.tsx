import { formatString } from "../utils/helper"
const FirstComponent = () => {
  const handleFormat =()=>{
    const res = formatString(12)
    console.log(res)
  }
  return (
    <div>
      <h1>FirstComponent</h1>
      <button onClick={handleFormat}>format</button>
    </div>
  )
}

export default FirstComponent

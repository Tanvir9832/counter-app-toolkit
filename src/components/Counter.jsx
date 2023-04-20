import { useSelector } from "react-redux"


const Counter = () => {
    const counter = useSelector(state=>state.counter.countState);
    console.log(counter);
  return (
    <div>
        <h2>{counter}</h2>
    </div>
  )
}

export default Counter
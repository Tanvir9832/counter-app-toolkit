import { useDispatch } from "react-redux";
import {increment , decrement , incrementByRandomNumber ,decrementByRandomNumber ,reset} from '../redux/reducers/counterSlice'

const AllButtons = () => {
    const dispatch = useDispatch();

    //!increment
    const incrementHandle =()=>{
        dispatch(increment())
    }

    //!decrement
    const decrementHandle =()=>{
        dispatch(decrement())
    }

    //!incrementByRandomNumber
    const incrementByRandomNumberHandle =()=>{
        const randomNumber = Math.floor(Math.random() * 10);
        dispatch(incrementByRandomNumber(randomNumber))
    }

    //!decrementByRandomNumber
    const decrementByRandomNumberHandle =()=>{
        const randomNumber = Math.floor(Math.random()*10);
        dispatch(decrementByRandomNumber(randomNumber))
    }

    //!reset
    const resetHandle =()=>{
        dispatch(reset());
    }

  return (
    <div>
      <button onClick={incrementHandle}> increment </button>
      <button onClick={decrementHandle}> decrement </button>
      <button onClick={incrementByRandomNumberHandle}> incrementByRandomNumber </button>
      <button onClick={decrementByRandomNumberHandle}> decrementByRandomNumber </button>
      <button onClick={resetHandle}> reset </button>
    </div>
  );
};

export default AllButtons;

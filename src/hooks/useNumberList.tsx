import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const [list, setList] = useState<Array<number>>(initialArray)

  const appendStart = (val: number) => {
    setList((prev) => {
      return [val, ...prev];
    })
  }

  const appendEnd = (val: number) => {
    setList(prev => {
      return [...prev, val];
    })
  }

  const popStart = () => {
    setList(prev => {
      prev.shift()
      return [...prev];
    })
  }

  const popEnd= () => {
    setList(prev => {
      prev.pop()
      return [...prev]
    });
  }
  const clear= () => {
    setList(prev => [])
    console.log('clearing')
  }
  const reset= () => {
    setList(prev => [...initialArray])
  }

  return {
    list,
    appendEnd,
    appendStart,
    clear,
    popStart,
    popEnd,
    reset
  }
};

export default useNumberList;

import { useEffect, useState } from "react";

const useLocalStorage_fail = (variableName, variableValue) => {
    const [varValue, setVarValue] = useState(variableValue)

    const setValue = () => {
        setVarValue(variableValue);
        localStorage.setItem(variableName, variableValue);
    }
    
    useEffect(() => {
        console.log('set value');
        setValue();
    },[varValue])

    return ( [varValue, setVarValue] );
}

const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
      try {
        // Retrieve item from localStorage, parse if stored as JSON
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        // Gracefully handle potential errors during parsing
        console.error(`Error retrieving item from localStorage for key: ${key}`, error);
        return initialValue;
      }
    });
  
    useEffect(() => {
      // Store updated value in localStorage
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]); // Ensure dependency on both value and key
  
    return [value, setValue];
  };
 
export default useLocalStorage;
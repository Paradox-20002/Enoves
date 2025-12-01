import { useState, useEffect } from "react";
export default function TypingEffect( { text, speed = 50 } ) {
  const [ displayText, setDisplayText ] = useState( "" );
  useEffect( () => {
    let index = 0;
    const interval = setInterval( () => {
      setDisplayText( text.slice( 0, index ) );
      index++;
      if ( index > text.length ) {
        clearInterval( interval );
      }

    }, speed );
    return () => clearInterval( interval );
  }, [ text, speed ] );

  return (
    <h2 className="text-[12px] font-italic text-gray-300">
      { displayText }
      <span className="animate-pulse">|</span>
    </h2>
  );
}
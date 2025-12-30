// usetypingeffect.js
import { useState, useEffect } from 'react';

// Use a NAMED EXPORT (as you imported it that way)
export const useTypingEffect = ( text, delay = 10, startDelay = 0 ) => {
  const [ displayedText, setDisplayedText ] = useState( '' );
  const [ isTyping, setIsTyping ] = useState( false );
  const [ currentIndex, setCurrentIndex ] = useState( 0 );

  // 1. Handle Initial Start Delay
  useEffect( () => {
    const initialTimer = setTimeout( () => {
      setIsTyping( true );
      setCurrentIndex( 0 ); // Ensure we start at 0
      setDisplayedText( '' );
    }, startDelay );

    return () => clearTimeout( initialTimer );
  }, [ startDelay, text ] ); // Dependency on 'text' ensures reset if text changes

  // 2. Typing Logic
  useEffect( () => {
    // Only run if we are actively typing and haven't finished the string
    if ( !isTyping || currentIndex >= text.length ) {
      setIsTyping( false );
      return;
    }

    const typingTimer = setTimeout( () => {
      // Use the functional form for setDisplayedText to guarantee the latest state
      setDisplayedText( ( prev ) => prev + text[ currentIndex ] );

      // Increment index for the next run
      setCurrentIndex( ( prev ) => prev + 1 );
    }, delay );

    // Cleanup function
    return () => clearTimeout( typingTimer );

  }, [ text, delay, currentIndex, isTyping ] ); // Dependencies trigger re-run

  // 3. Return the required properties
  return {
    displayedText,
    isTyping,
    isDone: !isTyping && currentIndex === text.length,
  };
};
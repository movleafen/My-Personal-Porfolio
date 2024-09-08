'use client'
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, isMulti }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentString, setCurrentString] = useState(text[0]);

    useEffect(() => {
        if (currentIndex < currentString.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + currentString[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
      
          return () => clearTimeout(timeout);
        }
        if(isMulti) {
            if(currentIndex == currentString.length && text.length) {
                setTimeout(() => {
                    text.shift();
                    if(text.length) {
                        setCurrentString(text[0]);
                        setCurrentText('');
                        setCurrentIndex(0);
                    }
                }, 800)
                
                
            }
        }
        
      }, [currentIndex, currentString, delay, text]);

    return <span>{currentText}</span>;
};

export default Typewriter;
'use client'
import React, { useState, useEffect } from 'react';

const Blinking = ({delay}) => {
    const [isBlink, setBlink] = useState(false);
    useEffect(()=> {
        const timeout = setTimeout(() => {
            setBlink(!isBlink);
        }, delay);

        return () => clearTimeout(timeout);
        
    }, [isBlink])

    if(isBlink)
        return '|'
}

export default Blinking;
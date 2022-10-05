import React, { useState, useCallback, useEffect, useRef } from 'react';

import {
    Background,
    Brand,
} from './styles';

import logo from '../../../../assets/img/logo.png';
 
interface IProps{
    isActive:Boolean|undefined
}
const LoadingComponent: React.FC<IProps> = ({isActive}) => {
    return <>
    {(isActive&&(
        <Background>
                <Brand>
                    <span className="content">
                        <span className="icon">
                            <img src={logo} />
                        </span>
                        <span className="spin"></span>
                        <span className="spin2"></span>
                        <span className="spin3"></span>
                    </span>
                    
                </Brand>
               
        </Background>
    )
    )}
    </>
};
export default LoadingComponent;

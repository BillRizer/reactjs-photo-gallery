import React from 'react';

import {
    Background,
    Brand,
} from './styles';

import logo from '../../../../assets/img/logo.png';
import { useTranslation } from 'react-i18next';
 
interface IProps{
    isActive:Boolean|undefined
}
const LoadingComponent: React.FC<IProps> = ({isActive}) => {
    const {t} = useTranslation()
    return <>
    {(isActive&&(
        <Background data-testid="loading-bg">
                <Brand data-testid="loading-brand">
                    <span className="content">
                        <span className="icon">
                            <img src={logo} alt="loading"/>
                            <div className='message'>{t('loading')}</div>
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

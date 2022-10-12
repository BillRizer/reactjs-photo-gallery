import React from 'react';

import {
    Background,
    Modal,
    Title,
} from './styles';

import { useTranslation } from 'react-i18next';
import { Button } from '../Button';
 
interface IProps{
    isActive:Boolean|undefined
}
const ModalComponent: React.FC<IProps> = ({isActive}) => {
    const {t} = useTranslation()
    return <>
    {(isActive&&(
        <Background>
                <Modal>
                    <Title>My title</Title>
                    static text
                </Modal>
        </Background>
    )
    )}
    </>
};
export default ModalComponent;

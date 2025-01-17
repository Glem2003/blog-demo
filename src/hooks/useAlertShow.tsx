import { useState, useEffect } from 'react'

// type
import { UseAlertShowProps } from '../types/HooksProps';

const useAlertShow = ({ isError, onClearError, isMessage, onClearMessage }: UseAlertShowProps) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        if (isError) {
            setShow(true)
        }
    }, [isError])

    useEffect(() => {
        if (isMessage) {
            setShow(true)
        }
    }, [isMessage])

    const handleClose = () => {
        setShow(false);
        if (onClearError) {
            onClearError();
        }

        if (onClearMessage) {
            onClearMessage();
        }
    };

    return { show, setShow, handleClose }
}

export default useAlertShow
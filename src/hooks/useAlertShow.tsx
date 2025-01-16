import { useState, useEffect } from 'react'

// type
import { UseAlertShowProps } from '../types/HooksProps';

const useAlertShow = ({ isError, onClearError }: UseAlertShowProps) => {
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        if (isError) {
            setShow(true)
        }
    }, [isError])

    const handleClose = () => {
        setShow(false);
        if (onClearError) {
            onClearError();
        }
    };

    return { show, setShow, handleClose }
}

export default useAlertShow
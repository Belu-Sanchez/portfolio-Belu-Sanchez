import { FC } from 'react';
import Props from './types';


const Main: FC<Props> = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

export { Main };
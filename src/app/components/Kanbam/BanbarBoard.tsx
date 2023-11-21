import React, { ReactNode } from 'react';
import Kanbam from './Kanbam';

interface KanbamBoardProps {
    children: ReactNode;
}

const KanbamBoard: React.FC<KanbamBoardProps> = ({ children }) => (
    <div className="flex flex-row gap-2 bg-blue-950 w-full min-h-screen justify-center">

        <Kanbam type='ABERTO'>{children}</Kanbam>
        <Kanbam type='FAZENDO'>{children}</Kanbam>
        <Kanbam type='PAUSADO'>{children}</Kanbam>
        <Kanbam type='CONCLUIDO'>{children}</Kanbam>
    </div>
);

export default KanbamBoard;

// ATIVO,
// DESATIVADO,
// FAZENDO,
// PAUSADO,
// CANCELADO,
// ABERTO

import React, { ReactNode } from 'react';
import Kanbam from './Kanbam';
import { Status } from '@/app/@types/TypesList';

interface KanbamBoardProps {
    children: ReactNode;
}

const KanbamBoard: React.FC<KanbamBoardProps> = ({ children }) => (
    <div className="flex flex-row gap-2 bg-blue-950 w-full min-h-screen justify-center">

        <Kanbam type={Status.ABERTO}>{children}</Kanbam>
        <Kanbam type={Status.FAZENDO}>{children}</Kanbam>
        <Kanbam type={Status.PAUSADO}>{children}</Kanbam>
        <Kanbam type={Status.CONCLUIDO}>{children}</Kanbam>
    </div>
);

export default KanbamBoard;

// ATIVO,
// DESATIVADO,
// FAZENDO,
// PAUSADO,
// CANCELADO,
// ABERTO

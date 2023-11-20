import React, { ReactNode } from 'react';
import Kanbam from './Kanbam';

interface KanbamBoardProps {
    children: ReactNode;
}

const KanbamBoard: React.FC<KanbamBoardProps> = ({ children }) => (
    <div className="flex flex-row gap-2">
        <Kanbam>{children}</Kanbam>
    </div>
);

export default KanbamBoard;

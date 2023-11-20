import React, { ReactNode } from 'react';

interface KanbamProps {
    children: ReactNode;
}

const Kanbam: React.FC<KanbamProps> = ({ children }) => (
    <div className="flex">{children}</div>
);

export default Kanbam;

import React, { ReactNode } from 'react';

interface MainProps {
    children: ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        {children}
    </div>
);

export default Main;
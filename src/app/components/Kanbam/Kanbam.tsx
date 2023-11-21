
import React, { ReactNode } from 'react';
import Todo from '../Todo/Todo';

interface KanbamProps {
    children: ReactNode;
    type: string;
}

const Kanbam: React.FC<KanbamProps> = ({ type }) => (
    <div className="flex"><Todo type={type} /></div>

);

export default Kanbam;

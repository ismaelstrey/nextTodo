import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import Message from '../message/Message';
interface MainProps {
    children: ReactNode;
}
const Main: React.FC<MainProps> = ({ children }) => (
    <div className="flex min-h-screen flex-col items-center justify-between ">
        <Toaster duration={3000} richColors dir='rtl' position='top-right' />
        {children}
    </div>
);
export default Main;
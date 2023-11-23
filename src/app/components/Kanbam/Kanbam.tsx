import React from 'react';
import Todo from '../Todo/Todo';
import { color } from '@/app/helper/color';
import { todoTypesProps } from '@/app/@types/TypesList';


const Kanbam: React.FC<todoTypesProps> = ({ type }) => <div className={`flex flex-col gap-1 rounded-sm m-2 p-1 ${color(type)}`}>
    <span className={`flex items-center justify-center p-2 text-white text-xl ${color(type)}`}>{type}</span>
    <Todo type={type} />
</div>

export default Kanbam;

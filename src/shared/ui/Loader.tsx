import {Loader} from 'lucide-react';
import {LoaderProps} from '../../types/types';

export const PreLoader = ({size = 20, title, sub = true}: LoaderProps) => {
  return (
    <div className='loader'>
      <Loader size={size} className='loader__item' />

      <div className='loader__text'>
        <p className='loader__text--title'>{title}</p>
        {sub && <p className='loader__text--sub'>Simple and Fast</p>}
      </div>
    </div>
  );
};

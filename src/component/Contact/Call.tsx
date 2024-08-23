import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { ReactNode } from 'react';

interface ICall {
    icon: FontAwesomeIconProps["icon"];
    children: ReactNode;
    
 }
export default function Call( {icon , children} :ICall) {
  return (
    <div>
          <FontAwesomeIcon icon={icon} className="block  w-6 h-6 mb-1" />
          {children}
    </div>
  );
}

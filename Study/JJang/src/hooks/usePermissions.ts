import {useEffect} from 'react';
import {checkAllPermissions} from '../utils/checkAllPermissions';

const usePermissions = () => {
  useEffect(() => {
    checkAllPermissions();
  }, []);
};

export default usePermissions;

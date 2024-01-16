import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../Utilities/Firebase';
import { addUserDetails, removeUserDetails } from '../Redux Store/CreateSlice';

const useAuthentic = (desti) => {
    const navigate = useNavigate();
    const[sign,setSign]=useState(true)
    const dispatch = useDispatch();
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { email, uid, displayName } = user;
          dispatch(
            addUserDetails({ email: email, uid: uid, displayName: displayName })
          );
          navigate("/browse/"+desti);
          setSign(false);
        } else {
          dispatch(removeUserDetails());
          navigate("/");
        }
      });
    }, []);
}

export default useAuthentic
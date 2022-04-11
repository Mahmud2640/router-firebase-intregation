import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);

const RequireAuth = ({children}) => {
   const [user] = useAuthState(auth);
   if (!user){ <Navigate to="/login"></Navigate>

   }

   return (
      <div>
         
      </div>
   );
};

export default RequireAuth;
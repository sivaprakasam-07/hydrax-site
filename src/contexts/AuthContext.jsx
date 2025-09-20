import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged,
  signOut as firebaseSignOut
} from 'firebase/auth';
import toast from 'react-hot-toast';
import { auth } from '../config/firebase';

// Create the authentication context
const AuthContext = createContext({});

// Hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sign out function
  const signOut = async () => {
    try {
      setError(null);
      await firebaseSignOut(auth);
      toast.success('👋 Signed out successfully!');
    } catch (error) {
      setError(error.message);
      toast.error('Failed to sign out');
      throw error;
    }
  };

  // Clear error function
  const clearError = () => {
    setError(null);
  };

  // Listen for authentication state changes
  useEffect(() => {
    let isInitialLoad = true;
    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const previousUser = currentUser;
      setCurrentUser(user);
      setLoading(false);

      // Show welcome toast only for new logins (not on initial load)
      if (!isInitialLoad && user && !previousUser) {
        const firstName = user.displayName?.split(' ')[0] || 'there';
        toast.success(`🎉 Welcome back, ${firstName}!`, {
          duration: 5000,
          style: {
            background: 'rgba(0, 194, 255, 0.1)',
            border: '1px solid rgba(0, 194, 255, 0.5)',
            color: '#00C2FF',
            fontWeight: '600',
          },
        });
      }
      
      isInitialLoad = false;
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    loading,
    error,
    signOut,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
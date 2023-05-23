import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                googleLogin: async () => {
                    try {
                        // Get the users ID token
                        const { idToken } = await GoogleSignin.signIn();

                        // Create a Google credential with the token
                        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                        // Sign-in the user with the credential
                        await auth().signInWithCredential(googleCredential);

                    }
                    catch (e) {
                        console.log(e);
                    }
                },
                logout : async () => {
                    try {
                      // Sign out from Firebase authentication
                      await auth().signOut();
                
                      // Sign out from Google Sign-In
                      await GoogleSignin.signOut();
                
                      // Reset the user state
                      setUser(null);
                    } catch (error) {
                      console.log(error);
                    }
                  }
            }}

        >
            {children}
        </AuthContext.Provider >
    );
}
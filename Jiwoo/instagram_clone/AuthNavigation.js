
import React, { useEffect, useState } from 'react'
import { SignedInStack, SignedOutStack } from './navigation'
import firebase from './firebase';

const AuthNavigation = () => {
    const [currentUser, serCurrentUser] = useState(null);

    const useHandler = user =>
        user ? serCurrentUser(user) : serCurrentUser(null)

    useEffect(
        () => {
            firebase.auth().onAuthStateChanged(user => useHandler(user));
        },
        []
    );
    return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
}

export default AuthNavigation
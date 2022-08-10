
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export function LoginCuenta() {
    
  
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    

    signInWithPopup(auth, provider)
    
      .then((result) => {
        
        
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        
        const user = result.user;
        sessionStorage.setItem("mailUsuarioSiarinde", user.email);
        sessionStorage.setItem("usuarioSiarinde", user.displayName);
        
      }).catch((error) => {
        
        const errorCode = error.code;
        const errorMessage = error.message;
        
        const email = error.customData.email;
        
        const credential = GoogleAuthProvider.credentialFromError(error);
        
      });
  
      
  }

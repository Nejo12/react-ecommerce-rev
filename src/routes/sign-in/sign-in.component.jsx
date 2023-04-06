import { sign_in_with_popup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await sign_in_with_popup()
    console.log(user)

    const userDocRef = await createUserDocumentFromAuth(user)
    console.log('userDocRef in sign_in: ', userDocRef)
  }

  return (
    <>
      <h1>sign-in component</h1>
      <button onClick={ logGoogleUser }>
        Sign in with Google Popup
      </button>
    </>
  )
}

export default SignIn
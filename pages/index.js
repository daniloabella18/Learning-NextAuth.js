import { signIn, signOut, useSession } from 'next-auth/client'
import { useEffect } from 'react'

export default function Page() {
  const [session, loading] = useSession()

  useEffect(() => {
    console.log("session: ", session)
    console.log("loading: ", loading)
    console.log("localstorage: ", localStorage)
    console.log("sessionStorage: ", sessionStorage)

    console.log("next-auth.csrf-token: ", getCookie('next-auth.csrf-token'))
    console.log("document.cookie: ", document.cookie.split(';'))

  }, [session, loading])

  const getCookie = (cookie_name) => {
    // Construct a RegExp object as to include the variable name
    const re = new RegExp(`(?<=${cookie_name}=)[^;]*`);
    try {
      return document.cookie.match(re)[0];	// Will raise TypeError if cookie is not found
    } catch {
      return "this-cookie-doesn't-exist";
    }
  }

  return <>
    {!session && <>
      Not signed in <br />
      <button onClick={() => signIn("google")}>Sign in</button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>}
  </>
}
import { useState, useEffect, useRef } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchSignIn } from '../redux/auth-slice'
import { FormField } from './FormField'
// import { FormFieldPassword } from './FormFieldPassword'
import { Button } from './Button'
// import { texts } from '../config/texts'

export function FormSignIn() {
  // const dispatch = useDispatch()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const userEmailInputRef = useRef(null)
  // const { lang } = useSelector(state => state.language)

  useEffect(() => {
    setTimeout(() => {
      userEmailInputRef.current.focus()
    }, 50)
  }, [userEmailInputRef])

  const handleChangeUserEmail = ({ target }) => setUserEmail(target.value)
  const handleChangeUserPassword = ({ target }) => setUserPassword(target.value)
  const handleSubmit = (event) => {
    event.preventDefault()

    const body = {
      email: userEmail,
      password: userPassword
    }

    dispatch(fetchSignIn(body))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <FormField
          ref={userEmailInputRef}
          label="Email"
          // label={texts[lang].formSignIn.userEmail.label}
          name="userEmail"
          type="email"
          placeholder="Email"
          // placeholder={texts[lang].formSignIn.userEmail.placeholder}
          value={userEmail}
          onChange={handleChangeUserEmail}
          id="userEmail" />
      </div>
      <div className="mb-3">
        <FormField
          label="Password"
          // label={texts[lang].formSignIn.userPassword.label}
          name="userPassword"
          type="password"
          placeholder="Password"
          // placeholder={texts[lang].formSignIn.userPassword.placeholder}
          value={userPassword}
          onChange={handleChangeUserPassword}
          id="userPassword" />
      </div>
      {/* <div className="mb-4">
        <FormFieldPassword
          label={texts[lang].formSignIn.userPassword.label}
          name="userPassword"
          type="password"
          placeholder={texts[lang].formSignIn.userPassword.placeholder}
          value={userPassword}
          onChange={handleChangeUserPassword}
          id="userPassword" />
      </div> */}
      <Button
        type="submit"
        text="Submit"/>
        {/* text={texts[lang].formSignIn.button}/> */}
    </form>
  )
}

// TODO: redirect after Sign In

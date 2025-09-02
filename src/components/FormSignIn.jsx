import { useState, useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSignIn } from '../redux/auth-slice'
import { FormField } from './FormField'
// import { FormFieldPassword } from './FormFieldPassword'
import { Button } from './Button'
// import { texts } from '../config/texts'

export function FormSignIn() {
  const dispatch = useDispatch()
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const userNameInputRef = useRef(null)
  // const { lang } = useSelector(state => state.language)
  const { userId } = useSelector(state => state.auth)

  useEffect(() => {
    setTimeout(() => {
      userNameInputRef.current.focus()
    }, 50)
  }, [userNameInputRef])

  const handleChangeUserName = ({ target }) => setUserName(target.value)
  const handleChangeUserPassword = ({ target }) => setUserPassword(target.value)
  const handleSubmit = (event) => {
    event.preventDefault()

    const body = {
      username: userName,
      password: userPassword
    }

    dispatch(fetchSignIn(body))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <FormField
          ref={userNameInputRef}
          label="User name"
          // label={texts[lang].formSignIn.userEmail.label}
          name="userName"
          type="text"
          placeholder="User name"
          // placeholder={texts[lang].formSignIn.userEmail.placeholder}
          value={userName}
          onChange={handleChangeUserName}
          id="userName" />
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
        text="Submit" />
      {/* text={texts[lang].formSignIn.button}/> */}
    </form>
  )
}

// TODO: redirect after Sign In
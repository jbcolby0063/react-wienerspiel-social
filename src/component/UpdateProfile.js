import React, { useRef, useState }from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth() // access directly to signup function from the AuthContext.Provider value
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault() // prevents any event action

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match') // reason for return is to exit out of function immediately
        }

        const promises = []
        setLoading(true) // disable submit button until promise finish
        setError("")
        if (emailRef.current.value !== currentUser.email) { // if email changes, push that promise to promises array
            promises.push(updateEmail(emailRef.current.value)) 
        }
        if (passwordRef.current.value) { // if password changes, push that promise to promises array
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => { // if promises are successful
            history.push('/')
        }).catch(() => { // if fails
            setError("Failed to update account")
        }).finally(() => { 
            setLoading(false)
        })
    }
    
    return (
    <>
         <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Update Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>} 
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required defaultValue={currentUser.email} />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same" />
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same" />
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Update</Button>
                </Form>
            </Card.Body>
         </Card>   
         <div className="w-100 text-center mt-2">
            <Link to="/">Cancel</Link>
         </div>
    </>
    )
}

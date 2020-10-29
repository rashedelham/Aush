import React from 'react'
import { 
    FormContent,
    FormWrap,
    Icon,
    Container,
    Form,
    FormH1,
    FormLabel,
    FormButton,
    FormInput,
    Text 
} from './SigninElement'

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>Back</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Submit</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin

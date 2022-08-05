import React from 'react'
import {
    Box,
    Button, Checkbox,
    Container, FormControl, FormErrorMessage, FormLabel,
    Heading,
    HStack, Input,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue
} from '@chakra-ui/react'
import {PasswordField} from "../../components/index";
import { Formik } from 'formik'
import API from '../../services/api';
import { useDispatch } from 'react-redux';
import { login } from '../../features/auth/authSlice';

const Login = () => {
  const dispatch = useDispatch()

  return (
    <Container  maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
        <Stack spacing="8">
            <Stack spacing={6}>
                {/*Logo*/}
                <Stack  spacing={{ base: '2', md: '3' }} textAlign="center">
                    <Heading size={useBreakpointValue({base: 'xs', md: 'sm'})}>
                        Welcome to
                    </Heading>
                    <HStack spacing={1} justify="center">
                        <Text>Don't have account?</Text>
                        <Button variant="link" colorScheme="blue">
                            Sign up
                        </Button>
                    </HStack>
                </Stack>
            </Stack>
        </Stack>
      <Box
          py={{base: '0', sm: '8'}}
          px={{base: '4', sm: '10'}}
          bg={useBreakpointValue({base: 'transparent', sm: 'bg-surface'})}
          borderRadius={{base: '8', sm:'10'}}
          boxShadow={{ base: 'none', sm: useColorModeValue('md', 'md-dark') }}
      >
         <Stack spacing={6}>
             <Stack spacing={5}>
                 <Formik
                    initialValues={{username: '', password: ''}}
                    validate={values => {
                        const errors = {}
                        if(!values.username){
                            errors.username = 'Bidang username tidak boleh kosong'
                        }

                        if(!values.password){
                            errors.password = "Bidang password tidak boleh kosong"
                        }

                        return errors
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        dispatch(login(values))
                        setSubmitting= true
                    }}
                 >
                     {({value, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                         <form action="" onSubmit={handleSubmit}>
                             <FormControl isRequired isInvalid={errors.username && touched.username}>
                                 <FormLabel htmlFor="username">Username</FormLabel>
                                 <Input
                                     type="text"
                                     name="username"
                                     id="username"
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     autoComplete="off"/>
                                 {(errors.username && touched.username && (<>
                                     <FormErrorMessage> { errors.username }</FormErrorMessage>
                                 </>))}
                             </FormControl>
                             <PasswordField
                                 isRequired
                                 isInvalid={errors.password && touched.password}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 errorMessage={errors.password}
                             />
                             <Stack spacing={6} my={5}>
                                 <Stack spacing={8}>
                                     <HStack spacing={10} justify="space-between">
                                         <Checkbox defaultChecked>Remember me</Checkbox>
                                         <Button size="sm" variant="link" colorScheme="blue">
                                             forgot password?
                                         </Button>
                                     </HStack>
                                 </Stack>
                                 <Stack spacing={6}>
                                     <Button type="submit" colorScheme="blue">Sign in</Button>
                                 </Stack>
                             </Stack>
                         </form>
                     )}
                 </Formik>

             </Stack>
         </Stack>
      </Box>
    </Container>
  )
}

export default Login
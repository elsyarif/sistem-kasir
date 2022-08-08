import {forwardRef, useRef} from 'react'
import {
    FormControl, FormErrorMessage,
    FormLabel,
    IconButton, Input,
    InputGroup,
    InputRightElement,
    useDisclosure,
    useMergeRefs
} from "@chakra-ui/react";
import { FaEyeSlash, FaEye } from 'react-icons/fa'

const PasswordField = forwardRef((props, ref) =>{
    const { isRequired, isInvalid, errorMessage,  ...rest } = props

    const { isOpen, onToggle } = useDisclosure()
    const inputRef = useRef(null)
    const mergeRef = useMergeRefs(inputRef, ref)

    const onClickReveal = () => {
        onToggle()

        if(inputRef.current){
            inputRef.current.focus({
                preventScroll: true
            })
        }
    }

    return(
        <FormControl isRequired={isRequired} isInvalid={isInvalid}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup>
                <Input
                    id="password"
                    ref={mergeRef}
                    name="password"
                    type={isOpen? 'text': 'password'}
                    autoComplete="current-password"
                    required
                    {...rest}/>
                 <InputRightElement>
                    <IconButton
                        variant="link"
                        aria-label={isOpen? 'Mask password' : 'Reveal password'}
                        icon={isOpen? <FaEyeSlash/> : <FaEye/> }
                        onClick={onClickReveal}
                    />
                </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    )
})

PasswordField.displayName = 'PasswordField'

export default PasswordField
import { useDisclosure, Heading, Select, Text, FormControl, FormLabel, Input, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'


function SendMoney() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()
    const finalRef = React.useRef()

    return (
        <>
            <Button onClick={onOpen} display='inline-block' color='#fff' height='45px' fontWeight='700' textAlign='center' padding='0 20px' backgroundColor='#6889fd' colorScheme='#6889fd' rounded='40px' margin='10px 10px'>
                Send Money
            </Button>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent bgColor='#fff' textColor="#000">
                    <ModalHeader>
                        <Heading fontSize='lg' color='#6889fd' textAlign='center'>Send Money</Heading>
                        <Text textAlign='center' fontSize='sm'>Enter the reciepient account details</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Country</FormLabel>
                            <Select placeholder="Nigeria" variant='filled'>
                                <option value="option1">Nigeria</option>
                                <option value="option2">Ghana</option>
                                <option value="option3">USA</option>
                            </Select>
 
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Banks</FormLabel>
                            <Select variant='filled'>
                                <option value="option1">First Bank PLC</option>
                                <option value="option2">Guaranty Trust Bank</option>
                                <option value="option3">Zenith Bank</option>
                            </Select>
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Account Number</FormLabel>
                            <Input type='number' />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={onClose}>
                            Continue
                          </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SendMoney;
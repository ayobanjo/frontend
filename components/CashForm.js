import { Box, FormControl, FormLabel, Select, Input, Text } from '@chakra-ui/react'

const CashForm = ({ }) => {
    return (
        <div>

            <Box display='block' mt='50px' fontSize='16px'>
                <FormControl>
                    <FormLabel htmlFor='sender' fontWeight='600' display='block' mb='10px' textAlign='left' color='#898989'>You send</FormLabel>
                    <Box borderRadius='7px' padding='5px' bgColor='#e4e9fa' display='flex'>
                        <Box width='140px' textColor='#545866' >
                            <Select placeholder="select " fontWeight='bold'>
                                <option>USD</option>
                                <option>NGN</option>
                                <option>ZAR</option>
                                <option>GHS</option>
                                <option>BTC</option>
                            </Select>
                        </Box>
                        <Input variant="unstyled" textColor='#545866' />
                    </Box>
                </FormControl>

                <br />


                <FormControl>
                    <FormLabel htmlFor='reciepient' fontWeight='600' display='block' mb='10px' textAlign='left' color='#898989'>Reciepient gets</FormLabel>
                    <Box borderRadius='7px' padding='5px' bgColor='#e4e9fa' display='flex'>
                        <Box width='140px' textColor='#545866' >
                            <Select placeholder="select " fontWeight='bold'>
                                <option>USD</option>
                                <option>NGN</option>
                                <option>ZAR</option>
                                <option>GHS</option>
                                <option>BTC</option>
                            </Select>
                        </Box>
                        <Input variant="unstyled" textColor='#545866' />
                    </Box>
                </FormControl>


                <Box display='block' textAlign='left' margin='5px 0'>
                    <Text fontSize='16px' color='#000'><strong>Note:</strong> final rates may differ based on sending method.</Text>
                </Box>

            </Box>
        </div>
    )
}

export default CashForm;

import Head from 'next/head'

import Layout from '../components/Layout'
import CashForm from '../components/CashForm'
import RecieveMoney from '../components/RecieveMoney'
import SendMoney from '../components/SendMoney'
import { Box, Text, Heading, Flex, Button, Alert, AlertDescription } from '@chakra-ui/react'

export default function Home({ }) {




  return (
    <>

      <Head>
        <title>Send Africa Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Alert colorScheme='red' variant='solid' textAlign="center" color='#fff' fontWeight='bold' justifyContent='center'>
        <AlertDescription>We're temporarily pausing Sendcash transfers in line with the new CBN directive. We'll be back up as soon as possible and will keep you updated. Thanks for all your support!</AlertDescription>
      </Alert>
      <Layout>

        <Box textAlign='center' width='100%' maxW='520px' margin='0 auto' display='block'>
          <Heading fontFamily='sans-serif' padding='30px' fontSize='3xl' color='#6889fd' fontStyle='italic'>áyọcash</Heading>

          <Flex padding='20px 40px' minH='40vh' flexDirection='column' justifyContent='center'>

            <Heading as='h1' lineHeight='1.2' textColor='#545866' margin='30px 0' fontSize='2.1rem' fontFamily='body' fontWeight='bold'>
              Fast, affordable money transfer to Nigeria & Ghana
            </Heading>
            <Text fontSize='md' fontWeight='bold' textColor='#545866'>
              Using Crypto via your  bank card, Apple Pay, Cash App or a Crypto wallet.
            </Text>

            <Box display='block' textAlign='center' my='25px'>
              <SendMoney />
              <RecieveMoney />
            </Box>


            <CashForm />

            {/* <Box display='block' mt='50px' fontSize='16px'>
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

            </Box> */}


          </Flex>

        </Box>




      </Layout>

    </>

  )
}

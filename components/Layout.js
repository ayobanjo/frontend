import { Box } from '@chakra-ui/react'

export const Layout = ({ children }) => {
    return (
        <Box minH='100vh'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            backgroundColor='#f1f8ff'
            padding='0 0.5rem'>
            {children}
        </Box>
    )
}


export default Layout;
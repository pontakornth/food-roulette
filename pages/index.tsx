import {Box, Flex, Heading, FormControl, FormLabel, useTheme, Select} from '@chakra-ui/core';
const Index: React.FC = () => {
    const theme = useTheme();
    return (
    <Flex p={4} 
    width="100vw" 
    bg="orange.200" 
    height="100vh"
    justifyContent="center"
    >
        <Box
         marginTop={1}
         p={3}
         textAlign="center" width={[1/2,1/3]} 
         bg="white"
         >
            <Heading color="gray.700" as="h1" size="xl">Food Roulette</Heading>
            <FormControl
            display="flex"
            alignItems="baseline"
            py={4}
            >
                <Box width={1/2}>
                    <FormLabel htmlFor="choice-1">ประเภทที่ 1</FormLabel>
                </Box>
                <Box width={1/2}>
                    <Select name="choice-1" placeholder="ข้าว">
                        <option value="ข้าว">ข้าว</option>
                        <option value="หมู">หมู</option>
                        <option value="ไก่">ไก่</option>
                    </Select>
                </Box>
            </FormControl>
        </Box>
    </Flex>
    )
}

export default Index;
import {
  Box,
  Flex,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Select,
} from '@chakra-ui/core';

const Index: React.FC = () => (
  <Flex p={4} width="100vw" bg="red.400" height="100vh" justifyContent="center">
    <Box
      marginTop={1}
      p={3}
      textAlign="center"
      width={[1 / 2, 1 / 3]}
      bg="white"
    >
      <Heading color="gray.700" as="h1" size="xl">
        Food Roulette
      </Heading>
      <FormControl>
        <Flex
          display="flex"
          alignItems="baseline"
          justifyContent="center"
          py={4}
          flexWrap="wrap"
        >
          <Box width={1 / 2}>
            <FormLabel htmlFor="choice-1">ประเภทที่ 1</FormLabel>
          </Box>
          <Box width={1 / 2}>
            <Select name="choice-1" placeholder="ข้าว">
              <option value="ข้าว">ข้าว</option>
              <option value="หมู">หมู</option>
              <option value="ไก่">ไก่</option>
            </Select>
          </Box>
        </Flex>
        <Flex
          display="flex"
          alignItems="baseline"
          py={4}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box width={1 / 2}>
            <FormLabel htmlFor="choice-2">ประเภทที่ 2</FormLabel>
          </Box>
          <Box width={1 / 2}>
            <Select name="choice-2" placeholder="ข้าว">
              <option value="ข้าว">ข้าว</option>
              <option value="หมู">หมู</option>
              <option value="ไก่">ไก่</option>
            </Select>
          </Box>
        </Flex>
        <Flex
          display="flex"
          alignItems="baseline"
          py={4}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Box width={1 / 2}>
            <FormLabel htmlFor="choice-3">ประเภทที่ 3</FormLabel>
          </Box>
          <Box width={1 / 2}>
            <Select name="choice-3" placeholder="ข้าว">
              <option value="ข้าว">ข้าว</option>
              <option value="หมู">หมู</option>
              <option value="ไก่">ไก่</option>
            </Select>
          </Box>
        </Flex>
        <Flex justifyContent="center" textAlign="center">
          <Button variantColor="red">Submit</Button>
        </Flex>
      </FormControl>
    </Box>
  </Flex>
);
export default Index;

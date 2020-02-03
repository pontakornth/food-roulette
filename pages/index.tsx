import {
  Box,
  Flex,
  Button,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Link as UILink,
  Stack,
} from '@chakra-ui/core';
import { useFormik } from 'formik';
import Link from 'next/link';

const Index: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      firstOption: 'หมา',
      secondOption: '',
      thirdOption: '',
    },
    onSubmit: () => {},
  });
  return (
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
        <FormControl as="form">
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
              <Select value={formik.values.firstOption} onChange={formik.handleChange} name="firstOption">
                <option value="ข้าว">ข้าว</option>
                <option value="หมา">หมา</option>
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
              <Select value={formik.values.secondOption} onChange={formik.handleChange} name="secondOption">
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
              <Select value={formik.values.thirdOption} onChange={formik.handleChange} name="thirdOption">
                <option value="ข้าว">ข้าว</option>
                <option value="หมู">หมู</option>
                <option value="ไก่">ไก่</option>
              </Select>
            </Box>
          </Flex>
          <Stack spacing={4} isInline justifyContent="center" alignItems="baseline" textAlign="center">
            <Button variantColor="red">Submit</Button>
            <Link href="/submit" passHref>
              <UILink color="blue.500">ส่งชื่ออาหาร</UILink>
            </Link>
          </Stack>
        </FormControl>
      </Box>
    </Flex>
  );
};
export default Index;

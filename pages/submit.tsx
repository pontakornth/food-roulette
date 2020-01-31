import { NextPage } from 'next';
import {
  Box, Input, Heading, FormControl, FormLabel, Stack, Tag, TagLabel,
} from '@chakra-ui/core';
import Background from '../components/Background';

const SubmissionForm: NextPage = () => (
  <Background>
    <Box bg="white" width={[8 / 10]} mt={1} p={3}>
      <Heading size="2xl">ส่งชื่ออาหาร</Heading>
      <FormControl>
        <FormLabel htmlFor="name">ชื่ออาหาร</FormLabel>
        <Input placeholder="ต้มยำหมูสับกะเพาะปลา" name="name" />
        <FormLabel htmlFor="tags">แท็ก</FormLabel>
        <Stack spacing={4} isInline>
          <Tag variantColor="green">
            <TagLabel>ต้มยไำกุ้ง</TagLabel>
          </Tag>
        </Stack>
      </FormControl>
    </Box>
  </Background>
);

export default SubmissionForm;

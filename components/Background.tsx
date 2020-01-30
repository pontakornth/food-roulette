import { Flex } from '@chakra-ui/core';

const Background : React.FC<{children : any?}> = ({ children }) => (
  <Flex p={4} width="100vw" bg="red.400" height="100vh" justifyContent="center">
    {children}
  </Flex>
);

export default Background;

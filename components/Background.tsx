import { Flex } from '@chakra-ui/core';

interface IBackgroundProps {
  children: any;
}

const Background : React.FC<IBackgroundProps> = ({ children }: IBackgroundProps) => (
  <Flex p={4} width="100vw" bg="red.400" height="100vh" justifyContent="center">
    {children}
  </Flex>
);

export default Background;

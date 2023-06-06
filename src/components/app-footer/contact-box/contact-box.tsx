import { Input, Flex, TextInput, UnstyledButton, Center, Image } from '@mantine/core';
import { useContactBox } from './use-contact-box';

export const ContactBox = () => {
  const { email, isSubmitting, setEmail, handleSubmit } = useContactBox();

  return (
    <Input.Wrapper>
      <Flex align="center" bg="white.0" p={8} style={{ borderRadius: 40 }}>
        <TextInput
          variant="unstyled"
          ff="Outfit"
          fw={400}
          size={'1.125rem'}
          px={10}
          placeholder="Enter Your Email"
          w={'100%'}
          onChange={(e) => setEmail(e.target.value)}
        />
        <UnstyledButton
          miw={48}
          w={48}
          mih={48}
          h={48}
          bg="purpleGlow.3"
          style={{ borderRadius: 24 }}
          onClick={isSubmitting ? undefined : handleSubmit}
        >
          <Center>
            <Image src="images/icon-chevron-right.svg" width={28} height={28} />
          </Center>
        </UnstyledButton>
      </Flex>
      <Input.Error></Input.Error>
    </Input.Wrapper>
  );
};

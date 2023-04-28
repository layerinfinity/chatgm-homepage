import React from 'react';
import { Button, Flex, Input, MediaQuery, Stack, Text, useMantineTheme } from '@mantine/core';
import { useAddEmailSubscription } from '../api/hooks';
import * as Yup from 'yup';

const formSchema = Yup.object({
  email: Yup.string().email().required(),
});

export type EmailSubscriptionBoxProps = {
  onSubscribeFailed?: (error: any) => void;
  onSubscribeSucceeded?: () => void;
};

export const EmailSubscriptionBox = (props: EmailSubscriptionBoxProps) => {
  const { onSubscribeFailed, onSubscribeSucceeded } = props;
  const [email, setEmail] = React.useState('');
  const theme = useMantineTheme();
  const { mutate, isLoading } = useAddEmailSubscription();

  const onButtonSubscribeClicked = async () => {
    try {
      await formSchema.validate({ email });

      mutate(
        { email },
        {
          onError: (error: any) => {
            onSubscribeFailed?.(error?.response?.data?.message || error.toString());
          },
          onSuccess: () => {
            onSubscribeSucceeded?.();
          },
        }
      );
    } catch (error: any) {
      onSubscribeFailed?.(error.toString());
    }
  };

  return (
    <Stack>
      <Text align="center">Subscribe for news and waiting list</Text>

      <MediaQuery largerThan="sm" styles={{ display: 'none', position: 'relative' }}>
        <Flex gap={20} direction={'column'} align={'center'}>
          <Input
            styles={{
              input: {
                maxWidth: '24rem',
                width: '20rem',
                height: '3.5rem',
                borderRadius: '1rem',
                backgroundColor: 'transparent',
                border: `1px solid ${theme.colors.brand[5]}`,
                fontSize: '1.1em',
                '::placeholder': {
                  color: theme.colors.gray[0],
                },
              },
            }}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            color="brand.5"
            onClick={onButtonSubscribeClicked}
            disabled={isLoading}
            styles={{
              root: {
                height: '3.5rem',
                width: '10rem',
                borderRadius: '1rem',
              },
            }}
          >
            <Text size="1.2em">Subscribe</Text>
          </Button>
        </Flex>
      </MediaQuery>

      <MediaQuery smallerThan="sm" styles={{ display: 'none', position: 'relative' }}>
        <Flex gap={20}>
          <Input
            styles={{
              input: {
                width: '24rem',
                height: '3.5rem',
                borderRadius: '1rem',
                backgroundColor: 'transparent',
                border: `1px solid ${theme.colors.brand[5]}`,
                fontSize: '1.1em',
                '::placeholder': {
                  color: theme.colors.gray[0],
                },
              },
            }}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            color="brand.5"
            onClick={onButtonSubscribeClicked}
            disabled={isLoading}
            styles={{
              root: {
                height: '3.5rem',
                width: '10rem',
                borderRadius: '1rem',
              },
            }}
          >
            <Text size="1.2em">Subscribe</Text>
          </Button>
        </Flex>
      </MediaQuery>
    </Stack>
  );
};

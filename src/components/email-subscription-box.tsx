import React from 'react';
import { Button, Flex, Input, MediaQuery, Stack, Text, useMantineTheme } from '@mantine/core';
import * as Yup from 'yup';
import { addEmailSubscription } from '~/api/services/email-service';

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
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const theme = useMantineTheme();

  const onButtonSubscribeClicked = async () => {
    try {
      setIsSubmitting(true);

      const data = { email };
      await formSchema.validate(data);

      const addEmailSubscriptionRes = await addEmailSubscription(data);
      onSubscribeSucceeded?.();

      console.log({ addEmailSubscriptionRes });
    } catch (error: any) {
      onSubscribeFailed?.(error.toString());
    } finally {
      setIsSubmitting(false);
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
            disabled={isSubmitting}
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
            disabled={isSubmitting}
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

import React from 'react';
import { Button, Flex, Input, MediaQuery, Stack, Text } from '@mantine/core';
import { axiosClient } from '../api/client';

export type SubcribeBoxProps = {
  onSubscribeFailed?: (error: any) => void;
  onSubscribeSucceeded?: () => void;
};

export const SubcribeBox = (props: SubcribeBoxProps) => {
  const { onSubscribeFailed, onSubscribeSucceeded } = props;
  const [email, setEmail] = React.useState('');

  const onButtonSubscribeClicked = () => {
    axiosClient
      .post('/email/subscription/add', {
        email: email,
      })
      .then(() => {
        onSubscribeSucceeded?.();
      })
      .catch((error) => {
        onSubscribeFailed?.(error?.response?.data?.message || error.toString());
      });
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
                border: '1px solid #7C48EB',
                '::placeholder': {
                  color: '#C5C5C5',
                  fontStyle: 'normal',
                  fontSize: '18px',
                  lineHeight: '25px',
                },
              },
            }}
            placeholder="Email:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            color="brand.5"
            onClick={onButtonSubscribeClicked}
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
                border: '1px solid #7C48EB',
                '::placeholder': {
                  color: '#C5C5C5',
                  fontStyle: 'normal',
                  fontSize: '18px',
                  lineHeight: '25px',
                },
              },
            }}
            placeholder="Email:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            color="brand.5"
            onClick={onButtonSubscribeClicked}
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

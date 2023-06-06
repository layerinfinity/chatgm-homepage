import React from 'react';
import * as Yup from 'yup';
import { notifications } from '@mantine/notifications';
import { addEmailSubscription } from '~/api/services/email-service';

const formSchema = Yup.object({
  email: Yup.string().email().required('Oops, please double check your email!'),
});

export const useContactBox = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      const data = { email };

      await formSchema.validate(data);

      await addEmailSubscription(data);

      notifications.show({
        title: 'Email Subscription',
        message: 'You have subscribed successfully!',
        color: 'green',
      });
    } catch (error: any) {
      notifications.show({
        title: 'Email Subscription',
        message: error?.response?.data?.message || error.toString(),
        color: 'red',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, email, handleSubmit, setEmail };
};

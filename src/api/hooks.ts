import { useMutation } from 'react-query';
import { addEmailSubscription } from './services/email-service';
import { AddEmailSubscriptionDto } from './dto';

export const useAddEmailSubscription = () => {
  return useMutation({
    mutationFn: async (dto: AddEmailSubscriptionDto) => {
      const response = await addEmailSubscription(dto);
      return response.data;
    },
  });
};

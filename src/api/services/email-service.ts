import { axiosClient } from '~/api/client';
import { AddEmailSubscriptionDto } from '~/api/dto';

export const addEmailSubscription = async (dto: AddEmailSubscriptionDto) => {
  const { email } = dto;

  return axiosClient.post('/email/subscription/add', {
    email: email,
  });
};

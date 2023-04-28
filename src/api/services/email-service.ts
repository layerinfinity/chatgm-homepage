import { axiosClient } from '../client';
import { AddEmailSubscriptionDto } from '../dto';

export const addEmailSubscription = async (dto: AddEmailSubscriptionDto) => {
  const { email } = dto;

  return axiosClient.post('/email/subscription/add', {
    email: email,
  });
};

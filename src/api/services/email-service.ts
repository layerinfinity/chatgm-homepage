import { AddEmailSubscriptionDto, AddEmailSubscriptionResponse } from '~/api/dto';
import { configs } from '~/configs';

export const addEmailSubscription = async (
  dto: AddEmailSubscriptionDto
): Promise<AddEmailSubscriptionResponse> => {
  const apiUrl = `${configs.API_URL}/email/subscription/add`;

  const rawResponse = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dto),
  });

  const responseJson = await rawResponse.json();

  if (!rawResponse.ok) {
    let errorMessage = responseJson?.message;
    errorMessage = typeof errorMessage !== 'string' ? errorMessage?.[0] : errorMessage;

    throw new Error(errorMessage || 'Failed to subscribe');
  }

  return responseJson.data;
};

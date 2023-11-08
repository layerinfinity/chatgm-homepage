export type ActivityPost = {
  id: number;
  date: string;
  link: string;
  yoast_head_json: {
    title: string;
    description: string;
  };
  _embedded: Record<string, any>;
};

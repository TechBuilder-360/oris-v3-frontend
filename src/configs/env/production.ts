interface IEnvironment {
  base_url: string;
  social_app_ID: string;
  password_length: number;
}

export const env: IEnvironment = {
  base_url: process.env.BASE_URL || '',
  social_app_ID: process.env.SOCIAL_APP_ID || '',
  password_length: 10
};

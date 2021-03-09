import { UsernamePasswordInput } from 'resolvers/UsernamePasswordInput';

export const validateRegister = ({
  email,
  username,
  password,
}: UsernamePasswordInput) => {
  if (!email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'Invalid email',
      },
    ];
  }

  if (username.length <= 3) {
    return [
      {
        field: 'username',
        message: 'Lenght must be greater than 3',
      },
    ];
  }

  if (username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'Cannot include an @',
      },
    ];
  }

  if (password.length <= 5) {
    return [
      {
        field: 'password',
        message: 'Lenght must be greater than 5',
      },
    ];
  }

  return null;
};

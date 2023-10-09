import { FormEvent } from 'react';
import { AuthService } from '../../services/auth.service';

export const LoginPage = () => {

  const onSubmit = async(event: FormEvent<HTMLFormElement> ) => {
    event.preventDefault();
    // const { username, password, remember } = event.target as HTMLFormElement;
    const { username, password,remember } = event.target as typeof event.target & {
      username: { value: string };
      password: { value: string };
      remember: { checked: boolean }
    };
    // console.log(username.value, password.value, remember.checked);

    await AuthService.loginUser(username.value, password.value);



    username.value = '';
    password.value = '';
    remember.checked = false;
  }


  return (
    <>
      <h1 className="text-2xl font-semibold mb-4">Login</h1>

      <form onSubmit={ onSubmit }>

        <div className="mb-4">
          <label className="block text-gray-600">Correo</label>
          <input type="email" name="username" autoComplete="off" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600">Contraseña</label>
          <input type="password" name="password" autoComplete="off" />
        </div>

        <div className="mb-4 flex items-center">
          <input type="checkbox" name="remember" className="text-blue-500" />
          <label className="text-gray-600 ml-2">Recordar cuenta</label>
        </div>
        
        <div className="mb-6 text-blue-500">
          <a href="#" className="hover:underline">Forgot Password?</a>
        </div>

        <button type="submit" className="bg-indigo-600">Login</button>
      </form>
      <div className="mt-6 text-blue-500 text-center">
        <a href="#" className="hover:underline">Sign up Here</a>
      </div>
    </>
  );
};
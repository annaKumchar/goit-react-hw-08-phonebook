import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormWrap,
  Form,
  Label,
  Input,
  Button,
  ButtonWrap,
} from './Form.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormWrap>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <ButtonWrap>
          <Button type="submit">Log In</Button>
        </ButtonWrap>
      </Form>
    </FormWrap>
  );
};

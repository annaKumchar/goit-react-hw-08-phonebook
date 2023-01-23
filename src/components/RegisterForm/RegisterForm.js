import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormWrap,
  Form,
  Label,
  Input,
  Button,
  ButtonWrap,
} from 'components/LoginForm/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          Username
          <Input type="text" name="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" />
        </Label>
        <ButtonWrap>
          <Button type="submit">Register</Button>
        </ButtonWrap>
      </Form>
    </FormWrap>
  );
};

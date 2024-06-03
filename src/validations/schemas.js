import { z } from 'zod';
import { regexCep, regexEmail } from './regex';

const requiredStringField = (message) =>
  z.string({ required_error: message }).min(1, message);

const emailField = requiredStringField('O email é obrigatório.')
  .email('Email inválido')
  .regex(regexEmail, 'Email inválido');

const passwordField = requiredStringField('A senha é obrigatória').min(
  8,
  'A senha deve conter pelo menos 8 caracteres.',
);

export const deliverySchema = z.object({
  cep: requiredStringField('O CEP é obrigatório').regex(
    regexCep,
    'CEP inválido.',
  ),
  state: requiredStringField('O Estado é obrigatório'),
  city: requiredStringField('A cidade é obrigatória'),
  neighborhood: requiredStringField('O bairro é obrigatório'),
  street: requiredStringField('A rua é obrigatória'),
  number: requiredStringField('O número é obrigatório'),
});

export const creditCardPaymentSchema = z.object({
  number: requiredStringField('O cartão de crédito é obrigatório.'),
  name: requiredStringField('O nome é obrigatório.'),
});

export const registerSchema = z.object({
  name: requiredStringField('O nome é obrigatório.'),
  surname: requiredStringField('O sobrenome é obrigatório.'),
  phoneNumber: requiredStringField('O Telefone é obrigatório.'),
  email: emailField,
  password: passwordField,
});

export const loginSchema = z.object({
  email: emailField,
  password: passwordField,
});

import { z } from 'zod';
import { regexCep } from './regex';

const requiredStringField = (message) =>
  z.string({ required_error: message }).min(1, message);

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

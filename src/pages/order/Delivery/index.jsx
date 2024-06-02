import { Link, useNavigate } from 'react-router-dom';
import InputField from '../../../components/InputField';
import OrderSteps from '../../../components/OrderSteps';
import './styles.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { deliverySchema } from '../../../validations/schemas';
import { useOrderStore } from '../../../store/order';
import { useCallback, useEffect } from 'react';
import { regexCep } from '../../../validations/regex';
import { getInfosByCep } from '../../../services/brasilApi';
import { cepMask } from '../../../validations/mask';
import FormActionButtons from '../../../components/FormActionButtons';
import { useReloadFormPage } from '../../../hooks/useReloadFormPage';

export default function Delivery() {
  const navigate = useNavigate();

  const {
    state: {
      order: { delivery },
    },
    actions: { addDelivery },
  } = useOrderStore();

  const {
    formState: { errors },
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(deliverySchema),
    defaultValues: delivery,
  });

  useReloadFormPage();

  const cepField = watch('cep');

  useEffect(() => {
    setValue('cep', cepMask(cepField));
    if (regexCep.test(cepField)) {
      (async () => {
        const address = await getInfosByCep(cepField);
        setValue('state', address.state);
        setValue('city', address.city);
        setValue('neighborhood', address.neighborhood);
        setValue('street', address.street);
      })();
    }
  }, [cepField, setValue]);

  const handleSendForm = (data) => {
    addDelivery(data);
    navigate('/order/payment');
  };

  return (
    <div className="delivery">
      <OrderSteps />
      <section className="delivery-form-section">
        <h1 className="title">Entrega</h1>
        <form className="form" onSubmit={handleSubmit(handleSendForm)}>
          <div className="input-group">
            <InputField
              type="string"
              placeholder="Digite seu cep"
              label="CEP"
              {...register('cep')}
              helperText={errors?.cep?.message}
              maxLength={9}
            />
            <InputField
              type="text"
              placeholder="Digite o Estado em que você mora"
              label="Estado"
              {...register('state')}
              helperText={errors?.state?.message}
            />
          </div>

          <div className="input-group">
            <InputField
              type="text"
              placeholder="Digite a cidade em que você mora"
              label="Cidade"
              {...register('city')}
              helperText={errors?.city?.message}
            />
            <InputField
              type="text"
              placeholder="Digite o bairro em que você mora"
              label="Bairro"
              {...register('neighborhood')}
              helperText={errors?.neighborhood?.message}
            />
          </div>

          <div className="input-group">
            <InputField
              type="text"
              placeholder="Digite a rua em que você mora"
              label="Rua"
              {...register('street')}
              helperText={errors?.street?.message}
            />
            <InputField
              type="number"
              placeholder="999"
              label="Número da residência"
              {...register('number')}
              helperText={errors?.number?.message}
            />
          </div>
          <FormActionButtons
            onContinueButtonClick={handleSubmit(handleSendForm)}
          />
        </form>
      </section>
    </div>
  );
}

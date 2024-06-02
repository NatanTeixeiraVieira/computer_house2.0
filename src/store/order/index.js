import { create } from 'zustand';

export const useOrderStore = create((set) => ({
  state: {
    order: {
      delivery: {
        cep: '',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
        number: '',
      },
    },
    paymentForm: null,
    creditCard: {
      number: '',
      name: '',
      installment: 0,
    },
  },
  actions: {
    addDelivery: (delivery) => {
      set(() => ({
        state: {
          order: {
            delivery,
          },
        },
      }));
    },

    addPayment: ({ paymentForm, number, name, installment }) => {
      set((state) => ({
        state: {
          ...state.state,
          paymentForm,
          creditCard: {
            number,
            name,
            installment,
          },
        },
      }));
    },

    addPix: ({ paymentForm }) => {
      set((state) => ({
        state: {
          ...state.state,
          paymentForm,
        },
      }));
    },
  },
}));

import { create } from 'zustand';

export const useOrderStore = create((set) => ({
  state: {
    order: {
      delivery: {
        cep: null,
        state: '',
        city: '',
        neighborhood: '',
        street: '',
        number: null,
      },
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
  },
}));

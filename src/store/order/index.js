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

import { reactive } from 'vue';

export default function useServiceFactory<T extends object>(
  getInstance: () => T
) {
  return () => reactive(getInstance());
}


import { toast as sonnerToast } from 'sonner';

// Wrapper para manter compatibilidade de uso
function useToast() {
  return {
    toast: sonnerToast,
  };
}

export { useToast };

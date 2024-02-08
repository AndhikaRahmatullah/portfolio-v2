import { cva } from 'class-variance-authority';

// ----------------------------------------------------------------------

export const dialogStyles = cva('dialog', {
  variants: {
    maxWidth: {
      sm: ['modal-box', 'p-0', 'w-full', 'rounded-none', 'bg-light', 'sm:max-w-md'],
      md: ['modal-box', 'p-0', 'w-full', 'rounded-none', 'bg-light', 'sm:max-w-2xl'],
      lg: ['modal-box', 'p-0', 'w-full', 'rounded-none', 'bg-light', 'sm:max-w-6xl'],
    },
  },
  defaultVariants: {
    maxWidth: 'md',
  },
});

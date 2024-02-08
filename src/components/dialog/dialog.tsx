import React, { useCallback, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { type VariantProps } from 'class-variance-authority';
//
import { dialogStyles } from './styles';

// ----------------------------------------------------------------------

interface UseBoolean {
  value: boolean;
  onTrue: () => void;
  onFalse: () => void;
  onToggle: () => void;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DialogProps extends React.DialogHTMLAttributes<HTMLDialogElement>, VariantProps<typeof dialogStyles> {
  state: UseBoolean;
  closeButton?: boolean;
}

// ----------------------------------------------------------------------

const Dialog: React.FC<DialogProps> = ({ children, state, closeButton, className, maxWidth, ...props }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  // SHOW MODAL
  useEffect(() => {
    const handleClickShowAtParent = () => {
      if (state.value) {
        dialogRef.current?.showModal();
      }
    };

    handleClickShowAtParent();
  }, [dialogRef, state.value]);

  // CLOSE MODAL
  useEffect(() => {
    const handleClickEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        state.onFalse();
      }
    };

    const handleClickCloseAtParent = () => {
      if (!state.value) {
        dialogRef.current?.close();
      }
    };

    document.addEventListener('keydown', handleClickEscape);
    handleClickCloseAtParent();
  }, [state, dialogRef]);

  const handleClickClose = useCallback(() => {
    state.onFalse();
  }, [state]);

  return (
    <dialog ref={dialogRef} className="modal  modal-bottom sm:modal-middle backdrop:bg-[rgba(0,0,0,0.8)]" {...props}>
      <div className={twMerge(dialogStyles({ maxWidth }), className)}>
        {closeButton && (
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2" onClick={handleClickClose}>
              ✕
            </button>
          </form>
        )}

        {children}
      </div>

      {!closeButton && (
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleClickClose}>close</button>
        </form>
      )}
    </dialog>
  );
};

export default Dialog;

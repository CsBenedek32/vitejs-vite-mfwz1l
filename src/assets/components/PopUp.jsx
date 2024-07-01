
import Snackbar from '@mui/joy/Snackbar';
import { keyframes } from '@mui/system';
import { useState } from 'react';
import Button from '@mui/joy/Button';

const inAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const outAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

export default function PopUp({children,Text}) {
  const [open, setOpen] = useState(false);

  const animationDuration = 600;

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <span  onClick={handleClick}>
        {children}
      </span>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        onClose={handleClose}
        autoHideDuration={4000}
        endDecorator={
            <Button
              onClick={() => setOpen(false)}
              size="sm"
            >
              Dismiss
            </Button>
          }
        animationDuration={animationDuration}
        sx={{
          ...(open && {
            animation: `${inAnimation} ${animationDuration}ms forwards`,
          }),
          ...(!open && {
            animation: `${outAnimation} ${animationDuration}ms forwards`,
          }),
        }}
      >
       {Text}
      </Snackbar>
    </div>
  );
}

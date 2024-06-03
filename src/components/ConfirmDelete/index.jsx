import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import './styles.css';

export default function ConfirmDelete({ isOpen, onClose, onDelete }) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        aria-labelledby="draggable-dialog-title"
        className="confirm-delete"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Remover do carrinho
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja remover esse item do carrinho?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            autoFocus
            onClick={onClose}
            className="action-button cancel-button"
          >
            Cancelar
          </button>
          <button onClick={onDelete} className="action-button confirm-button">
            Remover
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}

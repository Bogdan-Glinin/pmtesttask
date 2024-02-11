import { enqueueSnackbar } from 'notistack';

export const showErrorNotification = (messages: string[]) => {
    messages.forEach((msg) => {
        enqueueSnackbar(msg, {
            variant: 'error',
        });
    });
};

export const showSuccessNotification = (messages: string[]) => {
    messages.forEach((msg) => {
        enqueueSnackbar(msg, {
            variant: 'success',
        });
    });
};

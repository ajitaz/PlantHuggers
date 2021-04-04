import { toast } from 'react-toastify';

function showSuccess(msg) {
    toast.success(msg);
}

function showInfo(msg) {
    toast.info(msg);
}

function showWarning(msg) {
    toast.warning(msg);
}

function showError(msg) {
    toast.error(msg);
}

export default {
    showSuccess,
    showError,
    showInfo,
    showWarning
}
import {reactive} from 'vue';

export const modalManager = reactive({
    activeModalId: null,
    openModals: [],
    setActiveModal(id) {
        this.activeModalId = id;
        if (!this.openModals.includes(id)) this.openModals.push(id);
    },
    clearActiveModal(id) {
        this.openModals = this.openModals.filter((modalId) => modalId !== id);
        if (this.openModals.length > 0) {
            this.activeModalId = this.openModals[this.openModals.length - 1];
        } else {
            this.activeModalId = null;
        }
    }
});
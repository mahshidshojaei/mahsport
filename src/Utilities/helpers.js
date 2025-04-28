import {reactive} from 'vue';
import isValidDomain from 'is-valid-domain';
import moment from 'moment-jalaali';
import Cookies from 'js-cookie';
import {toast} from 'vue-sonner';
import {router} from '@inertiajs/vue3';
import * as eventBus from '@/Utilities/eventBus.js';

const appLocale = import.meta.env.VITE_APP_LOCALE;
if (appLocale !== 'en') moment.loadPersian({dialect: 'persian-modern'});

export const store = reactive({
    darkMode: Cookies.get('darkMode') || 'off',
    direction: Cookies.get('direction') || 'ltr',
    aside: Cookies.get('aside') || 'open'
});

export function __(key, replacements = {}) {
    const translations = window.translations || {};
    let translation = translations[key] || key;
    Object.keys(replacements).forEach((placeholder) => {
        translation = translation.replace(`:${placeholder}`, replacements[placeholder]);
    });
    return translation;
}

export const toSwitchDate = (date, format = appLocale === 'en' ? 'YYYY-MM-D HH:mm' : 'jYYYY-jMM-jDD HH:mm') => {
    return moment(date).format(format);
};

export const toSwitchHumanizeDate = (date) => {
    return moment(date).fromNow();
};

export const toSwitchHumanizeAuto = (date, format = appLocale === 'en' ? 'YYYY-MM-D HH:mm' : 'jYYYY-jMM-jDD HH:mm') => {
    const now = moment();
    const inputDate = moment(date);
    const diffInDays = now.diff(inputDate, 'days');
    return diffInDays > 3 ? inputDate.format(format) : inputDate.fromNow();
};

export const textLimit = (value, count = 35) => {
    const sanitizedValue = value.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, ' ');
    return sanitizedValue.slice(0, count) + (sanitizedValue.length > count ? '...' : '');
};

export const isValidUrl = (value) => {
    const domain = value.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    if (domain.startsWith('domain.com')) return false;
    return isValidDomain(domain, {subdomain: true, wildcard: true});
};


export const generateHash = (length = 6) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz123456789';
    return Array.from({length}, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
};

export const toggleDarkMode = () => {
    store.darkMode = store.darkMode === 'on' ? 'off' : 'on';
    Cookies.set('darkMode', store.darkMode);
    if (store.darkMode === 'on') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
};

export const toggleAside = (value = '') => {
    const resizeEvent = new Event('resize');
    setTimeout(() => {
        window.dispatchEvent(resizeEvent);
    }, 500);
    if (typeof value === 'string' && value.trim() !== '') {
        store.aside = value;
    } else {
        store.aside = store.aside === 'open' ? 'close' : 'open';
    }
    Cookies.set('aside', store.aside);
    eventBus.emit('toggleAside');
};

export const handleNumberInput = (event) => {
    const {value} = event.target, sanitizedValue = value.replace(/[^0-9]/g, ''), validValue = sanitizedValue.split('.').length > 2
        ? sanitizedValue.slice(0, sanitizedValue.lastIndexOf('.'))
        : sanitizedValue;
    event.target.value = validValue;
};

export const showToast = (message, type = 'success') => {
    toast.dismiss();
    toast[type](message || __('anErrorOccurred'));
};

export const updatePage = () => {
    router.reload({
        preserveScroll: true,
        replace: true
    });
};

export const updateAuth = () => {
    router.reload({
        only: ['auth'],
        preserveScroll: true,
        replace: true
    });
};

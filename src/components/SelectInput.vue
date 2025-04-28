+<script setup>
import {computed, ref} from 'vue';
import Modal from '@/Components/Modal.vue';
import TextInput from '@/Components/TextInput.vue';
import {__} from '@/Utilities/helpers.js';
import XButton from '@/Components/xButton.vue';

// Props and Model
const model = defineModel({required: true});
const props = defineProps({
  inputClass: {type: String, default: null},
  buttonClass: {type: String, default: null},
  autoWidth: {type: Boolean, default: false},
  title: {type: String, default: null},
  valueName: {type: String, default: 'value'},
  labelName: {type: String, default: 'label'},
  options: {type: Array, required: true},
  clearable: {type: Boolean, default: true},
  searchable: {type: Boolean, default: false},
  multiple: {type: Boolean, default: false},
  confirmable: {type: Boolean, default: false},
  scrollToSelected: {type: Boolean, default: false},
  userData: {type: Boolean, default: false}
});
// Refs and Computed Properties
const openModal = ref(false);
const search = ref('');
const scrollContainer = ref(null);
const selectedRefs = ref([]);
const currentDefaultValue = ref(props.multiple ? [] : null);
const currentValue = computed(() => {
  let value = props.multiple ? [] : null;
  if (!props.multiple && props.options.length && model.value !== null && model.value !== '') {
    const modelId = typeof model.value === 'object' ? model.value[props.valueName] : model.value;
    props.options.forEach((option) => {
      if (option[props.valueName] === modelId) value = option[props.valueName];
    });
  } else if (props.multiple && props.options.length && model.value !== null && model.value !== '') {
    model.value.forEach((item) => {
      const modelId = typeof item === 'object' ? item[props.valueName] : item;
      props.options.forEach((option) => {
        if (option[props.valueName] === modelId) value.push(option[props.valueName]);
      });
    });
  }
  return value;
});
const currentLabel = computed(() => {
  let label = props.multiple ? [] : null;
  if (!props.multiple && props.options.length && model.value !== null && model.value !== '') {
    const modelId = typeof model.value === 'object' ? model.value[props.valueName] : model.value;
    props.options.forEach((option) => {
      if (option[props.valueName] === modelId) label = option[props.labelName];
    });
  } else if (props.multiple && props.options.length && model.value !== null && model.value !== '') {
    model.value.forEach((item) => {
      const modelId = typeof item === 'object' ? item[props.valueName] : item;
      props.options.forEach((option) => {
        if (option[props.valueName] === modelId) label.push(option[props.labelName]);
      });
    });
  }
  return label;
});
const limitedLabels = computed(() => {
  if (props.multiple) return currentLabel.value.slice(0, 2);
  return null;
});
const softOptions = computed(() => {
  let result = [];
  if (search.value) {
    props.options.forEach((option) => {
      if (option.label.toLowerCase().includes(search.value.toLowerCase())) result.push(option);
    });
  } else {
    result = props.options;
  }
  return result;
});
// Emits
const emit = defineEmits(['set', 'unset', 'change', 'confirm', 'cancel']);
// Methods for Managing Value
const setValue = (value) => {
  if (props.multiple && Array.isArray(model.value)) {
    if (model.value.includes(value)) model.value.splice(model.value.indexOf(value), 1);
    else model.value.push(value);
  } else {
    model.value = value;
  }
  if (!props.multiple && !props.confirmable) confirm();
  emit('set', model.value);
  emit('change', model.value);
};
const unsetValue = () => {
  if (!props.multiple && props.clearable) {
    model.value = null;
    emit('unset');
    emit('change');
  }
};
// Methods for Modal Management
const scrollTo = () => {
  if (scrollContainer.value && props.scrollToSelected) {
    const target = selectedRefs.value.find(el => el);
    if (target) scrollContainer.value.scrollTop = (target.offsetTop - scrollContainer.value.offsetTop) - 10;
  }
};
const openModalHandler = () => {
  currentDefaultValue.value = props.multiple ? Array.isArray(model.value) ? [...model.value] : null : model.value;
  openModal.value = true;
  setTimeout(scrollTo, 100);
};
const closeModal = () => {
  model.value = props.multiple ? Array.isArray(currentDefaultValue.value) ? [...currentDefaultValue.value] : null : currentDefaultValue.value;
  unsetSearch();
  openModal.value = false;
};
const cancel = () => {
  closeModal();
  emit('cancel');
};
const confirm = () => {
  console.log(model.value);
  emit('confirm', model.value);
  unsetSearch();
  openModal.value = false;
};
const unsetSearch = () => search.value = '';
</script>
<style>
.user-data-mode .select-element {
  @apply h-[54px]
}

.user-data-mode .select-element .select-element-label {
  @apply max-w-[120px] sm:max-w-[150px] py-1 px-2
}

.user-data-mode .select-element .select-element-label  {
  @apply max-w-[70px] sm:max-w-[80px]
}
</style>
<template>
  <div :class="{'user-data-mode': userData}" class="relative w-full">
    <div :class="inputClass" class="select-element group w-full h-[46px] flex items-center justify-between cursor-pointer bg-white text-sm relative border border-zinc-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 rounded-lg">
      <div v-if="multiple" class="w-[calc(100%-40px)] flex items-center overflow-hidden h-full p-1" @click="openModalHandler">
        <div v-if="limitedLabels.length" class="h-full flex items-center gap-1 px-1">
          <label class="absolute pointer-events-none start-1 bg-white dark:bg-zinc-800 px-2 text-xs text-zinc-400 dark:text-zinc-300 transition-transform duration-200 ease-out -translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-400 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-600">{{ title }}</label>
          <span v-for="(label, index) in limitedLabels" :key="index" class="relative font-light bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 text-xs py-1 px-2 rounded-md select-element-label" v-html="label"/>
          <span v-if="currentLabel.length > 2" class="relative text-zinc-500 dark:text-zinc-400 me-2 text-xs select-element-label"> + {{ currentLabel.length - 2 }}</span>
        </div>
        <label v-else class="absolute pointer-events-none start-1 bg-white dark:bg-zinc-800 px-2 text-xs text-zinc-400 dark:text-zinc-300">{{ title }}</label>
      </div>
      <div v-else class="w-[calc(100%-40px)] flex items-center overflow-hidden h-full p-1" @click="openModalHandler">
        <div v-if="model" class="h-full flex items-center gap-1 px-1">
          <label class="absolute pointer-events-none start-1 bg-white dark:bg-zinc-800 px-2 text-xs text-zinc-400 dark:text-zinc-300 transition-transform duration-200 ease-out -translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-400 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-600">{{ title }}</label>
          <span class="flex-grow h-full px-1 flex items-center" v-html="currentLabel"/>
        </div>
        <label v-else class="absolute pointer-events-none start-1 bg-white dark:bg-zinc-800 px-2 text-xs text-zinc-400 dark:text-zinc-300">{{ title }}</label>
      </div>
      <i v-if="!multiple && clearable && currentValue !== null" class="hover:text-rose-600 absolute rtl:left-0 ltr:right-0 -top-px w-[40px] h-full flex items-center justify-center ki-filled ki-cross-square" @click="unsetValue"/>
      <i v-else class="hover:text-blue-600 group-hover:text-blue-600 absolute rtl:left-0 ltr:right-0 -top-px w-[40px] h-full flex items-center justify-center ki-filled ki-down" @click="openModalHandler"/>
    </div>
    <Modal :show="openModal">
      <section :class="{'sm:min-w-[465px]': !autoWidth}" class="h-screen sm:h-auto sm:max-h-screen bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-600 sm:rounded-xl relative">
        <header v-if="title" class="w-full h-[73px] flex flex-col items-center bg-zinc-100/70 dark:bg-zinc-900/30 border-b border-zinc-200 dark:border-zinc-600 rounded-t-xl p-4">
          <strong class="w-full font-semibold text-zinc-900 dark:text-zinc-100">{{ `${__('select')} ${title}` }}</strong>
          <small class="w-full text-zinc-600 dark:text-zinc-400">{{ __('selectDesc') }}</small>
        </header>
        <div v-if="searchable" class="w-full flex px-3 pt-6">
          <div class="w-full flex items-center border border-zinc-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 rounded-lg">
            <div class="w-full flex items-center relative">
              <TextInput
                  id="search"
                  v-model="search"
                  class="w-full peer !border-0 !ring-0 !outline-none"
                  placeholder=""
                  type="text"
              />
              <label class="absolute pointer-events-none start-1 bg-white dark:bg-zinc-800 px-2 text-xs text-zinc-400 dark:text-zinc-300 transition-transform duration-200 ease-out -translate-y-6 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-xs peer-placeholder-shown:text-zinc-400 peer-focus:-translate-y-6 peer-focus:text-xs peer-focus:text-blue-500 dark:peer-focus:text-blue-600">{{ __('search') }}</label>
            </div>
            <i v-if="search" class="hover:text-rose-600 w-[40px] h-full flex items-center justify-center ki-filled ki-cross-square cursor-pointer" @click="unsetSearch"/>
            <i v-else class="hover:text-blue-600 group-hover:text-blue-600 w-[40px] h-full flex items-center justify-center ki-filled ki-magnifier"/>
          </div>
        </div>
        <div ref="scrollContainer" class="w-full h-[calc(100vh-143px)] sm:h-auto sm:max-h-[calc(100vh-400px)] relative overflow-y-auto p-3 text-sm text-zinc-600 dark:text-zinc-400 space-y-1">
          <div v-for="(option, index) in softOptions"
               :ref="el => ((!multiple && option[valueName] === currentValue) || multiple && currentValue.includes(option[valueName])) ? selectedRefs[index] = el : null"
               class="w-full">
            <xButton v-if="!multiple && option[valueName] === currentValue" :class="buttonClass" class="w-full" @click="setValue(option[valueName])" v-html="option[labelName]"/>
            <xButton v-else-if="!multiple" :class="buttonClass" class="w-full" color="info" @click="setValue(option[valueName])" v-html="option[labelName]"/>
            <xButton v-if="multiple && currentValue.includes(option[valueName])" :class="buttonClass" class="w-full" @click="setValue(option[valueName])" v-html="option[labelName]"/>
            <xButton v-else-if="multiple" :class="buttonClass" class="w-full" color="info" @click="setValue(option[valueName])" v-html="option[labelName]"/>
          </div>
        </div>
        <footer v-if="multiple || confirmable" class="w-full flex justify-between rounded-b-xl p-4">
          <xButton class="gap-2" color="info" @click="cancel">
            <i class="ki-filled ki-cross-square text-[16px] relative -top-px"/>
            <span>{{ __('cancel') }}</span>
          </xButton>
          <xButton class="gap-2" @click="confirm">
            <i class="ki-filled ki-check-square text-[16px] relative -top-px"/>
            <span>{{ __('confirm') }}</span>
          </xButton>
        </footer>
      </section>
    </Modal>
  </div>
</template>

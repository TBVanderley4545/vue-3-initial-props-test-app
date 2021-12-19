import { createApp } from 'vue';
import App from './App.vue';
import FormFieldData from './types/FormFieldData';

const appMountPointElm = document.getElementById('app');
const formFields: Record<string, FormFieldData> = JSON.parse(
  appMountPointElm?.dataset.fieldData || '{}'
);

createApp(App, {
  fields: formFields,
}).mount(`#${appMountPointElm?.id || 'app'}`);

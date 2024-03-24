import axios from 'axios';


export const BASE_URL_AZURE_DOCUMENT_TRANSLATOR = 'https://document-translator-instance.cognitiveservices.azure.com'
export const AZURE_DOCUMENT_TRANSLATOR_API_VERSION = '2023-11-01-preview'

export const azureTranslationAxiosInstance = axios.create({
  baseURL: BASE_URL_AZURE_DOCUMENT_TRANSLATOR,
});

import { createContext } from 'react';

import { InvoiceFormValues } from './FormProviders';

export type InvoiceData = InvoiceFormValues & { formId: string };

export enum CollectionName {
  Drafts = 'drafts',
  Invoices = 'invoices',
}

type InvoiceCtxProps = {
  toggleForm: () => void;
  handleAddInvoice: (
    _data: InvoiceData,
    _collectionName: CollectionName
  ) => Promise<void>;
  handleCollectionData: (
    _data: InvoiceFormValues,
    _collectionName: CollectionName,
    _formId: string
  ) => Promise<void>;
  isOpenForm: boolean;
};

const defaultValues: InvoiceCtxProps = {
  toggleForm: () => {},
  handleAddInvoice: async (
    _data: InvoiceData,
    _collectionName: CollectionName
  ) => {},
  handleCollectionData: async (
    _data: InvoiceFormValues,
    _collectionName: CollectionName,
    _formId: string
  ) => {},
  isOpenForm: false,
};

export const FormCtx = createContext<InvoiceCtxProps>(defaultValues);

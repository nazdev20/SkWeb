import { DocumentData, DocumentSnapshot } from 'firebase/firestore';
import { Event, FormField, Newsletter, Service } from './data';

const asText = (value: unknown): string => (typeof value === 'string' ? value : '');

const asImages = (value: unknown): string[] => {
  if (Array.isArray(value)) {
    return value.filter((image): image is string => typeof image === 'string' && image.length > 0);
  }

  if (typeof value === 'string' && value.trim()) {
    return value.split(',').map((image) => image.trim()).filter(Boolean);
  }

  return [];
};

export const normalizeEvent = (snapshot: DocumentSnapshot<DocumentData>): Event => {
  const data = snapshot.data() ?? {};

  return {
    id: snapshot.id,
    title: asText(data.title),
    date: asText(data.date),
    location: asText(data.location),
    description: asText(data.description),
    image: asImages(data.image),
    category: asText(data.category),
  };
};

export const normalizeNewsletter = (snapshot: DocumentSnapshot<DocumentData>): Newsletter => {
  const data = snapshot.data() ?? {};

  return {
    id: snapshot.id,
    title: asText(data.title),
    description: asText(data.description),
    imageUrl: asText(data.imageUrl),
    link: asText(data.link) || undefined,
    fullContent: asText(data.fullContent),
  };
};

export const normalizeService = (snapshot: DocumentSnapshot<DocumentData>): Service => {
  const data = snapshot.data() ?? {};
  const formFields = Array.isArray(data.formFields) ? data.formFields : [];

  return {
    id: snapshot.id,
    title: asText(data.title),
    description: asText(data.description),
    imageUrl: asText(data.imageUrl),
    formFields: formFields.filter((field): field is FormField => (
      typeof field?.label === 'string' &&
      ['text', 'email', 'date', 'number', 'textarea', 'file'].includes(field.type)
    )),
  };
};
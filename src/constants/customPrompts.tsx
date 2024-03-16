import { Feather, Ionicons } from '@expo/vector-icons';
import { lightAccent } from './colors';

export const customPrompts = [
  {
    text: 'Generate text from text-only input',
    icon: <Feather name='edit-2' size={24} color={lightAccent} />,
    tag: 'text',
  },
  {
    text: 'Generate text from text-and-image input',
    icon: <Ionicons name='image-outline' size={24} color={lightAccent} />,
    tag: 'image',
  },
  {
    text: 'Ai Document Translation',
    icon: <Ionicons name='document-outline' size={24} color={lightAccent} />,
    tag: 'document',
  },
];

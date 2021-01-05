declare module 'redux-persist/lib/*';

export interface Task {
  title: string,
  tagName: string,
  duration: string,
  priority: string,
  deadline: string,
  notes: string
}
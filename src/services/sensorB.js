import { Subject } from "rxjs";

const subject = new Subject();

export const sensorBService = {
  sendMessage: (message) => subject.next({ text: message }),
  clearMessages: () => subject.next(),
  onMessage: () => subject.asObservable(),
};

import { Subject } from 'rxjs';

const subject = new Subject();

export const sensorDService = {
    sendMessage: message => subject.next({ text: message }),
    clearMessages: () => subject.next(),
    onMessage: () => subject.asObservable()
};
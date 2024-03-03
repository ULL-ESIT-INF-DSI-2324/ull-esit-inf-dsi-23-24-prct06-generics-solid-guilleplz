import { Notifier } from './notifier';
import { EmailService } from './emailservice';
import { ShortMessageService } from './shortmessageservice';

// creo una instancia de Notifier con EmailService
const emailNotifier = new Notifier(new EmailService());
// mando una notificación por email
emailNotifier.sendNotification('Hello World!');

// creo una instancia de Notifier con ShortMessageService
const shortMessageNotifier = new Notifier(new ShortMessageService());
// mando una notificación por mensaje corto
shortMessageNotifier.sendNotification('Hello World!');
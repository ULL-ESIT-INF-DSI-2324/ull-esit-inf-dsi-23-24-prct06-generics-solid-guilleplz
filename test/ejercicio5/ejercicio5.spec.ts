import 'mocha'
import { expect } from 'chai';
import { EmailService } from '../../src/ejercicio5/emailservice';
import { Notifier } from '../../src/ejercicio5/notifier';
import { ShortMessageService } from '../../src/ejercicio5/shortmessageservice';

describe('Ejercicio 5 - Notifier', () => {
  it('debería mandar una notificación por email', () => {
    const emailNotifier = new Notifier(new EmailService());
    expect(emailNotifier).to.have.property('sendNotification');
    expect(emailNotifier.sendNotification).to.be.a('function');
    expect(emailNotifier.sendNotification('Hello World!')).to.eq(undefined);
  });
  it('Debería mandar un SMS de notificación', () => {
    const shortMessageNotifier = new Notifier(new ShortMessageService());
    expect(shortMessageNotifier).to.have.property('sendNotification');
    expect(shortMessageNotifier.sendNotification).to.be.a('function');
    expect(shortMessageNotifier.sendNotification('Hello World!')).to.eq(undefined);
  });
});
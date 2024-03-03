import { NotificationService } from './notificationservice';

/**
 * ShortMessageService class
 */
export class ShortMessageService implements NotificationService {
  /**
   * Method notify
   * @param message string
   * @example
   * '''ts
   * const shortMessageService = new ShortMessageService();
   * shortMessageService.notify('Hello, world!');
   * '''
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
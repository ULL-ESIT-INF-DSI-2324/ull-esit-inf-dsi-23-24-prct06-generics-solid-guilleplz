import { NotificationService } from './notificationservice';

/**
 * EmailService class
 */
export class EmailService implements NotificationService {
  /**
   * Method notify
   * @param message string
   * @example
   * '''ts
   * const emailService = new EmailService();
   * emailService.notify('Hello, world!');
   * '''
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
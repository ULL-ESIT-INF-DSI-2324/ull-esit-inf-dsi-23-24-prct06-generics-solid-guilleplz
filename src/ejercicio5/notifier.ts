import { NotificationService } from './notificationservice';

/**
 * Notifier class
 */
export class Notifier {
  /**
   * Constructor
   * @param notificationService NotificationService
   * @example
   * '''ts
   * const notifier = new Notifier(new EmailService());
   * '''
   */
  constructor(private notificationService: NotificationService) {}

  /**
   * Method sendNotification
   * @param message string
   * @example
   * '''ts
   * const notifier = new Notifier(new EmailService());
   * notifier.sendNotification('Hello, world!');
   * '''
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
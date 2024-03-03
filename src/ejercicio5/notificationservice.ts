/**
 * Interface que define el contrato que debe cumplir un servicio de notificaciones.
 */
export interface NotificationService {
  notify(message: string): void;
}
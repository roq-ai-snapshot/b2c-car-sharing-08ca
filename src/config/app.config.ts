interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View available cars near me.', 'Book a car.', 'Cancel my booking.'],
  ownerAbilities: [
    'Manage company registration',
    'Manage Fleet Managers and Admins',
    'Manage car fleet',
    'View all cars in fleet',
    'Assign cars to Fleet Managers',
    'View available cars',
    'Book a car',
    'Cancel booking',
  ],
};

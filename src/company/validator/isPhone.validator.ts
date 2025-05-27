import { registerDecorator, ValidationOptions } from 'class-validator';

export function IsPhoneNumber(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isPhoneNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          const phoneRegex = /^(\+7|8)[0-9]{10}$/;
          return typeof value === 'string' && phoneRegex.test(value);
        },
        defaultMessage() {
          return 'Phone number must be in the format +7XXXXXXXXXX or 8XXXXXXXXXX';
        },
      },
    });
  };
}

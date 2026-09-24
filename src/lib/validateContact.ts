export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ContactErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Kiểm tra dữ liệu form liên hệ.
 * Property bất biến (Requirement 6.2 / 6.3):
 *  - name rỗng (sau trim) => luôn có lỗi name.
 *  - email không khớp định dạng => luôn có lỗi email.
 *  - message rỗng (sau trim) => luôn có lỗi message.
 *  - mọi field hợp lệ => object errors rỗng.
 */
export const validateContact = (values: ContactForm): ContactErrors => {
  const errors: ContactErrors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!values.message.trim()) errors.message = 'Please enter a message.';
  return errors;
};

export const isValidContact = (values: ContactForm): boolean =>
  Object.keys(validateContact(values)).length === 0;

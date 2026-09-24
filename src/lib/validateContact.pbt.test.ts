import { describe, it, expect } from 'vitest';
import fc from 'fast-check';
import {
  validateContact,
  isValidContact,
  emailPattern,
} from './validateContact';

// Property-based tests: mỗi property mã hoá một quy tắc luôn phải đúng,
// bám theo Requirement 6.2 / 6.3 trong .kiro/specs/personal-profile/requirements.md.

describe('validateContact — property-based', () => {
  it('name chỉ gồm khoảng trắng thì luôn báo lỗi name', () => {
    fc.assert(
      fc.property(
        fc.stringMatching(/^\s*$/),
        fc.emailAddress(),
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (blankName, email, message) => {
          const errors = validateContact({ name: blankName, email, message });
          expect(errors.name).toBeDefined();
        },
      ),
    );
  });

  it('email không đúng định dạng thì luôn báo lỗi email', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        fc.string().filter((s) => !emailPattern.test(s.trim())),
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (name, badEmail, message) => {
          const errors = validateContact({ name, email: badEmail, message });
          expect(errors.email).toBeDefined();
        },
      ),
    );
  });

  it('message chỉ gồm khoảng trắng thì luôn báo lỗi message', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        fc.emailAddress(),
        fc.stringMatching(/^\s*$/),
        (name, email, blankMessage) => {
          const errors = validateContact({ name, email, message: blankMessage });
          expect(errors.message).toBeDefined();
        },
      ),
    );
  });

  it('mọi field hợp lệ thì không có lỗi và isValidContact = true', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        fc.emailAddress(),
        fc.string({ minLength: 1 }).filter((s) => s.trim().length > 0),
        (name, email, message) => {
          const values = { name, email, message };
          const errors = validateContact(values);
          expect(Object.keys(errors)).toHaveLength(0);
          expect(isValidContact(values)).toBe(true);
        },
      ),
    );
  });
});

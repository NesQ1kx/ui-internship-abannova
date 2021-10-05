import { lookupProfile } from './lookup-profile';

describe('lookupProfile', () => {
  it('lookupProfiles("Kristian", "lastName") should return "Vos"', () => {
    expect(lookupProfile('Kristian', 'lastName')).toBe('Vos');
  });

  it('lookupProfiles("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]', () => {
    expect(lookupProfile('Sherlock', 'likes')).toEqual(['Intriguing Cases', 'Violin']);
  });

  it('lookupProfiles("Harry", "likes") should return an array', () => {
    expect(Array.isArray(lookupProfile('Harry', 'likes'))).toBe(true);
  });

  it('lookupProfile("Bob", "number") should return "No such contact"', () => {
    expect(lookupProfile('Bob', 'number')).toBe('No such contact');
  });

  it('lookupProfile("Akira", "address") should return "No such property"', () => {
    expect(lookupProfile('Akira', 'address')).toBe('No such property');
  });
});

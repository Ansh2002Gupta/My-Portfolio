/** Joins class names, dropping anything falsy. */
export const cx = (...parts) => parts.filter(Boolean).join(' ');

export default cx;

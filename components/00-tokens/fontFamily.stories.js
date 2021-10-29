import tailwind from '../../tailwind.config';

export default { title: 'Tokens/Font Families' };

export const FontFamilies = () => {
  const keys = Object.keys(tailwind.theme.fontFamily);
  return `<div>
      ${keys
        .map(
          (key) =>
            `<h2 class="mb-5 text-xl font-${key}">This Font Family is ${key}</h2>`,
        )
        .join('')}
    </div>`;
};

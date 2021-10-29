import tailwind from '../../tailwind.config';

export default { title: 'Tokens/Font Sizes' };

export const FontSizes = () => {
  const keys = Object.keys(tailwind.theme.fontSize);
  return `<div>
      ${keys
        .map(
          (key) => `<p class="mb-5 text-${key}">This Font Family is ${key}</p>`,
        )
        .join('')}
    </div>`;
};

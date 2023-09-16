export const EazyLabel: React.FC<EazyLabelProperties> = ({ id, text }) => {
  return <label htmlFor={id}>{text}</label>;
};

interface EazyLabelProperties {
  id: string;
  text: string;
}

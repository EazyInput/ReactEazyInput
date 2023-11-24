export const EazyLabel: React.FC<EazyLabelProperties> = ({
  labelClass,
  id,
  text,
}) => {
  return (
    <label className={labelClass} htmlFor={id}>
      {text}
    </label>
  );
};

interface EazyLabelProperties {
  labelClass?: string;
  id: string;
  text: string;
}

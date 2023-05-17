interface Props {
  title: string;
}

export default function FooterItem({ title }: Props) {
  return <li className="underline">{title}</li>;
}

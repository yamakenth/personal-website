import React from "react";

import icons from "./Icons";

export type IIconName = keyof typeof icons;

interface IconProps {
  name: IIconName;
}

export default function Icon({ name }: IconProps): JSX.Element {
  const Icon = icons[name];

  return <Icon />;
}

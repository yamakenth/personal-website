import React from "react";

import icons from "./Icons";

export type TIconName = keyof typeof icons;

interface IconProps {
  name: TIconName;
}

export default function Icon({ name }: IconProps): JSX.Element {
  const Icon = icons[name];

  return <Icon />;
}

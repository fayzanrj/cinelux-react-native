import React from "react";

interface TabIconProps {
  IconComponent: any;
  name: string;
  focused: boolean;
  size?: number;
}

const TabIcon: React.FC<TabIconProps> = ({
  IconComponent,
  name,
  focused,
  size = 24,
}) => {
  return (
    <IconComponent
      name={name}
      size={size}
      color={focused ? "#1E90FF" : "white"}
    />
  );
};

export default TabIcon;

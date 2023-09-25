import {
  ColorProps,
  LayoutProps,
  TypographyProps,
  SpaceProps,
  FlexProps,
  JustifyContentProps,
  AlignItemsProps,
  FlexDirectionProps,
  FlexGrowProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  AlignSelfProps,
  JustifySelfProps,
  BoxShadowProps,
  BorderProps,
  FlexboxProps,
  FlexBasisProps,
  GridGapProps,
  FontFamilyProps,
  PositionProps,
  MarginProps,
  BackgroundImageProps,
  ZIndexProps,
  SizeProps,
  WidthProps,
  BackgroundPositionProps,
  BackgroundProps,
  BackgroundSizeProps,
  BorderRadiusProps,
  OpacityProps,
  ResponsiveValue,
  TLengthStyledSystem,
} from 'styled-system';

export interface IAvatar {
  imageUrl?: string;
  username?: string;
  size?: number;
  isHead?: true;
  index?: number;
  children?: React.ReactNode;
  lastItem?: number;
}
export interface IGroupAvatarProps {
  children: React.ReactNode[] | React.ReactNode;
  max?: number;
  total?: number;
}

export interface AvatarStyledProps {
  size?: number;
  index?: number;
  lastItem?: number;
}

export interface INotificationStyledProps
  extends SpaceProps,
    FontSizeProps,
    FontFamilyProps,
    LayoutProps,
    ColorProps {}

export interface INotificationProps {
  children: React.ReactNode | React.ReactNode[];
}

export interface INotificationItemProps {
  children?: React.ReactNode | React.ReactNode[];
  header?: string;
  content?: string;
  alt?: string;
  imageUrl?: string;
  createdAt: string;
  clicked?: boolean;
  seen?: boolean;
}

export interface ButtonProps
  extends ColorProps,
    LayoutProps,
    TypographyProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    ZIndexProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'outlined'
    | 'status'
    | 'padded'
    | 'paddedOutline'
    | 'ghost'
    | 'normal'
    | 'rightOutlinedLeaf';
  loading?: boolean;
  children?: any;
  onClick?: () => void;
  type?: string;
  disabled?: boolean;
}
export interface IModalProps {
  handleClose: () => void;
  open: boolean;
  isTransparent?: boolean;
  children?: React.ReactNode | React.ReactNode[];
  borderRadius?: ResponsiveValue<TLengthStyledSystem>;
}

export interface TagProps
  extends ColorProps,
    LayoutProps,
    TypographyProps,
    SpaceProps {
  variant?: 'primary' | 'filled' | 'bended' | 'light';
}

export interface BoxProps
  extends SpaceProps,
    ColorProps,
    PositionProps,
    GridGapProps,
    LayoutProps,
    FlexBasisProps,
    FlexGrowProps,
    FlexProps,
    JustifyContentProps,
    AlignItemsProps,
    FlexDirectionProps,
    FlexboxProps,
    TypographyProps,
    BorderProps,
    BackgroundImageProps,
    BackgroundPositionProps,
    BoxShadowProps,
    BackgroundSizeProps,
    BackgroundProps {
  transition?: string | Array<string>;
  transform?: string | Array<string>;
  transformOrigin?: string | Array<string>;
  cursor?: string | Array<string>;
}

export interface TextProps
  extends ColorProps,
    TypographyProps,
    FontSizeProps,
    FontStyleProps,
    FontWeightProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    AlignSelfProps,
    JustifySelfProps,
    PositionProps,
    MarginProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'base' | 'ellipsis';
  textOverflow?: string;
  cursor?: string;
}

export interface InputProps
  extends ColorProps,
    LayoutProps,
    TypographyProps,
    SpaceProps,
    AlignSelfProps,
    JustifySelfProps,
    BorderProps,
    PositionProps,
    BorderRadiusProps {
  variant?: 'outlined' | 'filled';
  valid?: boolean;
  tabIndex?: number;
}
export interface StyledInputProps extends InputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}

export interface ListProps
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    BorderProps,
    PositionProps,
    FlexProps,
    FlexGrowProps,
    JustifyContentProps,
    AlignItemsProps {
  type?: 'horizontal' | 'vertical' | 'spread' | any[];
  transition?: string;
  transform?: string;
}

export interface ListItemsProps
  extends ColorProps,
    TypographyProps,
    PositionProps,
    FontSizeProps,
    FontStyleProps,
    FontWeightProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    AlignSelfProps,
    JustifySelfProps,
    MarginProps {}

export interface ImageProps
  extends SpaceProps,
    LayoutProps,
    JustifySelfProps,
    AlignSelfProps,
    ZIndexProps,
    PositionProps,
    SizeProps,
    WidthProps,
    BorderProps {}

export interface SelectFieldProps
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    AlignSelfProps,
    JustifySelfProps,
    FlexBasisProps,
    FlexGrowProps,
    FlexProps,
    JustifyContentProps,
    AlignItemsProps,
    FlexDirectionProps,
    FlexboxProps {
  variant?: 'primary' | 'secondary';
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export interface Checkbox_Toogle_Rdio_Props
  extends ColorProps,
    LayoutProps,
    SpaceProps,
    AlignSelfProps,
    JustifySelfProps {}

export interface CardProps
  extends BoxShadowProps,
    AlignSelfProps,
    JustifySelfProps,
    JustifyContentProps,
    SpaceProps,
    LayoutProps,
    BorderProps,
    ColorProps,
    AlignItemsProps {
  variant?: 'default' | 'rightBended' | 'dense' | 'medium' | 'radiant';
}

export interface VideoProps
  extends SpaceProps,
    LayoutProps,
    BackgroundProps,
    BorderProps,
    AlignSelfProps,
    JustifySelfProps,
    ZIndexProps,
    PositionProps {}
export interface HoverContainerProps extends OpacityProps {
  scale?: boolean;
}

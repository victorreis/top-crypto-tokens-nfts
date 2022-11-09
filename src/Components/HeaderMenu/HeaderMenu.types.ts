import { TestProps } from '../../Config/Tests/Test.types';

export interface RequiredHeaderMenuProps {}

export interface DefaultHeaderMenuProps {}

export interface OptionalHeaderMenuProps {}

export type HeaderMenuProps = RequiredHeaderMenuProps &
  DefaultHeaderMenuProps &
  OptionalHeaderMenuProps &
  TestProps &
  Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

export type HeaderMenuStyleProps = Required<DefaultHeaderMenuProps>;

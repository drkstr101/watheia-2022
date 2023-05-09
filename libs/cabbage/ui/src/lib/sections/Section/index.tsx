import classNames from 'clsx';

import BackgroundImage from '../../atoms/BackgroundImage';
import { getDataAttrs } from '../../utils/get-data-attrs';
import { mapStylesToClassNames as mapStyles } from '../../utils/map-styles-to-class-names';

export default function Section(props) {
  const {
    elementId,
    className,
    colors = 'bg-light-fg-dark',
    backgroundImage,
    styles = {},
    children,
  } = props;

  return (
    <div
      id={elementId}
      className={classNames(
        'sb-component',
        'sb-component-section',
        className,
        colors,
        'relative',
        styles?.margin ? mapStyles({ margin: styles?.margin }) : undefined,
        styles?.padding ? mapStyles({ padding: styles?.padding }) : 'px-4 py-28'
      )}
      {...getDataAttrs(props)}
    >
      {backgroundImage && (
        <BackgroundImage {...backgroundImage} className="absolute inset-0" />
      )}
      <div className="w-full max-w-7xl mx-auto relative">{children}</div>
    </div>
  );
}

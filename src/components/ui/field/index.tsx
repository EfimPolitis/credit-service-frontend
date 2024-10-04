import cn from 'clsx';
import { forwardRef } from 'react';

import styles from './index.module.scss';
import type { TypeInputProps } from './index.types';

const Field = forwardRef<HTMLInputElement, TypeInputProps>(
  ({ error, type, style, className, Icon, ...rest }, ref) => {
    return (
      <div className={cn(styles.field, className)}>
        {Icon && (
          <div className={styles.icon}>
            <Icon />
          </div>
        )}
        <input ref={ref} type={type} style={style} {...rest} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);

Field.displayName = 'field';

export default Field;

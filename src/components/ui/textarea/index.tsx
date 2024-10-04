import cn from 'clsx';
import { forwardRef } from 'react';

import styles from './index.module.scss';
import { TypeTextAreaProps } from './index.types';

const TextArea = forwardRef<HTMLTextAreaElement, TypeTextAreaProps>(
  ({ error, className, ...rest }, ref) => {
    return (
      <div className={cn(className, styles.textarea)}>
        <textarea autoComplete='none' ref={ref} cols={40} rows={8} {...rest} />
        {error && <div className={styles.error}>{error.message}</div>}
      </div>
    );
  }
);

TextArea.displayName = 'textarea';

export default TextArea;

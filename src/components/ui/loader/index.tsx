import { Loader2 } from 'lucide-react';
import { CSSProperties } from 'react';

import styles from './index.module.scss';

const Loader = ({
  size,
  style,
  ...rest
}: {
  size?: number;
  style?: CSSProperties;
}) => {
  return (
    <div className={styles.container} style={style} {...rest}>
      <Loader2 className={styles.loader} size={size} />
    </div>
  );
};

export default Loader;

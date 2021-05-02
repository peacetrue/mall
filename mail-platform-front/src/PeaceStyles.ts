import {makeStyles} from '@material-ui/core/styles';

const widthStyles: Record<string, any> = {}
for (let i = 1; i <= 100; i++) {
  widthStyles[`width${i}`] = {
    maxWidth: `${i}em`,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };
}

export const useWidthStyles = makeStyles(widthStyles);

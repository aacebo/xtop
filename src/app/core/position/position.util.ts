import { ConnectedPosition } from '@angular/cdk/overlay';

import { Position } from './position.enum';

type xType = 'center' | 'start' | 'end';
type yType = 'center' | 'top' | 'bottom';
const POSITION_OFFSET = 16;

export function getPosition(position: Position): ConnectedPosition {
  let originX: xType = 'center';
  let originY: yType = 'top';
  let overlayX: xType = 'center';
  let overlayY: yType = 'bottom';
  let offsetX = 0;

  if (position === Position.Bottom) {
    originY = 'bottom';
    overlayX = 'center';
    overlayY = 'top';
  } else if (position === Position.Left) {
    originX = 'start';
    originY = 'center';
    overlayX = 'end';
    overlayY = 'center';
  } else if (position === Position.Right) {
    originX = 'end';
    originY = 'center';
    overlayX = 'start';
    overlayY = 'center';
  } else if (position === Position.BottomLeft) {
    originY = 'bottom';
    overlayX = 'end';
    overlayY = 'top';
    offsetX = POSITION_OFFSET;
  } else if (position === Position.BottomRight) {
    originY = 'bottom';
    overlayX = 'start';
    overlayY = 'top';
    offsetX = POSITION_OFFSET * -1;
  } else if (position === Position.TopLeft) {
    overlayX = 'end';
    offsetX = POSITION_OFFSET;
  } else if (position === Position.TopRight) {
    overlayX = 'start';
    offsetX = POSITION_OFFSET * -1;
  }

  return {
    originX,
    originY,
    overlayX,
    overlayY,
    offsetX,
  };
}

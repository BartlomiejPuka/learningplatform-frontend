import {SeWrapper} from './se-wrapper';
import {SeWidget} from './se-widget';

export class SeUtilFunctions{
  static getSe(): SeWrapper {
    return new SeWrapper(window['SE']);
  }
  static getSeWidget(dataId: string): SeWidget {
    const se = SeUtilFunctions.getSe();
    return new SeWidget(se.widget(dataId));
  }
  static dropSeWidget(dataId: string): void {
    const se = SeUtilFunctions.getSe();
    const widget = se.widget(dataId);
    const index = se.widgets.indexOf(widget, 0);
    if (index > -1) {
      se.widgets.splice(index, 1);
    }
  }
}

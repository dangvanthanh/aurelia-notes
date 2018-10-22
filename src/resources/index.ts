import { FrameworkConfiguration } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName('./value-converters/date-format'),
    PLATFORM.moduleName('./value-converters/full-date-format'),
    PLATFORM.moduleName('./value-converters/title-format')
  ]);
}

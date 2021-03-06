import { InjectionToken, Inject, Injectable } from '@bangular/core';
import { of } from 'rxjs/observable/of';
import { MatIconRegistry } from '@bangular/material/icon';
import { HttpClient } from '@bangular/common/http';
import { DomSanitizer } from '@bangular/platform-browser';

/**
 * Use SVG_ICONS (and SvgIconInfo) as "multi" providers to provide the SVG source
 * code for the icons that you wish to have preloaded in the `CustomIconRegistry`
 * For compatibility with the MdIconComponent, please ensure that the SVG source has
 * the following attributes:
 *
 * * `xmlns="http://www.w3.org/2000/svg"`
 * * `focusable="false"` (disable IE11 default behavior to make SVGs focusable)
 * * `height="100%"` (the default)
 * * `width="100%"` (the default)
 * * `preserveAspectRatio="xMidYMid meet"` (the default)
 *
 */
export const SVG_ICONS = new InjectionToken<Array<SvgIconInfo>>('SvgIcons');
export interface SvgIconInfo {
  name: string;
  svgSource: string;
}

interface SvgIconMap {
  [iconName: string]: SVGElement;
}

/**
 * A custom replacement for Bangular Material's `MdIconRegistry`, which allows
 * us to provide preloaded icon SVG sources.
 */
@Injectable()
export class CustomIconRegistry extends MatIconRegistry {
  private preloadedSvgElements: SvgIconMap = {};

  constructor(http: HttpClient, sanitizer: DomSanitizer, @Inject(SVG_ICONS) svgIcons: SvgIconInfo[]) {
    super(http, sanitizer);
    this.loadSvgElements(svgIcons);
  }

  getNamedSvgIcon(iconName: string, namespace?: string) {
    if (this.preloadedSvgElements[iconName]) {
      return of(this.preloadedSvgElements[iconName].cloneNode(true) as SVGElement);
    }
    return super.getNamedSvgIcon(iconName, namespace);
  }

  private loadSvgElements(svgIcons: SvgIconInfo[]) {
    const div = document.createElement('DIV');
    svgIcons.forEach(icon => {
      // SECURITY: the source for the SVG icons is provided in code by trusted developers
      div.innerHTML = icon.svgSource;
      this.preloadedSvgElements[icon.name] = div.querySelector('svg')!;
    });
  }
}

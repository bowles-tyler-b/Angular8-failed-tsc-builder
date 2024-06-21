import { BuilderContext, createBuilder } from '@angular-devkit/architect';
import { BrowserBuilderOutput, executeBrowserBuilder } from '@angular-devkit/build-angular';
import { JsonObject } from '@angular-devkit/core';
import { Observable } from 'rxjs';

interface Options extends JsonObject {
  command: string;
  args: string[];
}

function buildPlugin(options: Options,
  context: BuilderContext,
  transforms: {
    webpackConfiguration?: any,
  } = {}): Observable<BrowserBuilderOutput> {

  return executeBrowserBuilder(options as any, context, transforms);
}

export default createBuilder<Options>(buildPlugin);
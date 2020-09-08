/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import expect from '@kbn/expect';
import { enumeratePatterns } from '../team_assignment/enumerate_patterns';
import { resolve } from 'path';
import { ToolingLog } from '@kbn/dev-utils';

const ROOT = resolve(__dirname, '../../../../..');
const log = new ToolingLog({
  level: 'info',
  writeTo: process.stdout,
});

describe(`enumeratePatterns`, () => {
  it(`should not throw an unhandled error on a file path that is a glob, that expands to nothing`, () => {
    const absoluteRoot = '/Users/tre/development/projects/kibana';
    expect(
      enumeratePatterns(absoluteRoot)(log)(
        new Map([['src/legacy/core_plugins/kibana/public/home/*.ts', ['kibana-core-ui']]])
      )
    ).to.eql('');
  });
  it(`should resolve x-pack/plugins/reporting/server/browsers/extract/unzip.js to kibana-reporting`, () => {
    const actual = enumeratePatterns(ROOT)(log)(
      new Map([['x-pack/plugins/reporting', ['kibana-reporting']]])
    );

    expect(
      actual[0].includes(
        'x-pack/plugins/reporting/server/browsers/extract/unzip.js kibana-reporting'
      )
    ).to.be(true);
  });
});
